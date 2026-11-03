const STORAGE_KEY = "simple-todo-list";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const count = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");

let tasks = loadTasks();

function loadTasks() {
    try {
        const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        return Array.isArray(savedTasks)
            ? savedTasks.filter(
                (task) =>
                    task &&
                    typeof task.id === "string" &&
                    typeof task.text === "string" &&
                    typeof task.completed === "boolean"
            )
            : [];
    } catch (error) {
        console.error("Could not load saved tasks:", error);
        return [];
    }
}

function saveTasks() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Could not save tasks:", error);
    }
}

function renderTasks() {
    list.replaceChildren();

    for (const task of tasks) {
        const item = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", `Mark "${task.text}" as complete`);
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const text = document.createElement("span");
        text.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", `Delete "${task.text}"`);
        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter((savedTask) => savedTask.id !== task.id);
            saveTasks();
            renderTasks();
        });

        item.append(checkbox, text, document.createElement("br"), deleteButton);
        list.append(item);
    }

    const remainingTasks = tasks.filter((task) => !task.completed).length;
    count.textContent = `${remainingTasks} ${remainingTasks === 1 ? "task" : "tasks"} left`;
    emptyMessage.hidden = tasks.length > 0;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    tasks.push({
        id: crypto.randomUUID(),
        text,
        completed: false,
    });
    saveTasks();
    renderTasks();
    form.reset();
    input.focus();
});

renderTasks();
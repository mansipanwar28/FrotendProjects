const form = document.getElementById("regForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = Number(document.getElementById("age").value);
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const course = document.getElementById("course").value;
    const termsAccepted = document.getElementById("terms").checked;
    const gender = document.querySelector('input[name="gender"]:checked');
    const studyMode = document.querySelector('input[name="mode"]:checked');

    if (!name || !email || !document.getElementById("age").value) {
        error.textContent = "Please fill all basic details.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return;
    }

    if (!Number.isInteger(age) || age < 18 || age > 100) {
        error.textContent = "Age must be between 18 and 100.";
        return;
    }

    if (!gender) {
        error.textContent = "Please select Gender.";
        return;
    }

    if (!course) {
        error.textContent = "Please select a Course.";
        return;
    }

    if (!studyMode) {
        error.textContent = "Please select Study Mode.";
        return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        error.textContent = "Password must be at least 8 characters and include uppercase and lowercase letters, a number, and a special character.";
        return;
    }

    if (!confirmPassword) {
        error.textContent = "Please confirm your password.";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
    }

    if (!termsAccepted) {
        error.textContent = "You must accept Terms and Conditions.";
        return;
    }

    error.textContent = "";
    alert("Registration Successful for " + name);
});

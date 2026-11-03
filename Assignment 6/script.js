// ===================================================================
// Assignment 6: String Manipulation & Operations
// Name: Naman Chaudhary | Roll No: 2628mca0226 | Section: MCA Section C
// Faculty: Vijay Kumar
// ===================================================================

// Task 1: String declaration using single quotes, double quotes, and template literals
let firstName = 'Naman';                                           // Single quotes
let course = "MCA Section C";                                     // Double quotes
let studentInfo = `Student ${firstName} is enrolled in ${course}.`; // Template literals

console.log("--- 1. String Declarations ---");
console.log("Single quotes:", firstName);
console.log("Double quotes:", course);
console.log("Template literal:", studentInfo);


// Task 2: String length and character access using an index
console.log("\n--- 2. String Length and Character Access ---");
console.log(`Length of firstName (${firstName}):`, firstName.length);
console.log(`First character of course (${course}):`, course[0]);


// Task 3: String concatenation using concat() and the + operator
console.log("\n--- 3. String Concatenation ---");
let lastName = "Chaudhary";
let fullNamePlus = firstName + " " + lastName;
let fullNameConcat = firstName.concat(" ", lastName);

console.log("Using + operator:", fullNamePlus);
console.log("Using concat():", fullNameConcat);


// Task 4: Searching for a substring using indexOf()
console.log("\n--- 4. Searching Substring using indexOf() ---");
let searchWord = "Section";
let indexPosition = course.indexOf(searchWord);
console.log(`Index of '${searchWord}' in '${course}':`, indexPosition);


// Task 5: Extracting text using slice()
console.log("\n--- 5. Extracting Text with slice() ---");
let extractedText = course.slice(4); // extracts from index 4 to end
console.log("Extracted substring:", extractedText);


// Task 6: Replacing a word and all its occurrences using replace()
console.log("\n--- 6. Replacing Words with replace() ---");
let feedback = "Naman likes Java. Java is good.";
let replacedSingle = feedback.replace("Java", "JavaScript");
let replacedAll = feedback.replace(/Java/g, "JavaScript"); // Regex /g flag replaces all occurrences

console.log("Original String:", feedback);
console.log("Replaced first occurrence:", replacedSingle);
console.log("Replaced all occurrences:", replacedAll);


// Task 7: Converting text to uppercase and lowercase
console.log("\n--- 7. Uppercase and Lowercase ---");
console.log("Uppercase:", course.toUpperCase());
console.log("Lowercase:", course.toLowerCase());


// Task 8: Removing leading and trailing spaces using trim()
console.log("\n--- 8. Removing Spaces with trim() ---");
let spacedString = "   MCA Section C   ";
console.log(`Original: '${spacedString}'`);
console.log(`Trimmed: '${spacedString.trim()}'`);


// Task 9: Converting a comma-separated list into an array using split()
console.log("\n--- 9. Comma-separated list to Array with split() ---");
let subjects = "JavaScript, Python, Data Structures";
let subjectsArray = subjects.split(", ");
console.log("Resulting Array:", subjectsArray);
console.log("Array length:", subjectsArray.length);
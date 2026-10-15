/* Phase 2: Form Validation and Error Messaging

Requirements
Implement client-side validation logic that checks the input values when the form is submitted and displays error messages if the data is invalid:

Clear any previous error messages each time the user clicks submit.

Check each of the following rules:
Name: Must not be empty (ignoring accidental leading/trailing spaces). If empty, report: “Please provide your name.”
Rating: Must be equal to 5. If less than 5, report: “Our company standard requires a 5-star rating.”
Comments: Must contain the word "wonderful" (case-insensitive, e.g., “Wonderful”, “WONDERFUL”, or “wonderful”). If missing, report: “Comments must include the word ‘wonderful’.”

If one or more errors occur:
Display all relevant error messages inside your error container on the page in red or styled text.
Stop further processing so no success message is shown.

Hints
You can remove whitespace from string ends using .trim().
To check for case-insensitive text, convert the comment string to lowercase with .toLowerCase() and check if it contains the substring using .includes("wonderful").
A helpful pattern is to collect errors into an array (e.g., let errors = [];), push error message strings onto the array when checks fail, and check if (errors.length > 0).
To display multiple errors, you can populate innerHTML with a list or join your error strings with <br>. */

//Select the form and the three input fields.
const feedbackForm = document.getElementById("feedback-form");

const userName = document.getElementById("reviewer-name");

const starRating = document.getElementById("rating");

const userComment = document.getElementById("comments");

const errorBox = document.getElementById("error-box");

//Listen for the form's "submit" event.
feedbackForm.addEventListener("submit", function(event) {

    //Prevent the browser from refreshing and log the entered values to the console.
    event.preventDefault();

    errorBox.innerHTML = "";

    let errors = [];

    const user = userName.value.trim();

    if (user==="") {

        errors.push("Please provide your name.");

    }

    const rating = Number(starRating.value);

    if (rating < 5) {

        errors.push("Our company standard requires a 5-star rating.");

    }

    const comment = userComment.value.toLowerCase();

    if (!comment.includes("wonderful")) {

        errors.push("Comments must include the word 'wonderful'.");
        

    }

    if (errors.length > 0) {

        errorBox.innerHTML = errors.join("<br>");

        return;

    }

    console.log(userName.value);
    console.log(starRating.value);
    console.log(userComment.value);

});


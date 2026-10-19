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

/*
Phase 3: Successful Submission and Local Storage State

Requirements
Handle what occurs when a valid submission passes all checks, and use localStorage to persist the user’s name:

When validation passes with no errors:
Clear the error container.
Display a success banner (e.g., “Thank you, [Name]! Your glowing review has been recorded.”).
You can also hide the form if you want to really sell the “submitted” effect
Save the reviewer’s name to localStorage under the key "reviewerName".

On initial page load (when the script runs or the DOM loads):
Check localStorage for the key "reviewerName".
If a name exists in localStorage, display a friendly welcome message above the form (e.g., “Welcome back, [Name]! Ready to submit another wonderful review?”) and pre-fill the name input field with their saved name.

Hints
You’ll need to add some new divs or containers to your html for these new messages.
Use localStorage.setItem("reviewerName", name) to store the name when the form successfully validates.
Use localStorage.getItem("reviewerName") to retrieve the stored string. If the key has not been set yet, getItem() returns null.
Setting the .value property on your input element lets you pre-populate it with the retrieved name.
*/

/*
Phase 4: Validation & Reflection

Requirements
Manual Testing: Test all input paths thoroughly in your browser:
Try submitting an empty form to verify all error messages appear.
Try submitting with a 4-star rating or comments missing “wonderful” to verify individual error detection.
Enter a valid 5-star review containing “wonderful” and confirm the success message displays and the form clears/hides.
Refresh the page to confirm that localStorage retains your name and pre-populates the input or displays the welcome back banner.

Hints
Inspect your browser’s developer tools (Application / Storage tab -> Local Storage) to view, verify, or manually clear your stored key-value pairs.
You can test your site as a brand-new user either by deleting the entry in developer tools or by executing localStorage.clear() in the browser console.
*/

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

    errorBox.innerHTML = "Thank you for your wonderful feedback!";

    localStorage.setItem("reviewerName", user);
    
    console.log(userName.value);
    console.log(starRating.value);
    console.log(userComment.value);

});

const savedName = localStorage.getItem("reviewerName");

if (savedName) {
    userName.value = savedName;
    document.getElementById("welcome-box").innerHTML =
    "Welcome back, " + savedName + "! Ready to submit another wonderful review?";
}
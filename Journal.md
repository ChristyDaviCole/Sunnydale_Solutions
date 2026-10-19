Journal Prompt 1:
What did you accomplish in this phase? 
I created the HTML file that contained the customer rating/feedback form that allows user to enter their name, star rating 1-5, comments, a submit button that will soon have an event listener waiting for the submit event, and a div to hold validation/error messages. I made sure to give each element an id so that I could locate them in JS to using document.getElementById. As always, I linked my JS file to the HTML page.
What happens if you forget to include event.preventDefault() when handling a form submission in client-side JavaScript, and why is preventing the default behavior necessary when you do not have a backend server endpoint?
So event.preventDefault() is necessary because forms normally attempt to submit their data to a server, which can cause the browser to reload or navigate to another page. If I were to forget to use it, the browser will attempt normal submission and cause the page to reload and clear any messages displayed by JS. This project doesn't use a backend server, so it's necessary for JS to handle the submission without refreshing the page.

Journal Prompt 2:
What validation approach did you take to collect and display errors?
I made and used an array called errors to collect validation errors. To display them, I used errors.join("<br>") to display each one on a new line inside the error container on the page.
Did you display errors all at once or one at a time, and what are the user experience pros and cons of your chosen approach?
I chose to display them all at once becuase that's what the assignment required. The benifit of doing so is that the user can see all at once what needs to be corrected, so it saves time. The disadvantage is that it might be overwhelming to see so many errors all at once.

Journal Prompt 3:
What did you accomplish in this phase? 
A success message was added to display when the form is submitted correctly.
Compare using localStorage to cookies: why is localStorage often simpler to use for client-only state, and when might a website prefer cookies over localStorage?
localStorage is simpler a lot of the time because it's easy to save and retrieve data using JS and the data is saved even after the browser closes. Cookies are preferred if a website needs to send infor to the server with HTTP requests.

Journal Prompt 4:
What edge cases or unexpected behaviors did you encounter while testing your form validation and local storage? If you asked an AI tutor to review your code, what suggestions did it make, and how did you decide whether to adopt them?
I didn't encounter any unexpected behaviors. I tested with multiple combos of acceptable and unacceptable answers and the program worked as expected.
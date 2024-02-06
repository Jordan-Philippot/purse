
# Purse Frontend Test

Please allocate half a day to complete this test at home. You can share your work in any format you prefer, such as a Zip archive or a Github repository.

## Warm-up

1.  **Table Availability Function:** A restaurant owner asks you to write a function to find the position of the first available table from a list. If none are available, return -1.
2.  **Asynchronous Version:** Develop an asynchronous version of the above function.

## Fun with Pictures

Given the following code snippet:

```javascript
var urls = [  
     { url: 'https://jsonplaceholder.typicode.com/photos/1'}, 
     { url: 'https://jsonplaceholder.typicode.com/photos/2'}, 
     { url: 'https://jsonplaceholder.typicode.com/photos/3'}
];  

var photos = [];

for (i = 0; i <= urls.length; i++) { 
    response = fetch(urls[i].url); 
    photos[i] = response;
}

console.log(photos);

// 1. What will be printed?
// 2. Fix the code
// 3. Write your preferred solution
```

### Tasks:

1.  **Review and Fix:** The program does not work as expected. Review the code, fix any errors, and add comments.
2.  **Improved Solution:** Propose a more efficient and elegant solution for fetching and displaying the photos.
3.  **Display Images:** Using pure JavaScript, display the list of images on a web page.

## Time to Take a Break

Pun intended. Develop a simple Leave Management System for managers and employees.

### A Page for Managers:

-   **Functionality:**
    -   Display a list of leave requests with details: employee name, validation status (pending, approved, rejected), and period.
    -   Include functionality to view detailed information on a request, including comments and buttons to approve or reject the request.

### A Form For Employees:

-   **Functionality:**
    -   Provide a form for employees to submit leave requests. The form should include fields for the employee name, period of leave, and a comment section.

### Technical Requirements:

-   You may use a UI framework of your choice (preferably React or Svelte).
-   You may use a UI Kit.
-   The choice of data source and state management is up to you.
-   The interface should be simple, yet well-crafted.

Good luck.

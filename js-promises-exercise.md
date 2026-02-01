# JavaScript Promises & Async HTTP Requests Exercise

## Objective
Practice working with JavaScript Promises, async/await, and the Fetch API by building a simple menu-driven application that fetches data from JSONPlaceholder and displays statistics.

## Requirements

Build a simple console application with a 3-option menu:

1. **Option 1**: Fetch 10 posts from JSONPlaceholder
2. **Option 2**: Display statistics about the fetched posts
3. **Option 3**: Display average API call time

### Specific Requirements:

- Use the Fetch API to make HTTP requests to JSONPlaceholder (`https://jsonplaceholder.typicode.com`)
- Implement async/await for handling asynchronous operations
- **MUST print a "Loading..." state to the console BEFORE each fetch operation**
- Store the fetched data for use in statistics options
- **Track and store the time taken for each API call**
- Handle errors appropriately with try/catch blocks

## API Endpoint to Use

- **Posts**: `https://jsonplaceholder.typicode.com/posts`

## Tools & Modules

- **readline**: Node.js built-in module for reading user input (no installation needed)
- **fetch**: Available in Node.js 18+ (or use `node-fetch` package for older versions)
- **ES6 Modules**: This exercise uses `import` syntax, so you'll need to either:
  - Add `"type": "module"` to your `package.json`, OR
  - Name your file with `.mjs` extension (e.g., `exercise.mjs`)

## Menu Options Detail

### Option 1: Fetch 10 Posts
- Display "Loading posts..." to console
- **Track the start time before making the API call**
- Fetch 10 posts from the API
- **Track the end time after the API call completes**
- **Store the time taken (in milliseconds) for this request**
- Store the posts in a variable for later use
- Display success message with count of posts fetched
- Print the titles of all fetched posts

### Option 2: Post Statistics
- Check if posts have been fetched (if not, display an error message)
- Calculate and display the following statistics:
  - **Total number of posts** fetched
  - **Average body length** (calculate the mean number of characters across all post bodies)
  - **Shortest post title** (find and display the title with the fewest characters)
  - **Longest post title** (find and display the title with the most characters)
  - **Total word count** across all post bodies (split by spaces and count)
  - **Post with most characters in body** (display the post ID or title)

### Option 3: API Performance Statistics
- Check if any API calls have been made (if not, display an error message)
- Display:
  - Total number of API calls made
  - Average time per API call (in milliseconds)
  - Fastest API call time
  - Slowest API call time

### Option 4: Exit
- Display goodbye message and close the application

## Starter Code Structure

```javascript
import readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Global variables to store fetched posts and API call times
let posts = [];
let apiCallTimes = [];

// Function to display menu
function displayMenu() {
    console.log('\n=== MENU ===');
    console.log('1. Fetch 10 Posts');
    console.log('2. Display Post Statistics');
    console.log('3. Display API Performance Statistics');
    console.log('4. Exit');
    console.log('============\n');
}

// Helper function to get user input
function promptUser(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Option 1: Fetch posts
async function fetchPosts() {
    // TODO: Implement this function
    // Remember to:
    // 1. Print "Loading posts..." before fetching
    // 2. Track start time with Date.now()
    // 3. Make the fetch request
    // 4. Track end time and calculate duration
    // 5. Store the duration in apiCallTimes array
}

// Option 2: Display post statistics
function displayPostStatistics() {
    // TODO: Implement this function
}

// Option 3: Display API performance statistics
function displayApiPerformance() {
    // TODO: Implement this function
}

// Main function to run the application
async function main() {
    let running = true;
    
    while (running) {
        displayMenu();
        const choice = await promptUser('Enter your choice (1-4): ');
        
        switch (choice) {
            case '1':
                await fetchPosts();
                break;
            case '2':
                displayPostStatistics();
                break;
            case '3':
                displayApiPerformance();
                break;
            case '4':
                console.log('Goodbye!');
                running = false;
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter 1, 2, 3, or 4.');
        }
    }
}

// Run the application
main();
```

## Tasks to Complete

1. **Set up your project**:
   - Create a `package.json` with `"type": "module"` OR use `.mjs` extension
   - Example package.json:
     ```json
     {
       "name": "js-promises-exercise",
       "type": "module"
     }
     ```

2. **Implement `fetchPosts()`**:
   - Print "Loading posts..." loading state
   - Track start time using `Date.now()` or `performance.now()`
   - Fetch 10 posts from the API
   - Track end time and calculate the duration
   - Store the duration in the `apiCallTimes` array
   - Store the posts in the global `posts` array
   - Handle errors with try/catch
   - Print success message and post titles

3. **Implement `displayPostStatistics()`**:
   - Check if posts have been fetched (show error if not)
   - Calculate the following statistics:
     - Total number of posts
     - Average body length in characters (use `reduce()` to sum, then divide)
     - Shortest title (use `reduce()` or `sort()` to find)
     - Longest title (use `reduce()` or `sort()` to find)
     - Total word count across all bodies (split each body by spaces)
     - Post with the most characters in its body
   - Display all results in a clear, formatted way

4. **Implement `displayApiPerformance()`**:
   - Check if any API calls have been made (show error if not)
   - Calculate:
     - Total number of API calls
     - Average time per call
     - Fastest call time
     - Slowest call time
   - Display results in milliseconds

5. **Test the application**:
   - Run the program with `node filename.js`
   - Test option 1 multiple times to accumulate API timing data
   - Test all menu options in different orders
   - Try options 2 and 3 before option 1 to test validation
   - Ensure the menu loops until option 4 is selected

## Bonus Challenges

- Add a fifth menu option for **User Statistics**:
  - Display "Loading user data..." before fetching
  - Extract unique user IDs from fetched posts
  - Fetch user data for those IDs (this creates additional API calls!)
  - Track the timing for these API calls too
  - Display number of unique users and their names
- Add error handling for network failures with retry logic
- Implement a way to fetch a different number of posts (not just 10)
- Add a menu option to find the most active user (user with most posts)
- Use `Promise.all()` to fetch all user data in parallel and compare timing
- Add input validation for menu choices
- Track and display separate statistics for different API endpoints (posts vs users)

## Expected Console Output Example

```
=== MENU ===
1. Fetch 10 Posts
2. Display Post Statistics
3. Display API Performance Statistics
4. Exit
============

Enter your choice (1-4): 1

Loading posts...
✓ Successfully fetched 10 posts!

Post Titles:
1. sunt aut facere repellat provident...
2. qui est esse...
...

=== MENU ===
1. Fetch 10 Posts
2. Display Post Statistics
3. Display API Performance Statistics
4. Exit
============

Enter your choice (1-4): 2

=== Post Statistics ===
Total posts: 10
Average body length: 145 characters
Shortest title: "qui est esse" (11 characters)
Longest title: "sunt aut facere repellat provident occaecati..." (57 characters)
Total word count: 289 words
Post with most characters in body: Post #3 - "ea molestias quasi..." (196 characters)

=== MENU ===
1. Fetch 10 Posts
2. Display Post Statistics
3. Display API Performance Statistics
4. Exit
============

Enter your choice (1-4): 1

Loading posts...
✓ Successfully fetched 10 posts!

Post Titles:
1. sunt aut facere repellat provident...
...

=== MENU ===
1. Fetch 10 Posts
2. Display Post Statistics
3. Display API Performance Statistics
4. Exit
============

Enter your choice (1-4): 3

=== API Performance Statistics ===
Total API calls made: 2
Average response time: 156ms
Fastest call: 142ms
Slowest call: 170ms

=== MENU ===
1. Fetch 10 Posts
2. Display Post Statistics
3. Display API Performance Statistics
4. Exit
============

Enter your choice (1-4): 4
Goodbye!
```

## Learning Outcomes

By completing this exercise, you will:
- Understand how to work with Promises and async/await
- Practice making HTTP requests with the Fetch API
- Learn to handle asynchronous operations in sequence
- **Understand how to measure API call performance using timing**
- Learn to store and manipulate fetched data
- Practice error handling with try/catch blocks
- Work with arrays and array methods (map, filter, reduce)
- Gain experience with Node.js readline for interactive CLI applications

Good luck! 🚀

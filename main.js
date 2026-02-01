import readline from "readline";

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Global variables to store fetched posts and API call times
let posts = [];
let apiCallTimes = [];

// Function to display menu
function displayMenu() {
  console.log("\n=== MENU ===");
  console.log("1. Fetch 10 Posts");
  console.log("2. Display Post Statistics");
  console.log("3. Display API Performance Statistics");
  console.log("4. Exit");
  console.log("============\n");
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
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  try {
    console.log("Loading posts...")
    const startTime = Date.now()
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const endTime = Date.now()

    const result = await response.json();
    console.log(result);

    console.log(`API call took ${endTime - startTime} milliseconds`)
    apiCallTimes.push(endTime - startTime)
    return result
  } catch (err) {
    console.error(err);
  }
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
    const choice = await promptUser("Enter your choice (1-4): ");

    switch (choice) {
      case "1":
        await fetchPosts();
        break;
      case "2":
        displayPostStatistics();
        break;
      case "3":
        displayApiPerformance();
        break;
      case "4":
        console.log("Goodbye!");
        running = false;
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please enter 1, 2, 3, or 4.");
    }
  }
}

// Run the application
main();

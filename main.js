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
    console.log("Loading posts...");
    const startTime = Date.now();
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const endTime = Date.now();

    const result = await response.json();
    posts.push(result);
    console.log(`API call took ${endTime - startTime} milliseconds`);
    apiCallTimes.push(endTime - startTime);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// Option 2: Display post statistics
function displayPostStatistics(data) {
  let min_title = data[0].title.length;
  let max_title = data[0].title.length;
  for (let i = 1; i < data.length; i++) {
    const element = data[i].title.length;
    if (element < min_title) {
      min_title = element;
    }
    if (element > max_title) {
      max_title = element;
    }
  }
  const arr_length = data.length;
  let sum = 0;
  data.forEach((element) => {
    sum += element.body.length;
  });
  let sum_words = 0;
  data.forEach((element) => {
    const element2 = element.body.split(" ").length;
    sum_words += element2;
  });

  let max_chr_in_post = data[0].body.length;
  for (let i = 1; i < data.length; i++) {
    const element3 = data[i].body.length;
    if (element3 > max_chr_in_post) {
      max_chr_in_post = element3;
    }
  }

  console.log(`sum of posts: ${data.length}`);
  console.log(`min title: ${min_title}`);
  console.log(`max title: ${max_title}`);
  console.log(`Post with max characters in is body: ${max_chr_in_post}`);
  console.log(`sum of all the words: ${sum_words}`);
  console.log(`EVG of body letters length: ${sum / arr_length}`);
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
        const data = await fetchPosts();
        displayPostStatistics(data);
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

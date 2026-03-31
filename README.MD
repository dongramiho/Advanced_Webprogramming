# Assignment: Node.js Basic Web Server Implementation

This repository is submitted for the assignment to implement and analyze a basic web server based on the Node.js tutorial by Dave Gray. The project demonstrates the core principles of an HTTP server and file system management in Node.js.

---

## Student Information
- **Name:** Lee Dong-ho (이동호)
- **Student ID:** 202239878
- **Affiliation:** Dept. of AI, Gachon University
- **GitHub:** [dongramiho](https://github.com/dongramiho)

---

##  Task Execution Details

### 1. Code Modification
As per the assignment requirements, I have added a statement to identify the user in the console output.
- **Added Line:** `console.log("Lee Dong-ho");`
- **Location:** Inside the `server.listen` callback function in `server.js`.

### 2. How to Run
Follow these steps to run the project in your local environment:

```bash
# 1. Clone the repository
git clone [https://github.com/dongramiho/](https://github.com/dongramiho/)[YOUR_REPO_NAME].git

# 2. Navigate to the directory
cd [YOUR_REPO_NAME]

# 3. Install dependencies
npm install

# 4. Execute the server
npm start
# OR
node server.js

3. Code Analysis (Technical Explanation)
This project implements a "Vanilla" Node.js web server without external frameworks like Express, focusing on low-level API operations:

HTTP Module: Utilizes http.createServer to handle incoming client requests and generate appropriate responses.

File System (fs) & Path: Employs fs.promises and the path module to asynchronously read and serve static assets (HTML, CSS, JS, Images) from the server's directory.

Routing Logic: Implements dynamic routing that maps requested URLs to specific file paths, including a custom 404 error page handler.

MIME Type Handling: Uses a switch statement or conditional logic to identify file extensions and set the correct Content-Type header for the browser.

Event Logging: Integrates an EventEmitter to log server activities and errors into text files for monitoring.

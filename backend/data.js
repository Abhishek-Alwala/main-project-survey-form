const data = [
    {
        name: 'Default',
    },
    {
        name: 'Dark',
    },
    {
        name:"pink"
    }
];

exports.data = data





// Import the necessary modules
//const fs = require('fs');

////const git = require('isomorphic-git');
//const http = require('isomorphic-git/http/node'); // For node environment
//const path = require('path');

// Define the repository URL (if working with a remote repository)
//const repoPath = path.resolve('./my-repo'); // Local repository path

// Function to get commit information and render as an object
//async function getGitCommits() {
//  try {
    // Get the list of commits in the repository
//    const commits = await git.log({
     // fs,
     // dir: repoPath,
     // depth: 10 // You can specify the number of commits to fetch
   // });///

    // Loop through the commits and render them as objects
   // commits.forEach(commit => {
     // console.log({
       // commitHash: commit.oid,         // Commit hash
       // author: commit.author.name,     // Author name
       // email: commit.author.email,     // Author email
      //  message: commit.message,        // Commit message
       // timestamp: commit.committer.timestamp // Commit timestamp
    //  });
   /// });
  //} catch (error) {
 //   console.error('Error fetching commits:', error);
//  }
//}//

// Call the function to get commits and render them
//getGitCommits();//

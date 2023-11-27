// Problem 1:

// Using promises and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously


const { problem1 } = require("../fs-problem1");

const absolutePath = "./myFolder";
const randomFiles = Math.round(Math.random() * 10) + 1;

problem1(absolutePath, randomFiles);

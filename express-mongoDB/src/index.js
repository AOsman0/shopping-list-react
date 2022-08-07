// require express
const express = require("express");

// require mongoDB and client

const { MongoClient } = require("mongodb");

// create a port and create a an app using express function

const PORT = 4000;

const app = express();

// create a connection string URI

const connectionStringURI = `mongodb://127.0.0.1:27017/books_db`;

// create an express server connection

// add middlewears to express server add the

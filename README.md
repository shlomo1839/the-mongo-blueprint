# the-mongo-blueprint

MongoDB Node.js Basic CRUD Operations:

​A simple demonstration of how to interact with a MongoDB database using the official Node.js driver.
This script covers the fundamental operations (Create, Read, Update, Delete) and basic configuration.

​Key Features:
    ​Connection Handling: Establishes a secure connection to MongoDB using Environment Variables.
    ​Indexing: Shows how to create unique indexes to prevent duplicate data.
    ​CRUD Operations: * Create: Inserting single documents.
        ​Read: Finding specific documents or fetching all data with sorting.
        ​Update: Using $set to modify fields or replaceOne to swap entire documents.
        ​Delete: Finding and removing documents in a single step.
    ​Resource Management: Ensures the database connection is closed properly after execution.

    ​Prerequisites
        ​Node.js installed.
        ​MongoDB instance (Local or Atlas).
        ​A .env file containing your MONGO_URI.


​Getting Started:
1. install dependencies:
   npm install mongodb

2. run the script:
    node 'your-file-name.js

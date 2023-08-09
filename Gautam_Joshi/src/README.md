Instructions for Environment Setup:

Install Node.js:
 You can download and install it from the official Node.js website: https://nodejs.org/

Install Dependencies:
the following command to install the required dependencies (express, fs, fast-csv): #npm install express fs fast-csv
Run the Application: node app.js
You should see the message "Server is running on port 3000" indicating that the server has started.

My Approach:

My approach to the problem was centered around parsing and cleaning the data from a CSV file and storing it in an array. This array was meant to be used for calculating the net-revenue.

Shortcomings of my Solution:

My solution has some shortcomings that I identified:
The API doesn't function as intended, likely due to issues with accessing the stored data.
The coupling of parsing logic within the POST method makes the code less modular.
There's a lack of error handling for scenarios such as missing CSV files or data format issues.

What You Would Add:
I would make the API functional so that it correctly retrieves and displays data.
Implement proper error handling for cases where the CSV file is missing or has unexpected formats.
Enhance the API to support adding and removing transactions.
I would decouple the parsing logic from the POST method to improve code modularity. This would allow me to reuse the parsing logic in different parts of the application if needed.


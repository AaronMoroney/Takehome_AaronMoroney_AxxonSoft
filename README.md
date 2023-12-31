# TakeHomeTest_Aaron Frontend Developer Test Task

## Project Description
This project contains a simple React application that renders a list of users which can be filtered by organization. The users can be filtered by clicking on the organization name and the filter can be reset by clicking on the “reset” button. The application demonstrates the use of React hooks for state and effect management and includes a mock backend for API interactions.

## Installation Note

Important Notice: 
Node.js Compatibility Issue

Error Description:
When running the project with Node.js version 17 I encountered the following error: error:0308010C:digital envelope routines::unsupported. This issue arises due to changes in the way Node.js handles  operations. The new version removes support for certain legacy algorithms and modes, which some dependencies in this project might still rely on.

Temporary Solution:
To resolve this issue - I modified the npm start script in package.json to include the legacy provider option. This is a temporary solution for the purposes of this interview coding exam. 

## Installation

To get started with this project, follow the steps below:

1. Clone the repository to your local machine.
  - git clone <repository-url>
2. Navigate to the project directory.
  - cd takehometest_aaron
3. Install the necessary dependencies.
  - npm install
4. run the application in development mode from your terminal.
  - npm start
5. Open the project in your browser.
  - Open http://localhost:3000

## Usage
n the application, users are displayed in a list with their associated organization. You can filter the list by clicking on an organization name. To reset the filter and view all users, click the “reset” button.

# Code Refactoring
As part of the job interview process, the provided code was refactored to improve performance and maintainability. Comments have been added to the refactored code to explain the changes and the reasons behind them.

# Restrictions
Please note that as per the test task instructions, api.js and mock-fetch.js should not be modified. These files are to be considered as simulating HTTP requests.

# Support
For any additional information or support, please contact the hello@aaronmoroney.com






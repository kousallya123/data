# React Firebase Project

## Project Overview

This project is a React application that fetches and displays data from a Firebase Realtime Database. It includes features such as searching, sorting, and displaying data in a table. The data used is employee information with columns for Name, Age, City, and Position.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/kousallya123/data.git

2. Install project dependencies:
    ```bash
    npm install

3. Create a Firebase project and configure it in ./src/firebase.js. You can follow the instructions on the Firebase Console to create a new project and obtain the necessary configuration.

4. Run the application:

   ```bash
   npm run dev

 This will start the development server, and you can view the application in your browser at http://localhost:5173.  


# Usage 

- The application displays employee data in a table.
- Use the search bar to filter data based on the entered search term.
- Select the number of rows to display at once using the dropdown menu.
- Sort data by Name, City, Age, or Position using the sorting dropdown.

# Deployment

This project is hosted on Firebase Hosting. You can access the live version of the application at https://data-fb2f5.firebaseapp.com/.

# Additional Notes

- Ensure that the Firebase Realtime Database has the necessary data structure.

Feel free to reach out if you have any questions or encounter issues.

   ```sql
   
Make sure to replace placeholders like `https://data-fb2f5.firebaseapp.com/` with your actual deployment link and update any other details specific to your project.

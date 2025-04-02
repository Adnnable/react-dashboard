# React Dashboard Assignment

This project is a simple dashboard built with React.js and TypeScript, fulfilling the requirements of the Frontend Developer Assignment. It displays a list of "Runs" and provides detailed information for each run on a separate page.

## Features

-   *List Page:*
    -      Displays a list of "Runs" fetched from a JSON file.
    -      Shows columns: id, name, status, and date.
    -      Implements pagination.
    -      Each row links to the detailed page for the run.
-   *Details Page:*
    -      Displays all details of a selected run.
    -      Includes a "Back" button to return to the list page.
    -   Displays the run name in 3D Text using BabylonJS inside an iframe.
    -   Has buttons to change the color of the 3D Text inside the iframe.
-   *Routing:* Uses React Router for navigation.
-   *UI Design:* Clean and responsive layout.
-   *Error Handling:* Displays error messages for failed data loading or invalid run IDs.
-   *Data:* Fetches data from a JSON file using promises.

## Technologies Used

-   React.js
-   TypeScript
-   React Router
-   BabylonJS
-   CSS (or your chosen styling library)

## Setup and Installation

1.  *Clone the repository:*

    bash
    git clone <https://github.com/Adnnable/react-dashboard>
    cd <react-dashboard>
    

2.  *Install dependencies:*

    bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    

3.  *Run the application:*

    bash
    npm start
    # or
    yarn start
    # or
    pnpm start
    

    The application will be available at http://localhost:3000 (or the port specified by your development environment).

## Project Structure


<repository_name>/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── RunList.tsx
│   │   ├── RunDetails.tsx
│   │   └── ... (other components)
│   ├── pages/
│   │   ├── ListPage.tsx
│   │   ├── DetailsPage.tsx
│   │   └── IframePage.tsx (Or static html file)
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── ...
├── package.json
├── tsconfig.json
├── README.md
└── ...

-   public/: Contains static assets, including index.html.
-   src/components/: Reusable React components.
-   src/pages/: Page-level components for the list and details views.
-   App.tsx: Main application component.
-   index.tsx: Entry point of the application.
-   package.json: Project dependencies and scripts.
-   tsconfig.json: TypeScript configuration.
-   README.md: Project documentation.

## How to use the Project

1.  *List Page:*
    -      Upon opening the application, you will be directed to the list page.
    -      The list displays the runs with their id, name, status, and date.
    -      Clicking on a row will navigate you to the details page for that run.
    -   Pagination is implemented to navigate through the runs.

2.  *Details Page:*
    -      The details page shows all the information about the selected run.
    -   The run name is rendered in 3D text in an iframe.
    -   Buttons are available to change the color of the 3D text (green, yellow, red).
    -      Clicking the "Back" button will return you to the list page.

3.  *Iframe and 3D Text:*
    -   The 3D text is rendered using BabylonJS inside an iframe.
    -   The color of the 3D text is controlled by the buttons on the details page.
    -   The communication between the main react app and the iframe is done by sending messages using window.postMessage and receiving them via window.addEventListener('message', event => {}).

## Error Handling

-      If the data fails to load, an error message will be displayed on the list page.
-      If an invalid run ID is accessed, an error message will be displayed on the details page.

## Optional Extras

-   Sorting and filtering functionalities can be added to the list page for better data management.
-   Loading spinners or animations can be implemented to enhance the user experience during data loading.

## Committing History

The project includes a detailed commit history, showcasing the development process and the implementation of each feature.
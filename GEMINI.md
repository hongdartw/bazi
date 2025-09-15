# Project: Bazi Calculation Web Application

## Project Overview

This project aims to convert the functionality of the `干支計算含大運V13beta.xlsx` Excel file into a client-side web application. The application will calculate the Bazi (Four Pillars of Destiny) from a given Gregorian date and time, and display the results along with detailed interpretations.

The core of this project lies in accurately translating the unique calculation logic from the Excel file, especially the non-traditional year-pillar transition, into JavaScript. The final product will be a static web application, deployable on GitHub Pages, built with HTML, CSS, and JavaScript.

## Key Files

*   `干支計算含大運V13beta.xlsx`: The source Excel file containing the original Bazi calculation logic and data.
*   `Bazi_Calculation_Analysis.md`: A detailed analysis of the Excel file's calculation methods and data structures.
*   `prompt.md`: The project brief outlining the requirements for the web application.
*   `index.html`: The main HTML file for the web application (to be created).
*   `style.css`: The CSS file for styling the web application (to be created).
*   `script.js`: The JavaScript file containing the calculation logic and DOM manipulation (to be created).

## Building and Running

As this is a client-side project, there is no build process. To run the application, simply open the `index.html` file in a web browser.

## Development Conventions

*   All calculation logic should be implemented in `script.js`.
*   Data from the `data` and `data2` sheets of the Excel file should be converted into JavaScript data structures (e.g., arrays of objects, maps) and stored in `script.js`.
*   The application should be tested against the original Excel file to ensure the accuracy of the calculations.

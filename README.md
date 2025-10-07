
Deployment Link : https://imaginative-medovik-44ab52.netlify.app/
      
Permalink : https://68e142cf3bf38eaca2682425--imaginative-medovik-44ab52.netlify.app/

Enhancement Decisions – Overview
Used React with Vite:
Vite was chosen for its faster build times and better development experience compared to CRA (Create React App).

Component-Based Structure:
The UI was broken into reusable components for better maintainability.

API Handling with useEffect:
Data fetching was handled using the fetch() API inside useEffect, ensuring the API call runs only on component mount.

Loading and Error States:
Implemented basic loading indicators and error handling to improve user experience.

Responsive Design:
CSS was used to ensure the layout works across different screen sizes.

Deployment via Netlify:
Netlify was used for quick and free deployment with a custom build command for Vite (npm run build).

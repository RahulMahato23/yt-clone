# YouTube Clone

This project is a YouTube clone built using React, React Router, and other modern web technologies. It mimics the basic functionality of YouTube, including video cards, a sidebar, a header, and the ability to add new video cards.

## Features

- **Home Page**: Displays a list of video cards fetched from a mock JSON server.
- **Add Video Card**: A form to add new video cards to the database.
- **Responsive Design**: Styled using CSS and Material-UI for a clean and responsive layout.
- **Toast Notifications**: Provides feedback for user actions using `react-toastify`.
- **Dynamic Sidebar**: Includes a collapsible sidebar with navigation options.
- **Tags**: Filter-like tags for categorizing content.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **MDB React UI Kit**: For form validation and UI components.
- **Material-UI**: For icons and additional styling.
- **React Toastify**: For toast notifications.
- **JSON Server**: For simulating a backend API.


## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
2. Install dependencies:
    ```bash
    npm install
3. Start the JSON server:
    ```bash
    npm run server
4. Start the React development server:
    ```bash
    npm start
5. Open http://localhost:3000 in your browser.

## Available Scripts

    npm start
Runs the app in development mode. Open http://localhost:3000 to view it in your browser.

    npm run server
Starts the JSON server to simulate a backend API. The server runs on http://localhost:5000.

    npm test
Launches the test runner in interactive watch mode.

    npm run build
Builds the app for production to the build folder.

    npm run eject
Ejects the app configuration for customization.

## API Endpoints

The project uses a mock API powered by JSON Server. The following endpoints are available:

    GET /Cards: Fetch all video cards.
    POST /Cards: Add a new video card.

## How to Add a Video Card

1. Navigate to the "Add a video card" page using the link in the header.
2. Fill in the form fields (e.g., thumbnail, URL, duration, channel name, etc.).
3. Submit the form to add the video card to the database.

## Future Enhancements

- Add search functionality.
- Implement video playback.
- Add user authentication.
- Enhance the UI with more animations and transitions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React
- Material-UI
- MDB React UI Kit
- React Toastify
- JSON Server
📝 Notes Management App (React)
📌 Project Overview

The Notes Management App is a simple React application that allows users to create, view, and delete notes.
The goal of this project is to demonstrate React fundamentals, including component-based architecture, state management using hooks, and proper handling of UI states such as loading, empty data, and validation errors.

This project was built as part of a technical assessment focusing on clean code, clarity, and correct React practices, rather than advanced UI or external libraries.

⚙️ Features

Add a note with a required title and optional description

View all added notes in a list

Delete individual notes

Loading state simulation on app start

Empty state message when no notes are present

Inline validation for required fields

🚀 How to Run the Project Locally

Clone the repository:

1. git clone https://github.com/ssv23-5085/notes-management-app.git


2. Navigate to the project directory:

3. cd notes-management-app


4. Install dependencies:

npm install


5. Start the development server:

npm run dev


Open the browser and visit:

http://localhost:5173

🧩 Component Breakdown

App.jsx

Root component

Manages global state (notes, isLoading)

Handles add and delete logic

Controls conditional rendering (loading, empty state, list)

NoteForm.jsx

Collects user input

Performs title validation

Sends note data to parent component

NoteList.jsx

Renders list of notes

Passes delete handler to each note

NoteItem.jsx

Displays individual note details

Handles delete action for a single note

Loader.jsx

Displays loading message during initial render

EmptyState.jsx

Displays message when no notes are available

🔄 State Management Explanation

React’s useState hook is used to manage notes and loading state.

All application state is maintained in the App.jsx component.

Child components communicate with the parent using props and callback functions.

This approach ensures a single source of truth and predictable data flow.

🎯 Design Decisions

No external UI or state management libraries were used to keep the project simple and focused.

Inline and basic CSS was applied for clarity and readability.

Fake loading is implemented using useEffect and setTimeout to simulate real-world data fetching.

⚠️ Assumptions & Limitations

Notes are stored in memory and are lost on page refresh.

No backend or database integration is included.

Styling is intentionally minimal as UI polish was not the primary focus of the assessment.

📽️ Demo Video

A short demo video showcasing the application functionality and code explanation is provided separately as part of the submission.

✅ Conclusion

This project demonstrates a clear understanding of React basics, component structure, state management, and UI state handling.
The focus has been on writing clean, readable, and maintainable code, aligned with real-world frontend development practices.

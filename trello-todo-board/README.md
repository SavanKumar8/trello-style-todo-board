📝 Trello-style Todo Board
A clean, responsive, and interactive Trello-style Todo Board built with React, Redux-toolkit, and DummyJSON API.

🔗 Live Demo: https://sensational-druid-94eca0.netlify.app/
🌐 Hosted using: Netlify (Free tier)

Setup Instructions
git clone https://github.com/SavanKumar8/trello-style-todo-board.git
cd trello-todo-board
npm install
npm start

🚀 Features
Fetch and display todos from DummyJSON API
Create a new todo
Edit an existing todo
Delete a todo
Drag and drop between "Pending", "In Progress", and "Completed" status

📂 Folder Structure
src/
├── components/
│ ├── common/ # Reusable UI components (button, loader)
│ ├── to-do/ # A common modal component for creating/editing/deleting todos
│ ├── lane/ # Lane column per status
│ └── to-do-board/ # Main board layout
├── constant/ # Status and API state and some UI constants
├── features/ # Redux slice created using redux toolkit
├── utils/ # Utility functions with JS logic
├── App.jsx
└── index.html

Design Decisions
Redux Toolkit for clean state management
Drag-and-drop via native HTML5 API for simplicity, no npm package used
Modular & Reusable components (e.g., shared Todomodal)
Kept code clean, commented, and easy to scale

Responsiveness
Desktop: 3 columns layout
Tablet: columns wrap neatly
Mobile: stacked vertical lanes
Implemented with flex-wrap and media queries

Improvements (if npm package can be used and givem more time)
Add persistent backend API with auth
Use react-beautiful-dnd or dnd-kit for smoother drag & drop UX
Filter/search todos

Known Limitations
Todos are stored in-memory or state; not persisted on refresh
Touch-drag is basic; more polish possible with libraries

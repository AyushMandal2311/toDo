# Project Overview
This is a modern, responsive To-Do application built with React, TypeScript, and Vanilla CSS. It emphasizes clean separation of concerns and persistent state.

# Project Type
**Code Project (React/TypeScript)**

# Building and Running
- **Install Dependencies:** `npm install`
- **Run Development Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Run Tests:** `npm run test` or `npx vitest`

# Development Conventions
- **State Management:** Use the `useTodos` hook in `src/hooks/` for all todo-related logic.
- **Styling:** Use CSS Modules (`*.module.css`) for component-specific styles and `src/styles/global.css` for theme variables and resets.
- **Testing:** All business logic in hooks should have corresponding unit tests in `*.test.ts` files.
- **Types:** Define all shared interfaces in `src/types/`.

# Key Files
- `src/hooks/useTodos.ts`: The core engine of the application.
- `src/App.tsx`: Main entry point and layout.
- `src/styles/global.css`: Contains the CSS variables (theme).

# TODO
- [ ] Implement drag-and-drop reordering for tasks.
- [ ] Add categories or tags to tasks.
- [ ] Implement dark mode toggle.

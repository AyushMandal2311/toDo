# To-Do App Development Prompts

These prompts are designed to guide an AI agent through the full lifecycle of building a simple, modern To-Do application.

## Phase 1: Project Setup
**Prompt 1:** Initialize a new React project with TypeScript and Vanilla CSS. Set up the basic folder structure (`src/components`, `src/hooks`, `src/types`, `src/styles`). Create a basic `App.tsx` that renders a "To-Do List" heading.

## Phase 2: Data Modeling & State Management
**Prompt 2:** Define a `Todo` type in `src/types/todo.ts` with fields: `id` (string), `text` (string), `completed` (boolean), and `createdAt` (Date). Create a custom hook `useTodos` in `src/hooks/useTodos.ts` to manage the list of todos using `localStorage` for persistence. It should export functions for `addTodo`, `toggleTodo`, `deleteTodo`, and `clearCompleted`.

## Phase 3: Core Components
**Prompt 3:** Create a `TodoInput` component that allows users to type a task and add it by pressing Enter or clicking an "Add" button. Style it with Vanilla CSS to look modern and responsive.
**Prompt 4:** Create a `TodoItem` component to display an individual task with a checkbox for completion and a delete button. Ensure the text is struck through when completed.
**Prompt 5:** Create a `TodoList` component that renders a list of `TodoItem` components. Add empty state handling (show a message when the list is empty).

## Phase 4: Refinement & UI/UX
**Prompt 6:** Add filtering capabilities (All, Active, Completed). Update the `useTodos` hook and UI to handle these filters.
**Prompt 7:** Apply a polished global theme using Vanilla CSS variables. Focus on typography, spacing, and subtle transitions for a high-quality feel.

## Phase 5: Testing & Validation
**Prompt 8:** Write unit tests for the `useTodos` hook using Vitest or Jest. Ensure adding, toggling, and deleting works as expected.
**Prompt 9:** Add a basic end-to-end test flow (e.g., using Playwright or a simple script) to verify that a user can add and complete a task.

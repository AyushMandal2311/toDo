# To-Do App

A simple, modern, and persistent To-Do application built with React, TypeScript, and Vanilla CSS.

## Project Overview
This project demonstrates a clean React architecture using custom hooks for state management and CSS Modules for scoped styling. It features task persistence via `localStorage`.

## Technologies
- **React 18**
- **TypeScript**
- **Vite** (Build Tool)
- **Vitest** (Testing)
- **Vanilla CSS Modules**

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Testing
```bash
npm run test
```

## Project Structure
- `src/components/`: UI components (TodoInput, TodoItem, TodoList, FilterBar)
- `src/hooks/`: Business logic and state management (`useTodos.ts`)
- `src/types/`: TypeScript definitions
- `src/styles/`: Global styles and CSS modules
- `src/test/`: Test setup and configuration

## Features
- [x] Add new tasks
- [x] Mark tasks as completed
- [x] Delete tasks
- [x] Filter tasks (All, Active, Completed)
- [x] Persist tasks in browser storage
- [x] Responsive and modern UI

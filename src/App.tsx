import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';
import type { FilterType } from './components/FilterBar';
import './styles/global.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <main>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>To-Do List</h1>
      
      <TodoInput onAdd={addTodo} />
      
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      {todos.length > 0 && (
        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          activeCount={activeCount}
          hasCompleted={hasCompleted}
        />
      )}
    </main>
  );
}

export default App;

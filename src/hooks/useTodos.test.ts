/**
 * @vitest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTodos } from './useTodos';

describe('useTodos hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should start with an empty list', () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
  });

  it('should add a new todo', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Test Task');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Test Task');
    expect(result.current.todos[0].completed).toBe(false);
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Test Task');
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    expect(result.current.todos[0].completed).toBe(true);

    act(() => {
      result.current.toggleTodo(id);
    });

    expect(result.current.todos[0].completed).toBe(false);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Test Task');
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(id);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Task 1');
      result.current.addTodo('Task 2');
    });

    const id1 = result.current.todos[1].id; // Task 1 (added first, now at index 1)

    act(() => {
      result.current.toggleTodo(id1);
      result.current.clearCompleted();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Task 2');
  });

  it('should persist todos to localStorage', () => {
    const { result, unmount } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Persistent Task');
    });

    unmount();

    const { result: newResult } = renderHook(() => useTodos());
    expect(newResult.current.todos).toHaveLength(1);
    expect(newResult.current.todos[0].text).toBe('Persistent Task');
  });
});

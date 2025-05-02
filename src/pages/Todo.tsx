import { useState, useEffect } from "react";
import { TodoItem } from "@/components/todo/TodoItem";
import { TodoForm } from "@/components/todo/TodoForm";
import { Todo } from "@/types/todo";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        // Parse the JSON and convert string dates back to Date objects
        return JSON.parse(savedTodos, (key, value) =>
          key === "createdAt" ? new Date(value) : value,
        );
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    // Convert Date objects to strings for storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Sort todos by creation date (newest first) and completion status
  const sortedTodos = [...todos].sort((a, b) => {
    // First by completion status
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // Then by creation date (newest first)
    return b.createdAt.getTime() - a.createdAt.getTime();
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const hasCompletedTodos = completedCount > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Todo App</h1>
          {hasCompletedTodos && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearCompleted}
              className="text-xs"
            >
              <Trash className="mr-2 h-3 w-3" />
              Clear completed
            </Button>
          )}
        </div>

        <TodoForm onAddTodo={addTodo} />

        <div className="space-y-2">
          {sortedTodos.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No todos yet. Add one above!
            </p>
          ) : (
            <>
              {sortedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
              <div className="text-sm text-muted-foreground text-right pt-2">
                {completedCount} of {todos.length} completed
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

import { useState, useEffect } from "react";
import { TodoItem } from "@/components/todo/TodoItem";
import { TodoForm } from "@/components/todo/TodoForm";
import { Todo } from "@/types/todo";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Trash, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const TodoApp = () => {
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
  const [error, setError] = useState<string | null>(null);
  const [pendingOperation, setPendingOperation] = useState<{
    type: "add" | "toggle" | "delete" | "clear";
    data: any;
  } | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    // Convert Date objects to strings for storage
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
      // Clear error if storage was successful
      if (error) setError(null);
    } catch (err) {
      console.error("Failed to save todos to localStorage:", err);
      setError("Failed to save your changes. Please try again.");
    }
  }, [todos, error]);

  const addTodo = (text: string) => {
    try {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
      toast({
        title: "Task added",
        description: "Your new task has been added successfully.",
      });
    } catch (err) {
      console.error("Failed to add todo:", err);
      setError("Failed to add task. Please try again.");
      setPendingOperation({ type: "add", data: text });
    }
  };

  const toggleTodo = (id: string) => {
    try {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    } catch (err) {
      console.error("Failed to toggle todo:", err);
      setError("Failed to update task status. Please try again.");
      setPendingOperation({ type: "toggle", data: id });
    }
  };

  const deleteTodo = (id: string) => {
    try {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast({
        title: "Task deleted",
        description: "The task has been removed.",
        variant: "destructive",
      });
    } catch (err) {
      console.error("Failed to delete todo:", err);
      setError("Failed to delete task. Please try again.");
      setPendingOperation({ type: "delete", data: id });
    }
  };

  const clearCompleted = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    if (completedCount === 0) {
      toast({
        title: "No completed tasks",
        description: "There are no completed tasks to clear.",
      });
      return;
    }

    try {
      setTodos(todos.filter((todo) => !todo.completed));
      toast({
        title: "Completed tasks cleared",
        description: `${completedCount} completed ${completedCount === 1 ? "task has" : "tasks have"} been removed.`,
      });
    } catch (err) {
      console.error("Failed to clear completed todos:", err);
      setError("Failed to clear completed tasks. Please try again.");
      setPendingOperation({ type: "clear", data: null });
    }
  };

  const retryOperation = () => {
    if (!pendingOperation) return;

    setError(null);

    switch (pendingOperation.type) {
      case "add":
        addTodo(pendingOperation.data);
        break;
      case "toggle":
        toggleTodo(pendingOperation.data);
        break;
      case "delete":
        deleteTodo(pendingOperation.data);
        break;
      case "clear":
        clearCompleted();
        break;
    }

    setPendingOperation(null);
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
  const totalCount = todos.length;
  const hasCompletedTodos = completedCount > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4">
      <div className="container mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
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

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-center justify-between">
              <p className="text-red-600 text-sm">{error}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={retryOperation}
                className="text-xs bg-white"
              >
                <RefreshCw className="mr-2 h-3 w-3" />
                Retry
              </Button>
            </div>
          )}

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
                  {completedCount} of {totalCount} completed
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

"use client";
import { useState } from "react";
import { ButtonComponent } from "../button/Button";
import { TodoItem } from "../todoItem/TodoItem";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";

type Difficulty = "easy" | "medium" | "hard";
interface TodoProps {
  text: string;
  difficulty: Difficulty;
  completed: boolean;
  tag: string;
}

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo === "") return;
    setTodos([
      ...todos,
      {
        text: newTodo,
        difficulty: "easy",
        tag: "",
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  const changeDifficulty = (index: number, newDifficulty: Difficulty) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, difficulty: newDifficulty } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleCompleted = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const changeTag = (index: number, newTag: string) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, tag: newTag } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const difficultyOptions: { value: Difficulty; label: string }[] = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  return (
    <section>
      <h2 className={styles.title}>Todos Tasks</h2>
      <div className={styles.todo__box}>
        <Box
          className={styles.form}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={addTodo}
        >
          <TextField
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            id="outlined-basic"
            label="add todo"
            variant="outlined"
          />
          <ButtonComponent type="submit">add</ButtonComponent>
        </Box>
        <ul role="list" className={styles.list}>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              difficulty={todo.difficulty}
              completed={todo.completed}
              tag={todo.tag}
              onChangeDifficulty={(newDifficulty) =>
                changeDifficulty(index, newDifficulty)
              }
              onToggleCompleted={() => toggleCompleted(index)}
              onChangeTag={(newTag) => changeTag(index, newTag)}
              onDelete={() => deleteTodo(index)}
              difficultyOptions={difficultyOptions}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Todo };

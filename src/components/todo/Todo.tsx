"use client";
import { useState } from "react";
import { ButtonComponent } from "../button/Button";
import { TodoItem } from "../todoItem/TodoItem";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";
import { useRecoilState } from "recoil";
import {
  addTask,
  changeTaskProperty,
  todoListState,
  toggleCompletedTask,
} from "@/store/store";

type Difficulty = "easy" | "medium" | "hard";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useRecoilState(todoListState);

  const handelAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos(addTask(todos, { text: newTodo, difficulty: "easy", tag: "" }));
    setNewTodo("");
  };

  const handelChangeDifficulty = (index: number, newDifficulty: Difficulty) => {
    setTodos(changeTaskProperty(todos, index, "difficulty", newDifficulty));
  };

  const handelToggleCompleted = (index: number) => {
    setTodos(toggleCompletedTask(todos, index));
  };

  const handelchangeTag = (index: number, newTag: string) => {
    setTodos(changeTaskProperty(todos, index, "tag", newTag));
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
          onSubmit={handelAddTodo}
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
          {todos.map((todo, index: number) => (
            <TodoItem
              key={index}
              text={todo.text}
              difficulty={todo.difficulty}
              tag={todo.tag}
              onChangeDifficulty={(newDifficulty) =>
                handelChangeDifficulty(index, newDifficulty)
              }
              completed={todo.completed}
              onToggleCompleted={() => handelToggleCompleted(index)}
              onChangeTag={(newTag) => handelchangeTag(index, newTag)}
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

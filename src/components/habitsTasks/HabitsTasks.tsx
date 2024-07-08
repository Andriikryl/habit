"use client";
import { useState } from "react";
import { ButtonComponent } from "../button/Button";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";
import { HabitsTaskItem } from "../habitsTaskItem/HabitsTaskItem";

type Difficulty = "easy" | "medium" | "hard";
interface HabitProps {
  text: string;
  level: number;
  difficulty: Difficulty;
  tag: string;
}

const HabitsTasks = () => {
  const [newHabit, setNewHabit] = useState("");
  const [habits, setTodos] = useState<HabitProps[]>([]);

  const addHabit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newHabit === "") return;
    setTodos([
      ...habits,
      {
        text: newHabit,
        level: 0,
        difficulty: "easy",
        tag: "",
      },
    ]);
    setNewHabit("");
  };

  const incrementLevel = (index: number) => {
    const updatedTodos = habits.map((todo, i) =>
      i === index ? { ...todo, level: todo.level + 1 } : todo
    );
    setTodos(updatedTodos);
  };

  const changeDifficulty = (index: number, newDifficulty: Difficulty) => {
    const updatedTodos = habits.map((todo, i) =>
      i === index ? { ...todo, difficulty: newDifficulty } : todo
    );
    setTodos(updatedTodos);
  };

  const changeTag = (index: number, newTag: string) => {
    const updatedTodos = habits.map((todo, i) =>
      i === index ? { ...todo, tag: newTag } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = habits.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const difficultyOptions: { value: Difficulty; label: string }[] = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  return (
    <section>
      <h2 className={styles.title}>Habits Tasks</h2>
      <div className={styles.todo__box}>
        <Box
          className={styles.form}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={addHabit}
        >
          <TextField
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            id="outlined-basic"
            label="add habit"
            variant="outlined"
          />
          <ButtonComponent type="submit">add</ButtonComponent>
        </Box>
        <ul role="list" className={styles.list}>
          {habits.map((todo, index) => (
            <HabitsTaskItem
              key={index}
              text={todo.text}
              level={todo.level}
              difficulty={todo.difficulty}
              tag={todo.tag}
              onIncrement={() => incrementLevel(index)}
              onChangeDifficulty={(newDifficulty) =>
                changeDifficulty(index, newDifficulty)
              }
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

export { HabitsTasks };

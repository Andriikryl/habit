"use client";
import { useState } from "react";
import { ButtonComponent } from "../button/Button";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";
import { HabitsTaskItem } from "../habitsTaskItem/HabitsTaskItem";
import { useRecoilState } from "recoil";
import {
  addHabit,
  changeDifficulty,
  changeTag,
  deleteTodo,
  habitListState,
  incrementLevel,
} from "@/store/store";

type Difficulty = "easy" | "medium" | "hard";
interface HabitProps {
  text: string;
  level: number;
  difficulty: Difficulty;
  tag: string;
}

const HabitsTasks = () => {
  const [newHabit, setNewHabit] = useState("");
  const [habits, setTodos] = useRecoilState<HabitProps[]>(habitListState);

  const handelAddHabit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedHabits = addHabit(habits, newHabit);
    setTodos(updatedHabits);
    setNewHabit("");
  };
  const hndelIncrementLevel = (index: number) => {
    setTodos(incrementLevel(habits, index));
  };

  const handelChangeDifficulty = (index: number, newDifficulty: Difficulty) => {
    setTodos(changeDifficulty(habits, index, newDifficulty));
  };

  const handelChangeTag = (index: number, newTag: string) => {
    setTodos(changeTag(habits, index, newTag));
  };

  const handelDeleteTodo = (index: number) => {
    setTodos(deleteTodo(habits, index));
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
          onSubmit={handelAddHabit}
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
              onIncrement={() => hndelIncrementLevel(index)}
              onChangeDifficulty={(newDifficulty) =>
                handelChangeDifficulty(index, newDifficulty)
              }
              onChangeTag={(newTag) => handelChangeTag(index, newTag)}
              onDelete={() => handelDeleteTodo(index)}
              difficultyOptions={difficultyOptions}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export { HabitsTasks };

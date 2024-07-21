"use client";
import { useState } from "react";
import { ButtonComponent } from "../button/Button";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";
import { HabitsTaskItem } from "../habitsTaskItem/HabitsTaskItem";
import { useRecoilState } from "recoil";
import {
  addTask,
  changeTaskProperty,
  deleteTask,
  habitListState,
  incrementTaskLevel,
} from "@/store/store";

type Difficulty = "easy" | "medium" | "hard";

const HabitsTasks = () => {
  const [newHabit, setNewHabit] = useState("");
  const [habits, setHabits] = useRecoilState(habitListState);

  const handleAddHabit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHabits(
      addTask(habits, { text: newHabit, level: 0, difficulty: "easy", tag: "" })
    );
    setNewHabit("");
  };

  const hndelIncrementLevel = (index: number) => {
    setHabits(incrementTaskLevel(habits, index));
  };

  const handelChangeDifficulty = (index: number, newDifficulty: Difficulty) => {
    setHabits(changeTaskProperty(habits, index, "difficulty", newDifficulty));
  };

  const handelChangeTag = (index: number, newTag: string) => {
    setHabits(changeTaskProperty(habits, index, "tag", newTag));
  };

  const handelDeleteTodo = (index: number) => {
    setHabits(deleteTask(habits, index));
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
          onSubmit={handleAddHabit}
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

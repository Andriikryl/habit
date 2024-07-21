"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ButtonComponent } from "../button/Button";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";
import { DailiesItem } from "../dailiesItem/DailiesItem";
import {
  dailiesListState,
  addDailies,
  deleteDaily,
  toggleCompleted,
} from "../../store/store";

interface DailiesProps {
  text: string;
  completed: boolean;
}

const Dailies = () => {
  const [newDaily, setNewDaily] = useState("");
  const [dailies, setDailies] =
    useRecoilState<DailiesProps[]>(dailiesListState);

  const handleAddDailies = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDailies(addDailies(dailies, newDaily));
    setNewDaily("");
  };

  const handleDeleteDaily = (index: number) => {
    setDailies(deleteDaily(dailies, index));
  };

  const handleToggleCompleted = (index: number) => {
    setDailies(toggleCompleted(dailies, index));
  };

  return (
    <section>
      <h2 className={styles.title}>Dailies</h2>
      <div className={styles.todo__box}>
        <Box
          className={styles.form}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleAddDailies}
        >
          <TextField
            value={newDaily}
            onChange={(e) => setNewDaily(e.target.value)}
            id="outlined-basic"
            label="add habit"
            variant="outlined"
          />
          <ButtonComponent type="submit">add</ButtonComponent>
        </Box>
        <ul role="list" className={styles.list}>
          {dailies.map((todo, index) => (
            <DailiesItem
              key={index}
              text={todo.text}
              onDelete={() => handleDeleteDaily(index)}
              completed={todo.completed}
              onToggleCompleted={() => handleToggleCompleted(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Dailies };

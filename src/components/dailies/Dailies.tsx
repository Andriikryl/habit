"use client";
import { useState } from "react";
import { stagger, useAnimate } from "framer-motion";
import { useRecoilState } from "recoil";
import { ButtonComponent } from "../button/Button";
import { Box, TextField } from "@mui/material";
import styles from "./style.module.css";
import { DailiesItem } from "../dailiesItem/DailiesItem";
import {
  addTask,
  dailiesListState,
  deleteTask,
  toggleCompletedTask,
} from "../../store/store";
import { SpotlightWrapper } from "../spotlightWrapper/SpotlightWrapper";

const Dailies = () => {
  const [newDaily, setNewDaily] = useState("");
  const [dailies, setDailies] = useRecoilState(dailiesListState);

  const handleAddDailies = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDailies(addTask(dailies, { text: newDaily, completed: false }));
    setNewDaily("");
  };

  const handleDeleteDaily = (index: number) => {
    setDailies(deleteTask(dailies, index));
  };

  const handleToggleCompleted = (index: number) => {
    setDailies(toggleCompletedTask(dailies, index));
  };

  return (
    <section>
      <h2 className={styles.title}>Dailies</h2>
      <SpotlightWrapper>
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
      </SpotlightWrapper>
    </section>
  );
};

export { Dailies };

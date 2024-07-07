import React from "react";
import { ButtonComponent } from "../button/Button";
import { SelectComponent } from "../selectComponent/SelectComponent";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Fab, FormControlLabel } from "@mui/material";
import styles from "./style.module.css";
import clsx from "clsx";

type Difficulty = "easy" | "medium" | "hard";
interface TodoItemProps {
  text: string;
  level: number;
  difficulty: Difficulty;
  completed: boolean;
  tag: string;
  onIncrement: () => void;
  onChangeDifficulty: (newDifficulty: Difficulty) => void;
  onToggleCompleted: () => void;
  onChangeTag: (newTag: string) => void;
  onDelete: () => void;
  difficultyOptions: { value: Difficulty; label: string }[];
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  level,
  difficulty,
  completed,
  tag,
  onIncrement,
  onChangeDifficulty,
  onToggleCompleted,
  onChangeTag,
  onDelete,
  difficultyOptions,
}) => {
  return (
    <li
      className={clsx(styles.item)}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      <div className={styles.flow}>
        <h3 className={styles.item__title}>{text}</h3>
        <div className={styles.level__group}>
          <span className={styles.level}>{level}</span>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={onIncrement}
          >
            +
          </Fab>
        </div>
      </div>
      <SelectComponent
        label="Difficulty"
        value={difficulty}
        options={difficultyOptions}
        onChange={(e) => onChangeDifficulty(e.target.value as Difficulty)}
      />
      <FormControlLabel
        control={<Checkbox checked={completed} onChange={onToggleCompleted} />}
        label="Completed"
      />
      <TextField
        id={`tag-input`}
        label="Tag"
        variant="outlined"
        value={tag}
        onChange={(e) => onChangeTag(e.target.value)}
      />
      <ButtonComponent onClick={onDelete}>delete</ButtonComponent>
    </li>
  );
};

export { TodoItem };

import React from "react";
import { ButtonComponent } from "../button/Button";
import { SelectComponent } from "../selectComponent/SelectComponent";
import TextField from "@mui/material/TextField";
import styles from "./style.module.css";
import clsx from "clsx";

type Difficulty = "easy" | "medium" | "hard";
interface HebitItemProps {
  text: string;
  level: number;
  difficulty: Difficulty;
  tag: string;
  onIncrement: () => void;
  onChangeDifficulty: (newDifficulty: Difficulty) => void;
  onChangeTag: (newTag: string) => void;
  onDelete: () => void;
  difficultyOptions: { value: Difficulty; label: string }[];
}

const HabitsTaskItem: React.FC<HebitItemProps> = ({
  text,
  level,
  difficulty,
  tag,
  onIncrement,
  onChangeDifficulty,
  onChangeTag,
  onDelete,
  difficultyOptions,
}) => {
  return (
    <li className={clsx(styles.item)}>
      <ButtonComponent onClick={onIncrement}>+</ButtonComponent>
      <div className={styles.flow}>
        <h3 className={styles.item__title}>{text}</h3>
        <SelectComponent
          label="Difficulty"
          value={difficulty}
          options={difficultyOptions}
          onChange={(e) => onChangeDifficulty(e.target.value as Difficulty)}
        />
        <TextField
          id={`tag-input`}
          label="Tag"
          variant="outlined"
          value={tag}
          onChange={(e) => onChangeTag(e.target.value)}
        />
        <ButtonComponent onClick={onDelete}>delete</ButtonComponent>
      </div>
      <div className={styles.level__box}>
        <span className={styles.level__description}>Lvl</span>
        <span className={styles.level}>{level}</span>
      </div>
    </li>
  );
};

export { HabitsTaskItem };

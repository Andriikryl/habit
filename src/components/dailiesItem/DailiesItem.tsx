import React from "react";
import { ButtonComponent } from "../button/Button";
import styles from "./style.module.css";
import clsx from "clsx";
import { pink } from "@mui/material/colors";
import { SadIcon } from "@/icons/SadIcon";
import { Happy } from "@/icons/Happy";
import { Checkbox } from "@mui/material";

type Difficulty = "easy" | "medium" | "hard";
interface HebitItemProps {
  text: string;
  onDelete: () => void;
  completed: boolean;
  onToggleCompleted: () => void;
}

const DailiesItem: React.FC<HebitItemProps> = ({
  text,
  onDelete,
  completed,
  onToggleCompleted,
}) => {
  return (
    <li
      className={clsx(styles.item, {
        [styles.item__completed]: completed,
      })}
    >
      <Checkbox
        sx={{
          color: pink[800],
          completed: {
            color: "success",
          },
        }}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <div className={styles.flow}>
        <h3 className={styles.item__title}>{text}</h3>
        <ButtonComponent onClick={onDelete}>delete</ButtonComponent>
      </div>
      <div className={styles.status}>
        {completed ? (
          <Happy className={styles.sad__icon} size={50} />
        ) : (
          <SadIcon className={styles.sad__icon} size={50} />
        )}
      </div>
    </li>
  );
};

export { DailiesItem };

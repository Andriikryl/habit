import { ReactNode } from "react";
import styles from "./style.module.css"

interface TasksWrapperProps {
  children: ReactNode;
}

const TasksWrapper: React.FC<TasksWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export { TasksWrapper };

import Image from "next/image";
import styles from "./page.module.css";
import { Todo } from "@/components/todo/Todo";
import { HabitsTasks } from "@/components/habitsTasks/HabitsTasks";
import { TasksWrapper } from "@/components/tsaksWrapper/TasksWrapper";

export default function Home() {
  return (
    <>
      <TasksWrapper>
        <HabitsTasks />
        <Todo />
      </TasksWrapper>
    </>
  );
}

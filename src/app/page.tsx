import Image from "next/image";
import styles from "./page.module.css";
import { Todo } from "@/components/todo/Todo";
import { HabitsTasks } from "@/components/habitsTasks/HabitsTasks";
import { TasksWrapper } from "@/components/tsaksWrapper/TasksWrapper";
import { Dailies } from "@/components/dailies/Dailies";

export default function Home() {
  return (
    <>
      <TasksWrapper>
        <HabitsTasks />
        <Dailies />
        <Todo />
      </TasksWrapper>
    </>
  );
}

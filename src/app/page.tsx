import Image from "next/image";
import styles from "./page.module.css";
import { Todo } from "@/components/todo/Todo";
import { HabitsTasks } from "@/components/habitsTasks/HabitsTasks";
import { TasksWrapper } from "@/components/tsaksWrapper/TasksWrapper";
import { Dailies } from "@/components/dailies/Dailies";
import { Statistics } from "@/components/statistics/Statistics";

export default function Home() {
  return (
    <div className="home__flow">
      <Statistics />
      <TasksWrapper>
        <HabitsTasks />
        <Dailies />
        <Todo />
      </TasksWrapper>
    </div>
  );
}

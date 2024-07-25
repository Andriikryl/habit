"use client";
import { useRecoilValue } from "recoil";
import styles from "./style.module.css";
import { TodoStatsState, DailiesStatsState } from "@/store/store";
import ListStatistics from "../listStatistics/ListStatistics";

const Statistics = () => {
  const todoStats = useRecoilValue(TodoStatsState);
  const dailiesStats = useRecoilValue(DailiesStatsState);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Statistics</h3>
      <div className={styles.flow}>
      <ListStatistics
        title="Todo Tasks"
        totalNum={todoStats.totalNum}
        totalCompletedNum={todoStats.totalCompletedNum}
        totalUncompletedNum={todoStats.totalUncompletedNum}
        percentCompleted={todoStats.percentCompleted}
      />
      <ListStatistics
        title="Dailies Tasks"
        totalNum={dailiesStats.totalNum}
        totalCompletedNum={dailiesStats.totalCompletedNum}
        totalUncompletedNum={dailiesStats.totalUncompletedNum}
        percentCompleted={dailiesStats.percentCompleted}
      />
      </div>
    </div>
  );
};

export { Statistics };

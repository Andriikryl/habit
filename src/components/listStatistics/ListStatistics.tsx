import React from "react";
import styles from "./style.module.css";

interface ListStatisticsProps {
  title: string;
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}

const ListStatistics: React.FC<ListStatisticsProps> = ({
  title,
  totalNum,
  totalCompletedNum,
  totalUncompletedNum,
  percentCompleted,
}) => {
  const formatPercent = (percent: number) => percent.toFixed(2);

  return (
    <div className={styles.section}>
      <div className={styles.box}></div>
      <h4 className={styles.subtitle}>{title}</h4>
      <ul role="list" className={styles.list}>
        <li className={styles.list__item}>Total items: {totalNum}</li>
        <li className={styles.list__item}>
          Items completed: {totalCompletedNum}
        </li>
        <li className={styles.list__item}>
          Items not completed: {totalUncompletedNum}
        </li>
        <li className={styles.list__item}>
          Percent completed: {formatPercent(percentCompleted)}%
        </li>
      </ul>
    </div>
  );
};

export default ListStatistics;

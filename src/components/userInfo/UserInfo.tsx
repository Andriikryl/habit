"use client";
import Avatar from "@mui/material/Avatar";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./style.module.css";
import { useRecoilState } from "recoil";
import { userInfo } from "@/store/store";
const UserInfo = () => {
  const [info, setInfo] = useRecoilState(userInfo);
  return (
    <section className={styles.info}>
      <div className={styles.flow}>
        <div>
          <Avatar
            alt="John Doe"
            src="/avatar.png"
            sx={{ width: 70, height: 70 }}
          />
        </div>
        <div className={styles.info__box}>
          <h3 className={styles.info__text}>{info.name}</h3>
          <p className={styles.info__text}>Level: {info.level}</p>
          <div className={styles.group}>
            <p className={styles.info__text}>Health: {info.health} / 100</p>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={info.health}
            />
          </div>
          <div className={styles.group}>
            <p className={styles.info__text}>
              Experience: {info.experience} / 250
            </p>
            <LinearProgress
              color="success"
              variant="determinate"
              value={info.experience}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { UserInfo };

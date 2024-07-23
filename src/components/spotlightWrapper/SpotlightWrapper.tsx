import { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import styles from "./style.module.css";

interface TasksWrapperProps {
  children: ReactNode;
}

const SpotlightWrapper: React.FC<TasksWrapperProps> = ({ children }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={styles.wrapper} onMouseMove={handleMouseMove}>
      <motion.div
        className={styles.motion__box}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              550px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 10%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

export { SpotlightWrapper };

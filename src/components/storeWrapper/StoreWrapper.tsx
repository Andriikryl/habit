"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface TasksWrapperProps {
  children: ReactNode;
}

const StoreWrapper: React.FC<TasksWrapperProps> = ({ children }) => {
  return (
    <div>
      <RecoilRoot>{children}</RecoilRoot>
    </div>
  );
};

export { StoreWrapper };

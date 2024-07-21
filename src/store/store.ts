import { atom, selector } from "recoil";

interface DailiesProps {
  text: string;
  completed: boolean;
}

const dailiesListState = atom<DailiesProps[]>({
  key: "dailiesListState",
  default: [],
});

// Function to add a daily
const addDailies = (dailies: DailiesProps[], newDaily: string) => {
  if (newDaily === "") return dailies;
  return [
    ...dailies,
    {
      text: newDaily,
      completed: false,
    },
  ];
};

// Function to delete a daily
const deleteDaily = (dailies: DailiesProps[], index: number) => {
  return dailies.filter((_, i) => i !== index);
};

// Function to toggle the completion state of a daily
const toggleCompleted = (dailies: DailiesProps[], index: number) => {
  return dailies.map((daily, i) =>
    i === index ? { ...daily, completed: !daily.completed } : daily
  );
};

export { dailiesListState, addDailies, deleteDaily, toggleCompleted };

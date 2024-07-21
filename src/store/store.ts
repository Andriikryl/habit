import { atom, selector } from "recoil";

type Difficulty = "easy" | "medium" | "hard";

interface DailiesProps {
  text: string;
  completed: boolean;
}
interface HabitListProps {
  text: string;
  level: number;
  difficulty: Difficulty;
  tag: string;
}

const dailiesListState = atom<DailiesProps[]>({
  key: "dailiesListState",
  default: [],
});

const habitListState = atom<HabitListProps[]>({
  key: "habitListState",
  default: [],
})

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

const addHabit = (habits: HabitListProps[], newHabit: string): HabitListProps[] => {
  if (newHabit === "") return habits;  // Return the existing array if newHabit is empty
  return [
    ...habits,
    {
      text: newHabit,
      level: 0,
      difficulty: "easy",
      tag: "",
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

const incrementLevel = (habits: HabitListProps[], index: number): HabitListProps[] => {
  return   habits.map((todo, i) =>
    i === index ? { ...todo, level: todo.level + 1 } : todo
  );
};

const changeDifficulty = (habits: HabitListProps[], index: number, newDifficulty: Difficulty): HabitListProps[] => {
  return  habits.map((todo, i) =>
    i === index ? { ...todo, difficulty: newDifficulty } : todo
  );
};

const changeTag = (habits: HabitListProps[], index: number, newTag: string): HabitListProps[] => {
  return habits.map((todo, i) =>
    i === index ? { ...todo, tag: newTag } : todo
  );
};

const deleteTodo = (habits: HabitListProps[], index: number,): HabitListProps[] => {
  return habits.filter((_, i) => i !== index);
};


export { dailiesListState,habitListState,  addDailies, deleteDaily, toggleCompleted, addHabit, incrementLevel, changeDifficulty, changeTag, deleteTodo };

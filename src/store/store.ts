import { atom, selector } from "recoil";

type Difficulty = "easy" | "medium" | "hard";

interface TaskProps {
  text: string;
  difficulty: Difficulty;
  tag: string;
}

interface DailiesProps extends TaskProps {
  completed: boolean;
}

interface HabitListProps extends TaskProps {
  level: number;
}

interface TodoProps extends TaskProps {
  completed: boolean;
}

const dailiesListState = atom<DailiesProps[]>({
  key: "dailiesListState",
  default: [],
});

const habitListState = atom<HabitListProps[]>({
  key: "habitListState",
  default: [],
});

const todoListState = atom<TodoProps[]>({
  key: "todoListState",
  default: [],
});

const userInfo = atom({
  key: "userInfo",
  default: {
    name: "John Doe",
    level: 0,
    health: 60,
    experience: 20,
  },
});

const addTask = <T extends TaskProps>(tasks: T[], newTask: Partial<T> & Pick<T, 'text'>): T[] => {
  if (newTask.text === "") return tasks;
  return [
    ...tasks,
    {
      ...newTask,
    },
  ] as T[];
};

const deleteTask = <T>(tasks: T[], index: number): T[] => {
  return tasks.filter((_, i) => i !== index);
};

const toggleCompletedTask = <T extends { completed: boolean }>(tasks: T[], index: number): T[] => {
  return tasks.map((task, i) =>
    i === index ? { ...task, completed: !task.completed } : task
  );
};

const incrementTaskLevel = (tasks: HabitListProps[], index: number): HabitListProps[] => {
  return tasks.map((task, i) =>
    i === index ? { ...task, level: task.level + 1 } : task
  );
};

const changeTaskProperty = <T, K extends keyof T>(tasks: T[], index: number, key: K, value: T[K]): T[] => {
  return tasks.map((task, i) =>
    i === index ? { ...task, [key]: value } : task
  );
};

// Separate selectors for each list
const TodoStatsState = selector({
  key: 'TodoListStats',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

const DailiesStatsState = selector({
  key: 'DailiesListStats',
  get: ({ get }) => {
    const dailiesList = get(dailiesListState);
    const totalNum = dailiesList.length;
    const totalCompletedNum = dailiesList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

const HabitStatsState = selector({
  key: 'HabitListStats',
  get: ({ get }) => {
    const habitList = get(habitListState);
    const totalNum = habitList.length;
    const totalCompletedNum = habitList.filter((item) => item.level > 0).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export {
  dailiesListState,
  habitListState,
  todoListState,
  addTask,
  deleteTask,
  toggleCompletedTask,
  incrementTaskLevel,
  changeTaskProperty,
  userInfo,
  TodoStatsState,
  DailiesStatsState,
  HabitStatsState,
};

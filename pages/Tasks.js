import { useState } from "react";
import Meta from "../components/meta/Meta";
import Task from "../components/tasks/Task";

import styles from "../styles/pages/Tasks.module.scss";

const Tasks = () => {
  const [completed, setCompleted] = useState(0);

  const words_1 = [
    ["sugar", "cukrus"],
    ["water", "vanduo"],
    ["bread", "duona"],
  ];

  return (
    <div className={styles.tasks}>
      <Meta title="Exercise" />
      <Task words={words_1}></Task>
    </div>
  );
};

export default Tasks;

import { useEffect, useState } from "react";

import SoundImage from "../../components/ui/SoundImage";
import Button from "../../components/navigation/Button";

import styles from "../../styles/components/tasks/Task.module.scss";

const Task = ({ words }) => {
  const [hydrated, setHydrated] = useState(false);
  const [random] = useState(Math.floor(Math.random() * words.length));
  const [answer] = useState(words[random][0]);
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheck = () => {
    if (answer === input) {
      setIsCorrect(true);
      setIsSuccess(true);
      setIsFail(false);
    } else {
      setIsFail(true);
    }
  };

  const handleSoundImage = (input) => {
    setInput(input);
    setIsFail(false);
    setIsCorrect(false);
    setIsSuccess(false);
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <>
      <div className={styles.title}>
        Which one of these is &quot;the {words[random][0]}&quot;?
      </div>
      <div className={styles.images}>
        {words.map((pair) => (
          <SoundImage
            key={pair[0]}
            question={pair[0]}
            answer={pair[1]}
            isSelected={input === pair[0]}
            onClick={() => handleSoundImage(pair[0])}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        {!isCorrect ? (
          <Button text="Check" onClick={() => handleCheck()} />
        ) : (
          <Button text="To be continued ; ))" />
        )}
      </div>
      <div className={styles.message}>
        {isFail ? <div>Nope 😳 Try again 😊</div> : null}
        {isSuccess ? <div>Correct. Nice job! 🤩</div> : null}
      </div>
    </>
  );
};

export default Task;

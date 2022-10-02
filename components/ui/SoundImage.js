import Image from "next/image";
import { useRef } from "react";

import styles from "../../styles/components/UI/SoundImage.module.scss";

const SoundImage = ({ answer, question, onClick, isSelected }) => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.play();
    onClick();
  };

  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      onClick={() => handleClick()}
    >
      <Image
        src={`/images/${question}.svg`}
        alt={`Picture of the ${question}`}
        width={500}
        height={500}
      />
      <div className={styles.text}>{answer}</div>
      <audio
        ref={ref}
        style={{ display: "none" }}
        controls
        src={`/audio/${question}.mp3`}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export default SoundImage;

import styles from "./Output.module.css";
import { IconCopy } from "@tabler/icons";
import { useAppSelector } from "../../features/generator/hooks";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function Output() {
  const { password, score, crack_times } = useAppSelector((state) => state.generator.password);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  }, [password]);

  return (
    <div className={styles.root}>
      <div className={styles.output}>
        <textarea className={styles.password} ref={textAreaRef} value={password} readOnly />
        <button
          className={styles.copy}
          title={"Copy"}
          onClick={() => {
            if (textAreaRef.current) {
              textAreaRef.current.select();
            }
            navigator.clipboard.writeText(password);
          }}
        >
          <IconCopy />
        </button>
      </div>
      <div
        className={clsx(
          styles.strength,
          score === 0 && [styles.veryWeak],
          score === 1 && [styles.weak],
          score === 2 && [styles.medium],
          score === 3 && [styles.strong],
          score === 4 && [styles.veryStrong]
        )}
      />
      <p className={styles.message}>
        <span className={styles.label}>
          {score === 0 && "Very weak"}
          {score === 1 && "Weak"}
          {score === 2 && "Medium"}
          {score === 3 && "Strong"}
          {score === 4 && "Very strong"}
        </span>
        , crack time ~{crack_times}
      </p>
    </div>
  );
}

import styles from "./Slider.module.css";
import { changeLength } from "../../features/generator/slice";
import { useAppDispatch, useAppSelector } from "../../features/generator/hooks";

export default function Slider() {
  const length = useAppSelector((state) => state.generator.length);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <fieldset className={styles.group}>
        <legend className={styles.label}>Length</legend>
        <input
          className={styles.number}
          max={128}
          min={5}
          step={1}
          type="number"
          value={length}
          onChange={(event) => {
            dispatch(changeLength(Number.parseInt(event.target.value, 10)));
          }}
        />
        <input
          className={styles.slider}
          max={128}
          min={5}
          step={1}
          type="range"
          value={length}
          onChange={(event) => {
            dispatch(changeLength(Number.parseInt(event.target.value, 10)));
          }}
        />
      </fieldset>
    </div>
  );
}

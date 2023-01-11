import styles from "./Options.module.css";
import { useAppDispatch, useAppSelector } from "../../features/generator/hooks";
import {
  toggleIncludeLowercase,
  toggleIncludeNumber,
  toggleIncludeSymbols,
  toggleIncludeUppercase,
} from "../../features/generator/slice";

export default function Options() {
  const { includeLowercase, includeUppercase, includeNumber, includeSymbols } = useAppSelector(
    (state) => state.generator
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.options}>
        <label className={styles.option}>
          <input
            checked={includeLowercase}
            className={styles.checkbox}
            type="checkbox"
            onChange={() => dispatch(toggleIncludeLowercase())}
          />
          Include Lowercase
        </label>
        <label className={styles.option}>
          <input
            checked={includeUppercase}
            className={styles.checkbox}
            type="checkbox"
            onChange={() => dispatch(toggleIncludeUppercase())}
          />
          Include Uppercase
        </label>
        <label className={styles.option}>
          <input
            checked={includeNumber}
            className={styles.checkbox}
            type="checkbox"
            onChange={() => dispatch(toggleIncludeNumber())}
          />
          Include Numbers
        </label>
        <label className={styles.option}>
          <input
            checked={includeSymbols}
            className={styles.checkbox}
            type="checkbox"
            onChange={() => dispatch(toggleIncludeSymbols())}
          />
          Include Symbols
        </label>
      </div>
    </div>
  );
}

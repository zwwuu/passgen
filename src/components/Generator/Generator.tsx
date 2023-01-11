import styles from "./Generator.module.css";
import Output from "../Output/Output";
import Slider from "../Slider/Slider";
import Options from "../Options/Options";
import { generatePassword } from "../../features/generator/slice";
import { useAppDispatch } from "../../features/generator/hooks";
import { useEffect } from "react";

export default function Generator() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generatePassword());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Output />
      <Slider />
      <Options />
      <button className={styles.generateBtn} onClick={() => dispatch(generatePassword())}>
        Generate
      </button>
    </div>
  );
}

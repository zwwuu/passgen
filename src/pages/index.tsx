import Head from "next/head";
import styles from "../styles/Home.module.css";
import Generator from "../components/Generator/Generator";

export default function Home() {
  return (
    <>
      <Head>
        <title>PassGen</title>
        <meta content="Yet another password generator" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>PassGen</h1>
            <p className={styles.description}>Yet another password generator</p>
            <Generator />
          </main>
        </div>
      </div>
    </>
  );
}

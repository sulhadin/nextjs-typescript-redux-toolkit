import React from "react";

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser, setUser} from "../store/slices/userSlice";
import {Typography} from "@mui/material";

const Home: NextPage = () => {

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(
          setUser({id:2, username: "Öney"})
      );
    }, 2000);
  });


  console.log("user", user)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h1" component="h2"  className={styles.title}>
          Hi <>{user.username}</>
        </Typography>

        <p className={styles.description}>
          <code className={styles.code}>Something is wrong I can feel it!</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <Typography variant="h2" component="h2">
              Box 1 &rarr;
            </Typography>
            <p></p>
            <Typography variant="subtitle2">
              Find in-depth information about Next.js features and API.
            </Typography>
          </a>

          <a href="#" className={styles.card}>
            <Typography variant="h2" component="h2">
              Box 2 &rarr;
            </Typography>
            <Typography variant="subtitle2">
              Learn about Next.js in an interactive course with quizzes!
            </Typography>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <Typography variant="h2" component="h2">
              Box 3 &rarr;
            </Typography>
            <Typography variant="subtitle2">
              Discover and deploy boilerplate example Next.js projects.
            </Typography>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <Typography variant="h2" component="h2">
              Box 4 &rarr;
            </Typography>
            <Typography variant="subtitle2">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Typography>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
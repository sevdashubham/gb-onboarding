import Head from 'next/head';
import React, { useEffect } from 'react';
import appConstants from '../util/enUS';
import utilStyles from '../styles/styles.module.css'
import Stepper from "../components/stepper";

export default function Home() {

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            document.querySelector(':root').style
                .setProperty('--vh', window.innerHeight/100 + 'px');
        })
    });

  const {title, description, options} = appConstants;

  const listOptions = options.map((option,index) => {
    return (
        <div className={utilStyles.column} key={index}>
        <a href="#" className={`${utilStyles.card} ${index === 0 ? utilStyles.active: ''}`}>
            <h3>{option}</h3>
        </a>
            </div>
    )
  })
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>GB Onboarding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={utilStyles.title}>
          {title}
        </h1>

        <p className={utilStyles.description}>
          {description}
        </p>

        <div className={utilStyles.grid}>
          {listOptions}
        </div>
      </main>
        <Stepper/>
    </div>
  )
}

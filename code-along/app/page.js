"use client"
import React from 'react'
import styles from './page.module.css'
import MyButton from './components/atoms/MyButton'
import SearchInput from './components/molecules/SearchInput';

export default function Home() { //parent
  function setStateClickHandler (e) {
    console.log(e);
  }

  function searchClickHandler (e) {
    console.log(e);
  }


  return (
    <main className={styles.main}>
      <h1>Waddup</h1>
      <div className="search-input-wrapper">
        <SearchInput
          title="SEARCH"
          searchClickHandler={searchClickHandler}
          buttonText="GO"
        />
        <div style={{height:"80px"}}></div>
        <SearchInput
          title="NEWSLETTER"
          searchClickHandler={searchClickHandler}
          buttonText="SIGN UP"
        />
      </div>

      <MyButton
        clickHandler={setStateClickHandler}
        buttonText={"Set State"}
      />
    </main>
  )
}

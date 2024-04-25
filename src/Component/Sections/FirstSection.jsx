import React from 'react'
import styles from "./FirstSection.module.css"



const FirstSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textBox}>
            <div className={styles.text}>
                <h1><span>We Fight </span>For Your Right</h1>
                <p>Another cool free template by the fine folks at Colorlib.</p>
                <button>FREE CONSULTATION</button>
            </div>
        </div>
    </div>
  )
}

export default FirstSection
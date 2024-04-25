import React from 'react'
import styles from './Header.module.css'









const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headerBox}>
            <h1>Justice<span>.</span></h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Practice Areas</li>
                    <li>Services</li>
                    <li>Attorneys</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
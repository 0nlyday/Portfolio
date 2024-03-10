import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://img2.pic.in.th/pic/190f2350e7539abb5b1d31bb14123909.png" alt="" />
            <p>PlantPursuit</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
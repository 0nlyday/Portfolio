import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          She is a person who understands others very well, works quickly, but is worried about the work she is responsible for.
          </p>
          <img
            src="https://img2.pic.in.th/pic/318671945_2610495669093444_1795196836041998532_n.jpeg"
            alt=""
          />
          <h4>Prapt</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          She is a mentor to her friends. and always looking to solve problems No matter what But she is blunt.
          </p>
          <img
            src="https://img2.pic.in.th/pic/415096499_7170831729644737_5290485202746944663_nb5ff09148630e2a7.jpeg"
            alt=""
          />
          <h4>Joe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
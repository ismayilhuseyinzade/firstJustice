import React from "react";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={styles.secondContainer}>
      <div className={styles.Areas}>
        <div className={styles.leftAreas}>
          <h1>
            Our <span>Practice Areas</span>
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.rightAreas}>
          <button><i class="fa-solid fa-briefcase"></i></button>
          <div>
            <span>Banking and Finance Law</span>
            <p>
              Far far away, behind the word mountains, far from the countries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

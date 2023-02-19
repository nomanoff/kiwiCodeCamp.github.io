import React from "react";
import styles from "./styles.module.css";

function HomepageIntroVideo() {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KlV70aQGblk"
        title="kiwiCodeCamp Introduction Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default HomepageIntroVideo;

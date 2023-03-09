import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Master Web Development",
    Svg: require("@site/static/img/undraw_kiwicodecamp_mountain.svg").default,
    description: (
      <>Comprehensive web development curriculum, from beginner to advanced.</>
    ),
  },
  {
    title: "Community Support",
    Svg: require("@site/static/img/undraw_kiwicodecamp_tree.svg").default,
    description: (
      <>Active community on Telegram to support you as you learn and grow.</>
    ),
  },
  {
    title: "Project-Based",
    Svg: require("@site/static/img/undraw_kiwicodecamp_react.svg").default,
    description: (
      <>Hands-on, project-based learning to develop real-world skills.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

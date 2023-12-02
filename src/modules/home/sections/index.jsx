import React from "react";
import Section1 from "./section1";
import styles from '../Home.module.css';
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import SectionX from "./sectionX";


const SectionsIndex = (props) => {

    return (
        // <div style={{ margin: '4rem 6.91rem', boxSizing: "border-box" }}></div>
        <div className={styles.sectionindexwrapper}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section1 />
            <Section4 />
            <SectionX />
        </div>
    );
}
export default SectionsIndex;
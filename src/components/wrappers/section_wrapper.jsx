import React from "react";
import styles from './Wrapper.module.css';



const SectionWrapper = ({ children, Icon, title }) => {

    return (
        <div className={styles.sectionwrapper}>
            <div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 10, color: "rgb(210, 63, 87)" }}>
                    <Icon style={{ marginRight: 10 }} />
                    <h2 className={styles.sectiontitle}> {title} </h2>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper;
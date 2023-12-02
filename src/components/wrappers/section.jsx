import React, { useEffect } from "react";
import styles from "./Section.module.css";
import RoundedIconItem from "../buttons/rounded_btn_icon";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";
import { useState } from "react";


const SectionWrapper = ({ children, title, gridWidth, name }) => {

    const [isScrollable, setisScrollable] = useState(false);
    const [scrollable, setScrollable] = useState(null);

    useEffect(() => {
        let scroll = document.querySelector(`#${name}`);
        setScrollable(scroll);
        let isHorizontalScroll = scroll && scroll.scrollWidth > scroll.clientWidth;
        setisScrollable(isHorizontalScroll);
    }, [])

    useEffect(() => {

    }, [scrollable]);

    const handleScrollHorizontal = (e) => {
        // document.getElementById(props.id).scrollLeft += 120;
        let current = e.currentTarget.id;
        let element = current == "left" ? e.currentTarget.nextElementSibling : e.currentTarget.previousElementSibling;
        element.scrollLeft += current == "left" ? -210 : 210;
    }

    return (
        <div className={styles.sectionwrapper}>
            <h2 className={styles.sectiontitle}> {title} </h2>
            <div className={styles.sectioncontainer}>
                <div id={"left"} onClick={(e) => handleScrollHorizontal(e)} className={`${isScrollable ? styles.itemvisible : {}}  ${styles.i}`}>
                    <RoundedIconItem background="#F06B6B">
                        <ChevronLeft style={{ color: "white" }} fontSize="medium" color="#FFF" />
                    </RoundedIconItem>
                </div>
                <div id={name} className={styles.sectionscrollable}>
                    <div style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${gridWidth || 230}px, 1fr))` }} className={styles.sectionchildren}> {children} </div>
                </div>
                <div id={"right"} onClick={(e) => handleScrollHorizontal(e)} className={`${isScrollable ? styles.itemvisible : {}} ${styles.i}`}>
                    <RoundedIconItem background="#F06B6B">
                        <ChevronRight style={{ color: "white" }} fontSize="medium" color="white" />
                    </RoundedIconItem>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper;
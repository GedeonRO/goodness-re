import React from "react";
import styles from "./Horizontalscoll.module.css";
import RoundedIconItem from "../buttons/rounded_btn_icon";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";


const HorizontalScroll = (props) => {

    const scrollLeftRight = (e) => {
        console.log(e.target);
        document.getElementById(props.id).scrollLeft += 120;
    }

    return (
        <div className={styles.wrapper}>
            <div id="right" onClick={scrollLeftRight} className={styles.i}>
                <RoundedIconItem background="#0F3460">
                    <ChevronLeft fontSize="medium" />
                </RoundedIconItem>
            </div>

            <ul id={props.id} className={styles.carousel}>
                {props.children}
            </ul>

            <div id="left" onClick={scrollLeftRight} className={styles.i}>
                <RoundedIconItem background="#0F3460">
                    <ChevronRight fontSize="medium" />
                </RoundedIconItem>
            </div>
        </div>
    );
}

export default HorizontalScroll;
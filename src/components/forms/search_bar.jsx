import React from "react";
import styles from './Forms.module.css';
import RoundedIconItem from "../buttons/rounded_btn_icon";
// import { Search } from "@mui/icons-material";
import Rounded from "../buttons/rounded";
import { Search, SearchAdvanced } from "@carbon/icons-react";


const Searchbar = ({ onChange, onClick }) => {

    const handleChange = (event) => {
        onChange(event);
    }

    return (
        <>
            <input autoCorrect="" autoComplete="" onChange={handleChange} className={styles.searchbarinput} type="text" placeholder="Que cherchez vous ?" />

            <div style={{ color: "white" }}>
                <Rounded background="#D23F57" icon={<Search />} />
            </div>
        </>
    );
}

export default Searchbar;
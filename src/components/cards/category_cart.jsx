import React from "react";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";


const CategoryCard = ({ category }) => {

    const navigate = useNavigate();
    const name = category.name.length > 16 ? category.name.substring(0, 15) + '...' : category.name;

    const handleClick = () => navigate("/search", { state: { searchtype: "cpdcts", value: "", key: "", acategory: category.id } });

    return (
        <div onClick={handleClick} className={styles.categorycard}>
            <div className={styles.categoryimagecontain}>
                <img className={styles.categoryimage} src={category.image} alt="" />
                {/* <img className={styles.categoryimage} src={category.image} alt="" /> */}
            </div>
            <div className={styles.categoryname}> {name} </div>
            {/* <div className={styles.categoryname}>Health & wellness</div> */}
        </div>
    );

}

export default CategoryCard;
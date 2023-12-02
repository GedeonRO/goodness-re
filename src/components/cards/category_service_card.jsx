import React from "react";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";


const ServiceCategory = ({ service }) => {

    const navigate = useNavigate();
    const name = service.name.length > 16 ? service.name.substring(0, 15) + '...' : service.name;

    const handleClick = () => navigate('/services');

    return (
        <div onClick={handleClick} className={styles.categorycard}>
            <div className={styles.categorycover2}></div>
            <div className={styles.categoryimagecontain2}>
                <img className={styles.categoryimage} src={service.image} alt="" />
                {/* <img className={styles.categoryimage} src={category.image} alt="" /> */}
            </div>
            <div className={styles.categoryname}> {name} </div>
            {/* <div className={styles.categoryname}>Health & wellness</div> */}
        </div>
    );

}

export default ServiceCategory;
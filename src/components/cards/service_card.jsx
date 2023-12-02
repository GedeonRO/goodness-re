import React from "react";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/service", { state: service })} className={styles.catcard}>
            <div className={styles.catimage}>
                <img src={service.pictures[0]} alt="" />
            </div>
            <div className={styles.catdesc}>
                <h3> {service.name} </h3>
                <p> {service.description} </p>
            </div>
        </div>
    );
}

export default ServiceCard;
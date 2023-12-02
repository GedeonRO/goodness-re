import React from "react";
import styles from './Header.module.css';
import { Menu } from "@mui/icons-material";
import "react-dropdown/style.css";
import CustomDrawer from "../../drawer/drawer";
import Dropdown from "../../menus/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../../app/reducers/drawer_reducer";
import { Link, useNavigate } from "react-router-dom";


const HeaderLeftContent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category);
    const subcategories = useSelector((state) => state.subcategory);
    const items = useSelector((state) => state.item);
    const products = useSelector((state) => state.product);
    const drawer = useSelector((state) => state.drawer);

    const openLeftDrawer = () => {
        dispatch(openDrawer({ isOpen: true, direction: 'left' }));
        return drawer;
    }

    return (
        <div className={styles.headerleft}>
            <Link className={styles.med} to="/" med="" style={{ paddingTop: 5 }}>
                <img src="/assets/images/logo-goodness.png" alt="" height={40} />
            </Link>

            <div med="" style={{ marginRight: "10px", marginLeft: "1.2rem" }} >
                <Dropdown type="category" title="Catégories" products={products.data} items={items.data} subcategories={subcategories.data} categories={categories.data} />
            </div>

            <div onClick={() => navigate("/services", { replace: true })} med="" style={{ marginRight: "4rem" }}>
                <Dropdown type="service" title="Services" products={products.data} items={items.data} subcategories={subcategories.data} categories={categories.data} />
            </div>
        </div>
    )
}

export default HeaderLeftContent;
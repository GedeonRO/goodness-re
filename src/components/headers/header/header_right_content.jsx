import React from "react";
import styles from './Header.module.css';
import { PersonOutlineOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import "react-dropdown/style.css";
import CustomDrawer from "../../drawer/drawer";
import DrawerCartContent from "../../drawer/drawer_cart_content";
import RoundedIconItem from "../../buttons/rounded_btn_icon";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../../app/reducers/drawer_reducer";
import { Link, useNavigate } from "react-router-dom";
import Rounded from "../../buttons/rounded";
import { ShoppingBag, User } from "@carbon/icons-react";


const HeaderRightContent = () => {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const drawer = useSelector((state) => state.drawer);
    const dispatch = useDispatch();

    const openRightDrawer = () => {
        dispatch(openDrawer({ isOpen: true, direction: 'right' }));
        return drawer;
    }

    return (
        <div className={styles.headerright}>
            {/* <Link to={user.data && user.data.token ? '/profile' : '/signin'}>
                <RoundedIconItem background="#f3f5f9">
                    <PersonOutlineOutlined color="#222E35" fontSize="small" />
                </RoundedIconItem>
            </Link> */}
            <div onClick={() => { user.data && user.data.token ? navigate("/profile") : navigate("/signin") }}>
                {/* <CustomDrawer direction="right" toggleDrawer={openRightDrawer} child={(<RoundedIconItem background="#f3f5f9">
                        <ShoppingBagOutlined color="#222E35" fontSize="small" />
                    </RoundedIconItem>)}>
                        <DrawerCartContent />
                    </CustomDrawer> */}
                <Rounded background="#f3f5f9" icon={<User size={22} />} />
                {/* <ShoppingBagOutlined color="#222E35" fontSize="small" /> */}
            </div>
            <div className={styles.headerrightleft}>
                {
                    cart.cart.length != 0 && (
                        <div className={styles.cartlenght}>
                            <span>
                                {cart.cart.length}
                            </span>
                        </div>
                    )
                }
                {/* <div>
                    <CustomDrawer direction="right" toggleDrawer={openRightDrawer} child={(<RoundedIconItem background="#f3f5f9">
                        <ShoppingBagOutlined color="#222E35" fontSize="small" />
                    </RoundedIconItem>)}>
                        <DrawerCartContent />
                    </CustomDrawer>
                </div> */}

                <div onClick={() => navigate("/cart")}>
                    {/* <CustomDrawer direction="right" toggleDrawer={openRightDrawer} child={(<RoundedIconItem background="#f3f5f9">
                        <ShoppingBagOutlined color="#222E35" fontSize="small" />
                    </RoundedIconItem>)}>
                        <DrawerCartContent />
                    </CustomDrawer> */}
                    <Rounded background="#f3f5f9" icon={<ShoppingBag size={22} />} />
                    {/* <ShoppingBagOutlined color="#222E35" fontSize="small" /> */}
                </div>
            </div>
        </div>
    );
}

export default HeaderRightContent;
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./Drawercartcontent.module.css";

const CustomDrawer = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('');

  const closeanydrawer = () => {
    // dispatch(closeDrawer({ direction: direction }))
    setIsOpen(false);
  };

  const toggleDrawer = async () => {
    try {
      let result = props.toggleDrawer() ? props.toggleDrawer() : false;
      setIsOpen(result.isOpen);
      setDirection(props.direction);
      // window.scrollTo(0, document.body.scrollHeight);
      // setDirection(result.direction);
    } catch (error) {
      setIsOpen(false);
      // setDirection(result.direction);
    }
    // let result = props.toggleDrawer() ? props.toggleDrawer() : false;
    // let result = props.toggleDrawer() || false;
    // setIsOpen(result.isOpen);
    // setDirection(result.direction);
  }

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeanydrawer: closeanydrawer });
    }
    return child;
  });

  return (
    <>
      <div onClick={toggleDrawer}>
        {props.child}
      </div>
      <Drawer
        open={isOpen}
        onClose={closeanydrawer}
        direction={direction}
        className={styles.cartandatadrawer}
        lockBackgroundScroll={true}
        zIndex={3}
      >
        {/* {props.children} */}
        {childrenWithProps}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
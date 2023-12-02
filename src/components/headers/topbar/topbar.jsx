import React, {useState} from 'react';
import styles from './TopBar.module.css';
import { CallOutlined, ExpandMore, MailOutline,} from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";

const TopBar = (props) => {
   
   return (
      <div className={styles.topbar}>
         {/*  */}
         <div className={styles.topbarLeft}>
            <div className={styles.logo}>
               <a href="/">
                  <img
                     display="block"
                     height={30}
                     src="/assets/images/logo-goodness.png"
                     alt="logo"
                  />
               </a>
            </div>
            <div med="" className={styles.leftItem}>
               <CallOutlined fontSize="small" />
               <span style={{marginLeft: 10}}>+88012 3456 7894</span>
            </div>
            <div med="" className={styles.leftItem} style={{marginLeft: 20}}>
               <MailOutline fontSize="small" />
               <span style={{marginLeft: 10}}>support@ui-lib.com</span>
            </div>
         </div>
         {/*  */}
         <div className={styles.topbarRight}>
            <span med="" style={{marginLeft: 30}}>Theme FAQ"s</span>
            <span med="" style={{marginLeft: 30}}>Need Help?</span>
            
            <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
               <CustomMenu menu={LangList} />
               {/* <span>Title</span> */}
            </div>
            <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
               <CustomMenu menu={curList} />
               {/* <span>Title</span> */}
            </div>
         </div>
      </div>
   )
}

export default TopBar;

let LangList = [
   'FR',
   'EN'
]

let curList = [
   'XOF',
   'EURO'
]

const CustomMenu = (props) => {

   const [value, setValue] = useState(props.menu[0]);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = (item) => {
      setAnchorEl(null);
      setValue(item)
   };

   return <>
      <div
         onClick={handleClick}
         style={{display: "flex", alignItems: 'center'}}
      >
         <span> {value}  </span>
         <ExpandMore fontSize="small" />
      </div>
      <Menu
         id="demo-positioned-menu"
         aria-labelledby="demo-positioned-button"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
         }}
         >
         {
            props.menu.map((item, index) => 
               <MenuItem key={index} onClick={() => handleClose(item)}>
                  <span style={{fontSize: 12}}>
                     {item}
                  </span>
               </MenuItem>
            )
         }
      </Menu>
   </>
}
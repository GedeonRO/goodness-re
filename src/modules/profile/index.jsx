/* import React from "react";
import styles from './Profile.module.css';
import { ChevronRightOutlined, ExitToApp, FavoriteBorderOutlined, LocationOn, LocationOnOutlined, Logout, PersonOutlined, ShoppingBag, ShoppingBagOutlined } from "@mui/icons-material";
import Orders from "./orders";
import Profile from "./profile";
import WishList from "./wishlist";
import Address from "./address";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removedata } from "../../app/reducers/user_reducer";
import { useNavigate } from "react-router-dom";
import { Exit, Favorite, Location, ShoppingCart, User } from "@carbon/icons-react";
import { ChevronRight } from "@carbon/icons-react";


let steps = [
    <Profile />,
    <Orders />,
    <WishList />,
    <Address />,
];


const ProfileIndex = () => {
    //

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [stepIndex, setStepIndex] = useState(0);

    const disconnect = () => {
        dispatch(removedata());
        navigate('/');
    }

    const goToIndex = (index) => {
        setStepIndex(index);
    }

    return (
        
        <div className={styles.profilewrapper}>
            <div className={styles.profileleftcontainer}>
                <MenuItem stepIndex={stepIndex} index={0} onClick={() => goToIndex(0)} title="Profile" right={<User />} />
                <MenuItem stepIndex={stepIndex} index={1} onClick={() => goToIndex(1)} title="Commandes" right={<ShoppingCart />} />
                <MenuItem stepIndex={stepIndex} index={2} onClick={() => goToIndex(2)} title="Souhaits" right={<Favorite />} />
                <MenuItem stepIndex={stepIndex} index={3} onClick={() => goToIndex(3)} title="Adresses" right={<Location />} />
                <div onClick={disconnect} className={styles.menuitemwrapper}>
                    <div className={styles.menuitemleft}>
                        <Exit /><span style={{ marginLeft: 5 }}> Déconnexion</span>
                    </div>
                </div>
            </div>
            <div className={styles.profilerightcontainer}>
                {
                    steps[stepIndex]
                }
            </div>
        </div>
    )
}


const MenuItem = ({ title, right, onClick, index, stepIndex }) => {

    return (
        <div onClick={onClick} className={styles.menuitemwrapper} >
            <div className={styles.menuitemleft}>
                {right}
                <span style={{ marginLeft: 5 }}>{title}</span>
            </div>

            <ChevronRight className={styles.med} />
        </div>
    );
}


export default ProfileIndex; */


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ExitToApp, FavoriteBorderOutlined, LocationOnOutlined, ShoppingCartOutlined, PersonOutlined } from "@mui/icons-material";
import { User, ShoppingCart, Favorite, Location, ChevronRight } from "@carbon/icons-react";
import { removedata } from "../../app/reducers/user_reducer";
import styles from './Profile.module.css';
import styles1 from './profile.ajout.css';
import Orders from "./orders";
import Profile from "./profile";
import WishList from "./wishlist";
import Address from "./address";
import { useSelector } from "react-redux";
import { useEffect } from "react";
/* import Subscription from "./Subscription"; */

let steps = [
  <Profile />,
  <Orders />,
  <WishList />,
  <Address />,
];




const ProfileIndex = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [stepIndex, setStepIndex] = useState(0);
  const user = useSelector((state) => state.user);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
      if (user.data.token) setIsLogged(true); else {
          navigate('/signin');
      };
  }, [])


  const disconnect = () => {
    dispatch(removedata());
    navigate('/');
  };

  const goToIndex = (index) => {
    setStepIndex(index);
    
  };





  return (
    <>
      <div className="main-content mw1280 center" id="maincontent" data-testid="maincontent">
        <main>
          <div className="flex relative-m">

            <div className="dn br b--black-10 flex-grow-0 flex-shrink-0 od-print-view db-m" style={{ width: '336px' }}>
              <section>
                <nav>
                  <div data-testid="account-menu">
                    <div className="pl3 pl4-m pt3-m pr4 pb2 pt4" style={{ backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: 'transparent' }}>
                      <span className="flex items-center" style={{ maxWidth: '15rem' }}>
                        <span>
                          <h1 className="ma0 underline-hover dark-gray no-underline truncate mw5">
                            <a link-identifier="My Account" className="dark-gray no-underline ma0 pb2-m f2 lh-copy" data-qm-exclude="true" href="#">{user.data && user.data.user_name}</a>
                          </h1>
                          <p className="dark-gray ma0 f7 lh-copy">Thanks for being a Goodnessunit customer for 1 year</p>
                        </span>
                        <span className="ml-auto"></span>
                      </span>
                    </div>
                    
                    <hr aria-hidden="true" className="w_8Gn9" />
                    <div className="pl3 pl4-m pt2-m pr4 pb4">
                      <ul className="pa0">
                        <li className="list nl4 nr4">
                          <span link-identifier="yourOrders">
                            <div stepIndex={stepIndex} index={0} onClick={() => goToIndex(0)} className="w_R6fx f6 mid-gray">
                              <span className="w_uYxD">
                                <i className="ld ld-User mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Information Personnelle</span>
                            </div>
                          </span>
                          <span link-identifier="yourOrders">
                          <div stepIndex={stepIndex} index={1} onClick={() => goToIndex(1)} className="w_R6fx f6 mid-gray">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Historique commandes</span>
                            </div>
                          </span>
                          <span link-identifier="yourOrders">
                          <div stepIndex={stepIndex} index={2} onClick={() => goToIndex(2)} className="w_R6fx f6 mid-gray">
                              <span className="w_uYxD">
                                <i className="ld ld-address mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Adresses</span>
                            </div>
                          </span>
                          <span link-identifier="yourOrders">
                          <div stepIndex={stepIndex} index={3} onClick={() => goToIndex(3)} className="w_R6fx f6 mid-gray">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Wishlist</span>
                            </div>
                          </span>
                        </li>
                        {/* ... (repeat similar structure for other list items) */}
                      </ul>

                      <hr aria-hidden="true" className="w_8Gn9" />
                      <h2 className="mb0 mt3 f5 lh-copy dark-gray">
                        Goodnessunit +
                      </h2>
                      <ul className="pa0">
                        <li className="list nl4 nr4">
                          <span link-identifier="yourOrders">
                            <a className="w_R6fx f6 mid-gray" href="#">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Achat avec GoodPay</span>
                            </a>
                          </span>
                          <span link-identifier="yourOrders">
                            <a className="w_R6fx f6 mid-gray" href="#">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Qu'est ce que GOODNESSUNIT + ?</span>
                            </a>
                          </span>
                        </li>
                      </ul>

                      <hr aria-hidden="true" className="w_8Gn9" />
                      <h2 className="mb0 mt3 f5 lh-copy dark-gray">
                        Goodnessunit delivery
                      </h2>
                      <ul className="pa0">
                        <li className="list nl4 nr4">
                          <span link-identifier="yourOrders">
                            <a className="w_R6fx f6 mid-gray" href="#">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Livraison GooDeliver</span>
                            </a>
                          </span>
                          <span link-identifier="yourOrders">
                            <a className="w_R6fx f6 mid-gray" href="#">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Abonnement</span>
                            </a>
                          </span>
                        </li>
                      </ul>
                      <hr aria-hidden="true" className="w_8Gn9" />
                      <h2 className="mb0 mt3 f5 lh-copy dark-gray">
                        Customer service
                      </h2>
                      <ul className="pa0">
                        <li className="list nl4 nr4">
                          <span link-identifier="yourOrders">
                            <a className="w_R6fx f6 mid-gray" href="#">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Terms et conditions </span>
                            </a>
                          </span>
                          <span link-identifier="yourOrders">
                            <a className="w_R6fx f6 mid-gray" href="#">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Foires Aux Questions</span>
                            </a>
                          </span>
                          <hr aria-hidden="true" className="w_8Gn9" />
                          <span link-identifier="yourOrders">
                           <div onClick={disconnect} className="w_R6fx f6 mid-gray">
                              <span className="w_uYxD">
                                <i className="ld ld-Receipt mid-gray f5" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                              </span>
                              <span>Deconnexion</span>

                            </div>
                          </span>
                        </li>
                      </ul>
                      {/* ... (repeat similar structure for other sections) */}
                    </div>
                  </div>
                </nav>
              </section>
            </div>

            <div className={styles.profilerightcontainer}>
                        {
                            steps[stepIndex]
                        }
            </div>
            
          </div>
        </main>
      </div>
    </>
  );
};

const MenuItem = ({ title, right, onClick, isActive }) => {
  return (
    <div onClick={onClick} className={`${styles.menuitemwrapper} ${isActive ? styles.active : ""}`}>
      <div className={styles.menuitemleft}>
        {right}
        <span style={{ marginLeft: 5 }}>{title}</span>
      </div>
      <ChevronRight className={styles.med} />
    </div>



  );
};

export default ProfileIndex;

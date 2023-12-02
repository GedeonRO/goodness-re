import React from "react";
import styles from "./Profile.module.css";
import styles1 from './profile.ajout.css';
import { Person } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (user.data.token) setIsLogged(true); else {
            navigate('/signin');
        };
    }, [])

    return (
        isLogged && (
            <><div className={styles.userprofilewrapper}>
                
            </div><div className="pt4">
                    
            <div className="w-100 di-m flex-auto">
              <div className="pl4">
                <section>
                  <div>
                    <div>
                      <div className="flex flex-row justify-between">
                        <h2 className="w_kV33 w_NVP_ w_mvVb pv3">Welcome to your Account</h2>

                      </div>
                    </div>


                   
                    <div className="pt4">
                      <div className="w_0Uhy w_QddF">
                        <a link-identifier="accountInfoModule" className="black no-underline" href="#">
                          <div className="pv4 ph3 flex justify-between items-center" style={{ backgroundColor: 'rgb(242, 248, 253)' }}>
                            <div className="flex items-start">
                              <i className="ld ld-User mr3" aria-hidden="true" style={{ fontSize: '1.5rem', verticalAlign: '-0.25em', width: '1.5rem', height: '1.5rem', boxSizing: 'content-box' }}></i>
                              
                              <div className="flex flex-column">
                                <h3 className="f3 mv0" style={{ lineHeight: '24px' }}>Account info</h3>
                                <span>{user.data && user.data.user_name}</span>
                              </div>
                            </div>
                            <i className="ld ld-ChevronRight f7" data-testid="account-nav-icon" style={{ fontSize: '1.5rem', verticalAlign: '-0.25em', width: '1.5rem', height: '1.5rem', boxSizing: 'content-box' }}></i>
                          </div>
                        </a>
                        <div style={{ flex: '1 1 0%', height: 'auto' }}>
                          <div className="w_KPWk">
                            <div className="w_aoqv w_EP2w flex flex-column br bb b--near-white pa4">
                              <h4 className="f4 b mv0" style={{ lineHeight: '24px' }}>Email Address</h4>
                              <span>
                               {user.data && user.data.email || "Utilisateur (client)"}
                                
                              </span>
                            </div>
                            <div className="w_aoqv w_EP2w flex flex-column br bb b--near-white pa4">
                              <h4 className="f4 b mv0" style={{ lineHeight: '24px' }}>Phone number</h4>
                              <span className="tl">
                                
                                  +228{user.data && user.data.phone}
                               
                              </span>
                            </div>
                            <div className="w_aoqv w_b0y1 flex flex-row pa4">
                              <div className="flex flex-column w-90">
                                <h4 className="f4 b mv0" style={{ lineHeight: '24px' }}>Addresses</h4>
                                <span>Sacramento, Porto Novo, CA 95829</span>
                              </div>
                              <span className="w-30 flex flex-row-reverse">
                                
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="pt4">
                      <div className="w_0Uhy w_QddF">
                        <a link-identifier="accountWalletModule" className="black no-underline" href="#">
                          <div className="pv4 ph3 flex justify-between items-center" style={{ backgroundColor: 'rgb(242, 248, 253)' }}>
                            <div className="flex items-start">
                              <i className="ld ld-Wallet mr3 " aria-hidden="true" style={{ fontSize: '1.5rem', verticalAlign: '-0.25em', width: '1.5rem', height: '1.5rem', boxSizing: 'content-box' }}></i>
                              <div className="flex items-center">
                                <h2 className="f3 mv0" style={{ lineHeight: '24px' }}>Wallet</h2>
                                <span className="ph2 f3" aria-hidden="true">|</span>
                                <span className="w_U9_0 w_sD6D w_QcqU f3">Payment methods</span>
                              </div>
                            </div>
                            <i className="ld ld-ChevronRight f7" data-testid="account-nav-icon" style={{ fontSize: '1.5rem', verticalAlign: '-0.25em', width: '1.5rem', height: '1.5rem', boxSizing: 'content-box' }}></i>
                          </div>
                        </a>
                        <div data-qm-exclude="true">
                          <div className="ph3 pb3" style={{ backgroundColor: 'rgb(242, 248, 253)' }}>
                            <span className="w_U9_0 w_sD6D w_QcqU f6"> les moyens de paiments que nous acceptons </span>
                            <div className="flex justify-between flex-wrap">
                              <div className="mv3 mh1-m" data-testid="ALLCC">
                                <button className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6 db no-underline shadow-1 br3" type="button" aria-describedby="disabled-message-ALLCC" aria-label="Credit/Debit Card. Visa, Amex, Discover, Mastercard, Capital One and more accepted" control-id="ControlID-7" style={{ backgroundColor: 'white' }}>
                                  <div className="flex flex-column items-center justify-center pa3 justify-between pt4" style={{ width: '270px', height: '150px' }}>
                                    <img loading="lazy" width="100" height="80" src="assets/images/Logo-TMONEY.png" alt="Credit/debit card" aria-hidden="true" className="contain" id="" data-qm-exclude="true" />
                                    <div className="tc ma1">
                                      <span className="w_U9_0 w_U0S3 w_QcqU b f6" style={{ lineHeight: '20px' }}>Tmoney</span>
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="mv3 mh1-m" data-testid="ALLCC">
                                <button className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6 db no-underline shadow-1 br3" type="button" aria-describedby="disabled-message-ALLCC" aria-label="Credit/Debit Card. Visa, Amex, Discover, Mastercard, Capital One and more accepted" control-id="ControlID-7" style={{ backgroundColor: 'white' }}>
                                  <div className="flex flex-column items-center justify-center pa3 justify-between pt4" style={{ width: '270px', height: '150px' }}>
                                    <img loading="lazy" width="120" height="80" src="assets/images/logo-flooz.jpg" alt="Credit/debit card" aria-hidden="true" className="contain" id="" data-qm-exclude="true" />
                                    <div className="tc ma1">
                                      <span className="w_U9_0 w_U0S3 w_QcqU b f6" style={{ lineHeight: '20px' }}>Flooz</span>
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="mv3 mh1-m" data-testid="ALLCC">
                                <button className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6 db no-underline shadow-1 br3" type="button" aria-describedby="disabled-message-ALLCC" aria-label="Credit/Debit Card. Visa, Amex, Discover, Mastercard, Capital One and more accepted" control-id="ControlID-7" style={{ backgroundColor: 'white' }}>
                                  <div className="flex flex-column items-center justify-center pa3 justify-between pt4" style={{ width: '270px', height: '150px' }}>
                                    <img loading="lazy" width="120" height="80" src="//i5.walmartimages.com/dfw/63fd9f59-a0df/abc19199-c5c4-40ad-9d4e-8d13356fe6eb/v1/CC-bunch-logo-dark.svg" alt="Credit/debit card" aria-hidden="true" className="contain" id="" data-qm-exclude="true" />
                                    <div className="tc ma1">
                                      <span className="w_U9_0 w_U0S3 w_QcqU b f6" style={{ lineHeight: '20px' }}>Credit/debit card(Bientôt)</span>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt4">

                    </div>
                    <div className="pt4">

                    </div>
                    {/* ... Autres parties du code ... */}
                  </div>
                </section>
              </div>

            </div>
                </div></>
        )
    );
}

export default Profile;
import React, { useState, useEffect } from "react";
import styles from './Profile.module.css';
import { ShoppingBag } from "@mui/icons-material";
import { apiGetOrders } from "../../app/api/controller";
import { utilsThousandSeparator } from "../../app/utils/utils";

const Orders = () => {

    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        setLoading(true);
        const result = await apiGetOrders();
        console.log(result);
        if (!result.error) setOrders(result.data);
        setLoading(false);
    }

    return (
        <div className={styles.orderwrapper}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <ShoppingBag style={{ color: "rgb(210, 63, 87)", marginRight: 10 }} />
                <h2>Mes commandes</h2>
            </div>
            <div className="pt4"></div>

            <div role="region" aria-label="Filter orders" className="overflow-x-auto overflow-visible-m pb2 mb1 pb3-m mb0-m">
                        <div className="w_JGV6" role="list" style={{ gap: '1rem' }}>
                          <div role="listitem">
                            <div className="flex flex-row flex-shrink-0 items-center br-pill bn">
                              <button
                                className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bn sans-serif bg-dark-blue white"
                                type="button" data-automation-id="all-filter" aria-label="All, filter applied"
                                control-id="ControlID-6">
                                All
                              </button>
                            </div>
                          </div>
                          <div role="listitem">
                            <div>
                              <div className="di dn-m">
                                <div className="di dn-m">
                                  <button
                                    className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bw0 sans-serif bg-lighter-gray black"
                                    type="button" data-automation-id="button-selected-filter-bottomsheet"
                                    aria-expanded="false" aria-label="By date" control-id="ControlID-7">
                                    By date
                                    <span className="w_DJtv">
                                      <i className="ld ld-ChevronDown" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="dn di-m flex-shrink-0">
                                <div className="dn di-m flex-shrink-0">
                                  <span className="w_J9Nk" aria-expanded="false">
                                    <button
                                      className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bw0 sans-serif bg-lighter-gray black"
                                      type="button" data-automation-id="all-filter-button" tabindex="0"
                                      aria-expanded="false" aria-label="By date" aria-controls="react-aria-1"
                                      control-id="ControlID-8">
                                      By date
                                      <span className="w_DJtv">
                                        <i className="ld ld-ChevronDown" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                                      </span>
                                    </button>
                                    <div id="react-aria-1"></div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div role="listitem">
                            <div>
                              <button
                                className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bw0 sans-serif bg-lighter-gray black"
                                type="button" data-automation-id="toggle-filter-button" aria-label="Returns"
                                control-id="ControlID-9">
                                Returns
                              </button>
                            </div>
                          </div>
                          <div role="listitem">
                            <div>
                              <button
                                className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bw0 sans-serif bg-lighter-gray black"
                                type="button" data-automation-id="toggle-filter-button" aria-label="In store"
                                control-id="ControlID-10">
                                In store
                              </button>
                            </div>
                          </div>
                          <div role="listitem">
                            <div>
                              <div className="di dn-m">
                                <div className="di dn-m">
                                  <button
                                    className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bw0 sans-serif bg-lighter-gray black"
                                    type="button" data-automation-id="button-selected-filter-bottomsheet"
                                    aria-expanded="false" aria-label="Status"
                                    control-id="ControlID-11">
                                    Status
                                    <span className="w_DJtv">
                                      <i className="ld ld-ChevronDown" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="dn di-m flex-shrink-0">
                                <div className="dn di-m flex-shrink-0">
                                  <span className="w_J9Nk" aria-expanded="false">
                                    <button
                                      className="w_hhLG w_8nsR w_0_LY hover-bg-dark-blue hover-white normal f6 pa3 br-pill bw0 sans-serif bg-lighter-gray black"
                                      type="button" data-automation-id="all-filter-button" tabindex="0"
                                      aria-expanded="false" aria-label="Status" aria-controls="react-aria-2"
                                      control-id="ControlID-12">
                                      Status
                                      <span className="w_DJtv">
                                        <i className="ld ld-ChevronDown" style={{ fontSize: '1rem', verticalAlign: '-0.175em', width: '1rem', height: '1rem', boxSizing: 'content-box' }}></i>
                                      </span>
                                    </button>
                                    <div id="react-aria-2"></div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

            {
                 orders && orders.length > 0 ? (
                    <div style={{ marginTop: "1.3rem" }}>
                                {
                                    orders && orders.map(order => (
                                        <>
                                            
                                            <Separator />

                    <div className="pt4">
                      <div className="w_0Uhy w_QddF">
                        <a link-identifier="accountWalletModule" className="black no-underline" href="#">
                          <div className="pv4 ph3 flex justify-between items-center" style={{ backgroundColor: 'rgb(242, 248, 253)' }}>
                            <div className="flex items-start">
                              <i className="ld ld-Wallet mr3 " aria-hidden="true" style={{ fontSize: '1.5rem', verticalAlign: '-0.25em', width: '1.5rem', height: '1.5rem', boxSizing: 'content-box' }}></i>
                              <div className="flex items-center">
                                <h2 className="f3 mv0" style={{ lineHeight: '24px' }}> Achat</h2>
                                <span className="ph2 f3" aria-hidden="true">|</span>
                                <span className="w_U9_0 w_sD6D w_QcqU f3">{utilsThousandSeparator(order.amount)} XOF </span>
                              </div>
                            </div>
                            <i className="ld ld-ChevronRight f7" data-testid="account-nav-icon" style={{ fontSize: '1.5rem', verticalAlign: '-0.25em', width: '1.5rem', height: '1.5rem', boxSizing: 'content-box' }}></i>
                          </div>
                        </a>
                        <div data-qm-exclude="true">
                          <div className="ph3 pb3" style={{ backgroundColor: 'rgb(242, 248, 253)' }}>
                            <span className="w_U9_0 w_sD6D w_QcqU f6"> Les produits ({order.status})</span>
                            <div className="flex justify-between flex-wrap">
                                {
                                  order.cart.slice(0, 4).map(item =>(
                                    <div className="mv3 mh1-m" data-testid="ALLCC">
                                    <button className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6 db no-underline shadow-1 br3" type="button" aria-describedby="disabled-message-ALLCC" aria-label="Credit/Debit Card. Visa, Amex, Discover, Mastercard, Capital One and more accepted" control-id="ControlID-7" style={{ backgroundColor: 'white' }}>
                                      <div className="flex flex-column items-center justify-center pa3 justify-between pt4" style={{ width: '210px', height: '150px' }}>
                                        <img loading="lazy" width="80" height="80" src={item.product.images[0]} alt="" aria-hidden="true" className="contain" id="" data-qm-exclude="true" />
                                        <div className="tc ma1">
                                          <span className="w_U9_0 w_U0S3 w_QcqU b f6" style={{ lineHeight: '15px' }}> ({item.quantity}) {item.product.name} | {item.product.discount_price} XOF </span>
                                        </div>
                                      </div>
                                    </button>
                                    </div>
                                  ))
                                }
                              
                            </div>
                          </div>
                        </div>
                      </div>
                
                    </div>
                                        </>
                                    ))
                                }
                                { }
                              
                    </div>
                ) : (
                    (
                        <div style={{ display: "grid", flexDirection: "column", alignItems: "center", margin: "10rem auto", justifyContent: "center", justifyItems: "center" }}>
                            <img src="assets/images/not_found.png" style={{ width: 100 }} />
                            <div style={{ margin: 12, fontSize: 17 }}> Aucune commande </div>
                        </div>
                    )
                ) 
}
                <div className="w-100 di-m flex-auto">
                <div>
                  <div className="ma3 ma4-m mt1-m">
                    <section>
                      
                      
                      <hr aria-hidden="true" className="w_8Gn9 mb2" />
                      <div data-testid="flex-container" className="flex undefined flex-column h-100">
                        <div className="h-100 relative">
                          <div data-testid="flex-container" className="flex undefined flex-column h-100">
                            <div className="h-100 relative"> </div>
                          </div>
                        </div>
                      </div>
                      
                     
                    </section>
                  </div>
                  <div id="tempoModules"></div>
                </div>
              </div>
          
        </div>
    );
}

const Separator = () => {
    return (
        <tr className={styles.separator}>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    );
}

export default Orders;

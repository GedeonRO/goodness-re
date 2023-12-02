import React, { useEffect } from "react";
import styles from "./Service.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const ServiceDescription = () => {

    const location = useLocation();
    const [service, setService] = useState({});

    useEffect(() => {
        window.scrollTo({ top: 0 });
        console.log(location.state);
        setService(location.state);
    }, [])

    

    return (
        <div className={styles.servicewrapper}>
           {/*  <div className={styles.serviceheader}>
                <h1>  </h1>
                <div className={styles.servicesslides}>
                    <div style={service && service.pictures && { background: service && `url(${service.pictures[0]})`  }} className={`${styles.slidecontainer} ${styles.slideItem} ${styles.slideleftcontainer}`}></div>
                    <div className={styles._hseparator}></div>
                    <div className={`${styles.slidecontainer} ${styles.sliderightcontainer}`}>
                        <div className={styles.rightslidestart}>
                            <div style={service && service.pictures && { background: service && `url(${service.pictures[1]})` }} className={`${styles.rightslidetop} ${styles.slideItem}`}></div>
                            <div className={styles._vseparator}></div>
                            <div style={service && service.pictures && { background: service && `url(${service.pictures[2]})` }} className={`${styles.rightslidebottom} ${styles.slideItem}`}></div>
                        </div>
                        <div className={styles._hseparator}></div>
                        <div className={`${styles.rightslideend} ${styles.slideItem}`}></div>
                    </div>
                </div>
            </div> */}

            <section className="mh0 mv3 ph3 mv4-l mh4-l ph0-l">
            <h1 className="f2-l f4 lh-copy mb4-l mb3 mt0 b">Services {service && service.name} </h1>
            <hr aria-hidden="true" className="w_8Gn9 mb4 dn db-l" />

            <div className="flex flex-column justify-center relative" data-testid="horizontal-scroller-HeroPOV">
            <ul className="list ma0 pl0 overflow-x-scroll hidesb hidesb-wk relative overflow-y-hidden carousel-peek-1 carousel-1-m"
                        data-testid="carousel-container"
                        style={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            scrollSnapType: 'x mandatory',
                            maxHeight: 'fit-content',}}> 

                            
                                        
                                    

                                            <li className="flex flex-column items-center transitioning" data-slide="0" style={{ scrollSnapAlign: 'start' }}>
                                                <div
                                                    className="relative overflow-hidden ma1 br3 shadow-1"
                                                    id="HeroPovDesktopCard"
                                                    style={{ width: '99.3%' }}
                                                >
                                                    <div className="db relative" data-testid="main-image-wrapper" style={{ paddingTop: '38.15%' }}>
                                                        <img
                                                            loading="lazy"
                                                            width="100%"
                                                            height="auto"
                                                            className="h-100 absolute top-0 right-0"
                                                            src={service && service.pictures}
                                                            alt=""
                                                            style={{ width: '100%' }}
                                                        />
                                                    </div>
                                                    <div className="absolute h-100 w-100 top-0">
                                                        <div className="h-100 pa4 pa3-l pa4-xl flex flex-column" data-testid="main-info" style={{ width: '32.1%', backgroundColor: 'transparent' }}>
                                                            <div className="flex flex-column justify-between" style={{ flexGrow: 2 }}>
                                                                <div className="flex flex-column items-start w-100">
                                                                    <h2 className="ma0 bold lh-title f4 hero-heading--small" id="Giftcardsforthewholegang" style={{ color: 'rgb(46, 47, 50)' }}>
                                                                        

                                                                        {service && service.name}
                                                                    </h2>
                                                                    <span className="ma0 normal mt1 mt2-l f6 f5-l" style={{ color: 'rgb(46, 47, 50)' }}>
                                                                            {service && service.description}
                                                                    </span>
                                                                    <a
                                                                        className="w_hhLG w_XK4d w_0_LY mt3"
                                                                        href={`https://wa.me/${service && service.seller_number}`}
                                                                        style={{ color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgb(0, 0, 0) 0px 0px 0px 1px inset' }}
                                                                    >
                                                                        Whatsapp
                                                                    </a>
                                                                    <a
                                                                        className="w_hhLG w_XK4d w_0_LY mt3"
                                                                        href={`tel:+228${service && service.seller_number}`}
                                                                        style={{ color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgb(0, 0, 0) 0px 0px 0px 1px inset' }}
                                                                    >
                                                                        telephone
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        

                            

                        
                    
                    
                    
                    
            </ul>

            </div>
            

            </section>

        </div >
    );
}

export default ServiceDescription;
import React from "react";
import { useEffect } from "react";
import styles from "./Service.module.css";
import { useSelector } from "react-redux";
import ServiceCard from "../../components/cards/service_card";
import { useNavigate } from "react-router-dom";





const Services = () => {

    const services = useSelector((state) => state.service);
    const s_categories = useSelector((state) => state.servicecategory);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <div className={styles.servicewrapper}>
            {/* {
                JSON.stringify(services)
            } */}
        
            
                            <div className="pt2-l pt3 mb7-l mb6">

                            <h1 class="f2 mh4 mv4 f3-l f4 ma0 mv0-l mh4-l mh3 mb0-l mb3 dark-gray">Browse services</h1>
                                <div class="w_KPWk w_GxNv mh2 ph2 ph1-xl mb4 pb3">

                                {
                                    s_categories.data.map((category) => {
                                        return (
                                <div className="w_aoqv w_wRee w_b0y1 w_1ZCx w_jCHO tl mt4">
                                <div className="flex justify-between shadow-1 br2 pa4 h-100">
                                    <div className="flex flex-column" style={{ maxWidth: 'calc(100% - 140px)' }}>
                                        <h2 className="ma0">   
                                                {category.name}
                                        </h2>

                                        {
                                            services.data.filter((service)=> service.category === category.id).map((service)=>(

                                                <ul className="pt2 pl0 list">
                                                <li className="pv1 pv0-m">
                                                    <a href="" onClick={() => navigate("/service", { state: service })}>
                                                        {service.name}
                                                    </a>
                                                </li>
                                                
                                                
                                                </ul>
                                            ))

                                            
                                        }

                                        
                                    </div>
                                    <div className="self-baseline">
                                        <img
                                            loading="lazy"
                                            src={category.image}
                                            height="96"
                                            width="96"
                                        />
                                    </div>
                                </div>
                            </div>
                             )})
                            }
                            </div>
                            </div>
                   
           
            
        </div>
    );
}

export default Services;



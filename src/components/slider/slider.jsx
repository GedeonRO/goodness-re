import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import { apiGetSlides } from "../../app/api/controller";


const Slider = () => {

    const [loading, setLoading] = useState(true);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        getSlides();
    }, []);

    const getSlides = async () => {
        let result = await apiGetSlides();
        if (result) setSlides(result);
        setLoading(false);
    }

    const findslide = (code) => {
        let slide = slides && slides.data.find((e) => e.code == code);
        return slide;
    }

    const bdi = (code) => {
        const eeee = findslide(code);
        return { backgroundImage: `url(${eeee.image})`, backgroundSize: 'cover', }
    }

    return (
        loading ? (
            <></>
        ) :
            (
                <div id={styles.slider}>
                    <div className={`${styles.slidercard} ${styles.slideredge}`} id={styles.sliderleft}>
                        <div id="sliderleftcontent" className={`${styles.slideItem} ${styles.sliderleftcontent}`}>
                            <div>
                                <h4 id={styles.slideTitle}>Goodness</h4>
                                <p id={styles.slideDescription}></p>
                            </div>
                        </div>
                    </div>

                    {/* <!--  --> */}
                    <div className={styles.slidercard} id={styles.slidercenter}>
                        <div style={bdi('slide1')} className={`${styles.slideItem} ${styles.sliderchild} ${styles.slidercentertop}`}>
                            <Slide slide={findslide('slide1')} />
                        </div>
                        <div className={styles.sliderchild} id={styles.slidercenterbottom}>
                            <div style={bdi('slide5')} className={`${styles.slideItem} ${styles.slidercenterbottomleft}`}>
                                <Slide slide={findslide('slide5')} />
                            </div>
                            <div style={bdi('slide4')} className={`${styles.slideItem} ${styles.slidercenterbottomright}`}>
                                <Slide slide={findslide('slide4')} />
                            </div>
                        </div>
                    </div>

                    {/* <!--  --> */}
                    <div className={`${styles.slidercard} ${styles.slideredge}`} id={styles.sliderright}>
                        <div style={bdi('slide2')} className={`${styles.slideItem} ${styles.sliderchild} ${styles.sliderrightop}`}>
                            <Slide slide={findslide('slide2')} />
                        </div>
                        <div style={bdi('slide3')} className={`${styles.slideItem} ${styles.sliderchild} ${styles.sliderrightbottom}`}>
                            <Slide slide={findslide('slide3')} />
                        </div>
                    </div>
                </div>
            )
    )
}

export default Slider;

const Slide = ({ slide }) => {

    return (
        <div id="slide3" className={styles.bgcover}>
            <h4 className={styles.slideTitle} id="slideTitle"> {slide.title} </h4>
            <p className={styles.slideDescription} id="slideDescription"> {slide.description} </p>
            <span className={styles.slideLink} id="slideLink"> <a href={slide.link}>{slide.linkText}</a> </span>
            <h4 className={styles.slideBottom} id="slideBottom"> {slide.buttomText} </h4>
        </div>
    );
}
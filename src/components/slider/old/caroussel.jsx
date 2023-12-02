import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./Crousel.module.css";
import CarouselContent from "./carousel_content";
import { apiGetSliders } from "../../../app/api/controller";
import { CircularProgress } from "@mui/material";

const CustomCaroussel = () => {

   const [loading, setLoading] = useState(true);
   const [sliders, setSliders] = useState([])

   useEffect(() => {
      getSliders()
   }, [])

   const getSliders = async () => {
      const result = await apiGetSliders();
      if (result.data) {
         setSliders(result.data);
      }
      setLoading(false)
   }

   return (

      loading ? (
         <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
         </div>
      ) :
         (
            <>
               <div className={styles.displaycaroussel}>
                  <Carousel infiniteLoop showArrows={false} autoPlay className={styles.carousel} showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} >
                     {
                        sliders.map((item) => {
                           return (
                              <CarouselContent key={item.id} data={item} />
                           )
                        })
                     }
                  </Carousel>
               </div>

               {/* <div className={styles.separetedcontainer}>
            <div className={styles.separetedtop}>
               <div></div>
               <div>
                  <img style={{ width: "35%", height: "100%" }} src="assets/images/nike-black.png" alt="" />
               </div>
            </div>

            <div className={styles.separetedbottom}>
               <div className={styles.separetedbottomleft}></div>
               <div className={styles.separetedbottomright}>
                  <div className={styles.separetedbottomrighttop}></div>
                  <div className={styles.separetedbottomrightbottom}></div>
               </div>
            </div>
         </div> */}
            </>
         )
   );
};

export default CustomCaroussel;

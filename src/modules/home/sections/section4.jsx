import React from "react";
import { FlashOn } from "@mui/icons-material";
import SectionWrapper from "../../../components/wrappers/section";
import ServiceCategory from "../../../components/cards/category_service_card";
import { useSelector } from "react-redux";

const Section4 = () => {

    const s_categories = useSelector((state) => state.servicecategory);  // service_categories

    return (
        <SectionWrapper title="Services" Icon={FlashOn} gridWidth={150} name="section4">
            {
                s_categories.data.map((service, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ServiceCategory service={service} />
                        </React.Fragment>
                    );
                })
            }
        </SectionWrapper>
    );

}
export default Section4;
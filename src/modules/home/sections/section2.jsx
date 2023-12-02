import React from "react";
import { FlashOn } from "@mui/icons-material";
import SectionWrapper from "../../../components/wrappers/section";
import CategoryCard from "../../../components/cards/category_cart";
import { useSelector } from "react-redux";

const Section2 = () => {

    const categories = useSelector((state) => state.category);

    return (
        <SectionWrapper title="Catégories" Icon={FlashOn} gridWidth={150} name="section2">
            {
                categories && categories.data.map(category => {
                    return (
                        <React.Fragment key={category.id}>
                            <CategoryCard category={category} />
                        </React.Fragment>
                    );
                })
            }
        </SectionWrapper>
    );

}
export default Section2;
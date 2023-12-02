import React from "react";
import { useSelector } from "react-redux";
import { FlashOn } from "@mui/icons-material";
import SectionWrapper from "../../../components/wrappers/section";
import ProductCard from "../../../components/cards/product";


const Section1 = () => {

    const products = useSelector((state) => state.product);

    return (
        <SectionWrapper title="Flash deals" Icon={FlashOn} gridWidth={230} name="section1">
            {
                products && products.data.slice(0, 10).map(product => {
                    return (
                        <React.Fragment key={product.id}>
                            <ProductCard to="search" data={product} />
                        </React.Fragment>
                    );
                })
            }
        </SectionWrapper>
    );
}

export default Section1;
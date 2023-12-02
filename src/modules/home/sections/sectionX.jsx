import React from "react";
import { useSelector } from "react-redux";
import { FlashOn } from "@mui/icons-material";
import SectionWrapper from "../../../components/wrappers/section";
import ProductCard from "../../../components/cards/product";


const SectionX = () => {

    const sections = useSelector((state) => state.section);

    return sections && sections.data.map(section =>
        <SectionWrapper key={section.title} title={section.title} gridWidth={230} name={section.title.replace(/\s/g, '')}>
            {
                section && section.content && section.content.map(product => {
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

export default SectionX;
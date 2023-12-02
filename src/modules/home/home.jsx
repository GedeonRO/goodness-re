import React, { useState, useEffect } from "react";
import CustomCaroussel from "../../components/slider/old/caroussel";
import SectionsIndex from "./sections/index";
import { apiGetBrands, apiGetCategories, apiGetClient1, apiGetClient2, apiGetItems, apiGetProducts, apiGetSections, apiGetServiceCategory, apiGetServices, apiGetSubCategories } from "../../app/api/controller";
import { useDispatch } from 'react-redux';
import { initialize } from "../../app/reducers/category_reducer";
import { initProducts } from "../../app/reducers/product_reducer";
import { inititems } from "../../app/reducers/item_reducer";
import { initsubs } from "../../app/reducers/subcategory_reducer";
import { CircularProgress } from "@mui/material";
import Slider from "../../components/slider/slider";
import { initservices } from "../../app/reducers/service_reducer";
import { initservicecategory } from "../../app/reducers/service_category_reducer";
import { initbrands } from "../../app/reducers/brand_reducer";
import { utilsCategoryProducts } from "../../app/utils/utils";
import { initsections } from "../../app/reducers/section_reducer";


const Home = () => {

    // Dispatch actions
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    // onInit
    useEffect(() => {
        getall();
        window.scrollTo({ top: 0 });
    }, []);

    //
    const getall = async () => {
        setLoading(true);
        await clientHome1();
        setLoading(false);
        clientHome2();
    }

    // client web 2
    const clientHome1 = async () => {
        const result = await apiGetClient1();
        if (!result) {
            throw "Erreur interne"
        } else {
            // dispatch(initProducts(result.data));
            dispatch(initProducts(result.data.products));
            dispatch(initservices(result.data.services));
            dispatch(initservicecategory(result.data.cservices));
            dispatch(initsections(result.data.sections));
        }
    }


    // client web 2
    const clientHome2 = async () => {
        const result = await apiGetClient2();
        if (!result) {
            throw "Erreur interne"
        } else {
            dispatch(initialize(result.data.categories));
            dispatch(initsubs(result.data.subcategories));
            dispatch(inititems(result.data.items));
            dispatch(initbrands(result.data.brands));
        }
    }

    return (
        loading ? (
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress />
            </div>
        )
            : (
                <>
                    <Slider />
                    {/* <CustomCaroussel /> */}
                    <SectionsIndex />
                </>
            )
    )

}

export default Home;
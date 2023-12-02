import React, { useEffect, useState } from "react";
import styles from "./Searcscreen.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard1 from "../../components/cards/product_card1";
import ProductCard from "../../components/cards/product";
import { Filter, Money, TrashCan } from "@carbon/icons-react";
import CustomInput from "../../components/forms/input";
import CustomSelectInput from "../../components/forms/select_input";
import CustomButton from "../../components/buttons/button";
import { utilsArrayConstruct } from "../../app/utils/utils";
import { apiGetCategoryProducts } from "../../app/api/controller";
import { CircularProgress } from "@mui/material";


const data = {
    minprice: 0,
    maxprice: 0,
    brand: "",
    category: ""
}

const Searchscreen = () => {

    const [activeCategory, setActiveCategory] = useState("");
    const [activeBrands, setActiveBrands] = useState("");
    const [filterData, setFilterData] = useState(data);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);


    const location = useLocation().state;
    const products = useSelector((state) => state.product);
    const categories = useSelector(state => state.category);
    const brands = useSelector(state => state.brand);

    const { searchtype, value, key, acategory } = location;

    // useEffect(() => {
    //     let result = [];
    //     // searchResult.map((pdt) => {
    //     //     result.push(pdt["brand_data"])
    //     // });
    //     setSearchResult(searchResult);
    //     // console.log(searchResult);
    // }, [searchResult])

    useEffect(() => {
        if (searchtype == "cpdcts") handleFilterevent(acategory);
    }, [activeCategory])

    useEffect(() => {
        window.scrollTo({ top: 0 })
        setActiveCategory("");
        if (searchtype == "pdcts") {
            let pdts = products.data.filter((product) => product.name.toLowerCase().indexOf(value.toLowerCase()) != -1);
            setSearchResult(pdts);
        } else {
            let productsWithItem = products.data.filter((product) => product.item == key);
            if (productsWithItem) {
                setSearchResult(productsWithItem);
            }
        }
    }, [key, value]);

    const handleInputChange = (e) => {
        setFilterData({ ...filterData, [e.target.id]: e.target.value });
    }

    const handleFilterevent = async (cat = activeCategory) => {
        setLoading(true);
        let pdts = await apiGetCategoryProducts(cat);
        let result = [];
        if (filterData.maxprice == 0) {
            setSearchResult(pdts.data);
        } else {
            if ((filterData.maxprice && filterData.minprice <= filterData.maxprice)) {
                console.log("Ici 2")
                result = pdts.data.filter((pdt) => (parseFloat(pdt.price) >= parseFloat(filterData.minprice)) && (parseFloat(pdt.price) <= parseFloat(filterData.maxprice)));
                if (result) {
                    setSearchResult(result);
                } else { setSearchResult([]) }
            }

        }
        setLoading(false);
    }

    return (
        <div className={styles.searchscreenwrapper}>
            <div className={styles.searchinfowrapper}>
                <div>
                    <div className={styles.searchinfotitle}>
                        <h5>Rechercher " {value} " dans les " {searchtype == "pdcts" ? "Produits" : searchtype} "</h5>
                    </div>
                    <div style={{ marginTop: 12 }}>
                        <span className={styles.searchinforesult}> {searchResult.length} resultat(s) </span>
                    </div>
                </div>
            </div>

            <div className={styles.searchcontent}>
                <div className={styles.searchfilter}>
                    <div className={styles.searchfiltertitle}>
                        <h3 style={{ display: "flex", alignItems: "center" }}> <Filter size={22} /> <span style={{ marginLeft: 4 }}>Filtrer par</span></h3>
                        <TrashCan onClick={() => setSearchResult(products.data)} cursor="pointer" color="red" size={22} />
                    </div>
                    <div className={styles.filtercontent}>

                        <div className={styles.filterbutton}>
                            <CustomButton title="Filter" onClick={handleFilterevent} />
                        </div>

                        <div className={styles.filterperprice}>
                            <h4> <span>Prix</span> </h4>
                            <CustomInput id="minprice" onChange={(e) => handleInputChange(e)} value={filterData.minprice} placeholder="min" type="number" label="Minimal" />
                            <CustomInput id="maxprice" onChange={(e) => handleInputChange(e)} value={filterData.maxprice} placeholder="max" type="number" label="Maximal" />
                        </div>
                        <div className={styles.category}>
                            <h4> <span>Catégorie de produit</span> </h4>
                            <CustomSelectInput
                                onChange={(e) => setActiveCategory(e.target.value)}
                                options={[{ label: 'Sélectionner une catégorie', value: "" }].concat(utilsArrayConstruct(categories.data))}
                            />
                        </div>
                        <div className={styles.filterbrands}>
                            <h4> <span>Marque de produit</span> </h4>
                            <CustomSelectInput
                                onChange={(e) => setActiveBrands(e.target.value)}
                                options={[{ label: 'Sélectionner une marque', value: "" }].concat(utilsArrayConstruct(brands.data))}
                            />
                        </div>
                    </div>
                </div>

                {
                    loading ? (
                        <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%", justifyContent: "center" }}>
                            <CircularProgress />
                        </div>
                    )
                        : (searchResult.length > 0) ? (
                            <div className={styles.searchresults}>
                                {searchResult.map((product) => {
                                    return (
                                        <div style={{ marginBottom: 22, display: "flex" }}>
                                            <ProductCard to="search" data={product} />
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div style={{ display: "grid", flexDirection: "column", alignItems: "center", margin: "10rem auto", justifyContent: "center", justifyItems: "center" }}>
                                <img src="assets/images/not_found.png" style={{ width: 100 }} />
                                <div style={{ margin: 12, fontSize: 17 }}> Aucun resultat </div>
                            </div>
                        )
                }

                {/* <div className={styles.searchnoresults}>

                </div>
                <div className={styles.searchresults}>
                    {
                        searchResult.length > 0 ? searchResult.map((product) => {
                            return (
                                <div style={{ marginBottom: 22, display: "flex" }}>
                                    <ProductCard to="search" data={product} />
                                </div>
                            )
                        }) : (
                            <div style={{ display: "grid", flexDirection: "column", alignItems: "center", margin: "10rem auto", justifyContent: "center", justifyItems: "center", border: "1px solid" }}>
                                <img src="assets/images/not_found.png" style={{ width: 100 }} />
                                <div style={{ margin: 12, fontSize: 17 }}> Rien à afficher </div>
                            </div>
                        )
                    }
                </div> */}
            </div>

            {/* <div className={styles.searchresult} >
            </div> */}
        </div >
    );
}

export default Searchscreen;
import React, { useRef } from "react";
import styles from "./Card.module.css";
import CustomInput from "../../components/forms/input";
import ButtonNoBackground from "../../components/buttons/button_no_bg";
import { useSelector } from "react-redux";
import { StandaloneSearchBox } from "@react-google-maps/api";
import RadioBox from "../../components/forms/radio";
import { useEffect } from "react";
import { arrayNotEmptyVerification } from "../../app/utils/utils";
import MapPicker from "./maps";


const CartDetailStep2 = ({ validation, data, handleChange }) => {

    let autocompleteInputRef = useRef();
    const cart = useSelector((state) => state.cart);

    const handlePlaceChange = async () => {
        const [place] = autocompleteInputRef.current.getPlaces();
        if (place) { handleChange(place, 'location') }
    }

    const handleInputChange = (e) => {
        handleChange(e, 'other');
    }

    const handleValidation = (data) => {
        if (data.deliverytype == "retrait") {
            validation(true);
        } else {
            const { username, userphone, mapaddress } = data;
            const values = [username, userphone, mapaddress];
            if (arrayNotEmptyVerification(values)) {
                validation(true)
            } else {
                validation(false)
            };
        }
    }

    useEffect(() => {
        handleValidation(data);
    }, [data])


    //
    return (
        <>
            <div className={`${styles.contentleftwrapper} ${styles.movetotop}`}>
                <div className={styles.contentlefttopcontainer}>
                    <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                        <RadioBox id="deliverytype" name="deliverytype" value="livraison" onChange={(e) => handleInputChange(e)} checked={data.deliverytype == "livraison"} />
                        <span className={styles.cartleftlisttitle}>Livraison</span>
                    </div>

                    {
                        (data.deliverytype == "livraison") && (
                            <div style={{ marginTop: 16 }}>
                                <div className={styles.inputformflexcontainer}>
                                    <CustomInput placeholder="John Doe" label="Nom complet" id="username" value={data.username} onChange={(e) => handleInputChange(e)} />
                                    <div className={styles.horizontaldivider}></div>
                                    <CustomInput isOptional placeholder="Ex: user@gmail.com" label="Adresse mail" id="useremail" value={data.useremail} onChange={(e) => handleInputChange(e)} />
                                </div>

                                <div className={styles.inputformflexcontainer}>
                                    <CustomInput placeholder="Ex: 92345490" label="Numéro de téléphone" id="userphone" value={data.userphone} onChange={(e) => handleInputChange(e)} />
                                    <div className={styles.horizontaldivider}></div>

                                    <div style={{ width: "100%" }}>
                                        <StandaloneSearchBox
                                            onLoad={ref => (autocompleteInputRef.current = ref)}
                                            onPlacesChanged={() => handlePlaceChange()}
                                        >
                                            <CustomInput
                                                id="mapaddress"
                                                // disable={data.mapaddress}
                                                autocomplete
                                                onChange={() => { }}
                                                label="Adresse de livraison"
                                                placeholder="Ex: Lomé, Pharmacie logopé"
                                            />
                                        </StandaloneSearchBox>
                                        <div onClick={() => console.log("first")}>Click !</div>
                                        {/* <MapPicker /> */}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* <div className={styles.contentleftbottomcontainer}> */}
                <div className={styles.contentlefttopcontainer}>
                    <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                        <RadioBox id="deliverytype" name="deliverytype" value="expedition" onChange={(e) => handleInputChange(e)} checked={data.deliverytype == "expedition"} />
                        <span className={styles.cartleftlisttitle}>Expédition</span>
                    </div>
                    {
                        (data.deliverytype == "expedition") && (
                            <div style={{ marginTop: 16, }}>
                                <div className={styles.inputformflexcontainer}>
                                    <CustomInput placeholder="John Doe" label="Nom complet" id="username" value={data.username} onChange={(e) => handleInputChange(e)} />
                                    <div className={styles.horizontaldivider}></div>
                                    <CustomInput isOptional placeholder="Ex: user@gmail.com" label="Adresse mail" id="useremail" value={data.useremail} onChange={(e) => handleInputChange(e)} />
                                </div>

                                <div className={styles.inputformflexcontainer}>
                                    <CustomInput placeholder="Ex: 92345490" label="Numéro de téléphone" id="userphone" value={data.userphone} onChange={(e) => handleInputChange(e)} />
                                    <div className={styles.horizontaldivider}></div>
                                    <div style={{ width: "100%" }}>
                                        <StandaloneSearchBox
                                            bounds={{
                                                north: 11.1389969,
                                                south: 6.1042571,
                                                east: 1.8085471,
                                                west: -0.1478865,
                                            }}
                                            onLoad={ref => (autocompleteInputRef.current = ref)}
                                            onPlacesChanged={() => handlePlaceChange("sUseraddress")}
                                        >
                                            <CustomInput
                                                id="sUseraddress"
                                                autocomplete
                                                label="Adresse d'expédition"
                                                onChange={() => { }}
                                                placeholder="Ex: Lomé, Pharmacie logopé"
                                            />
                                        </StandaloneSearchBox>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className={styles.contentlefttopcontainer}>
                    <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                        <RadioBox id="deliverytype" name="deliveryType" value="retrait" onChange={(e) => handleInputChange(e)} checked={data.deliverytype == "retrait"} />
                        <span className={styles.cartleftlisttitle}>Retrait en magasin</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.contentrightwrapper}`}>
                <div className={styles.carttotalprice}>
                    <span className={styles.carttotalpricetext}> Sous total </span>
                    <span className={styles.carttotalpricevalue}> {cart && cart.total} </span>
                </div>
                <div className={styles.carttotalprice}>
                    <span className={styles.carttotalpricetext}> Livraison </span>
                    <span className={styles.carttotalpricevalue}> ... </span>
                </div>
                <div className={styles.carttotalprice}>
                    <span className={styles.carttotalpricetext}> Rabais </span>
                    <span className={styles.carttotalpricevalue}> 0.00 </span>
                </div>

                <hr style={{ margin: 20 }} />

                <div style={{ textAlign: "right" }}>
                    <span className={styles.lasttotalpricetext}> {cart && cart.total}  </span> <span>XOF</span>
                </div>

                {
                    !(data.deliverytype == "retrait") && (
                        <>
                            <hr style={{ marginTop: 30 }} />
                            <div style={{ display: "flex", margin: "16px 0", columnGap: 8, alignItems: "center" }}>
                                <span className={styles.cartleftlisttitle}>Estimation prix de la livraison</span>
                            </div>

                            <div>
                                <CustomInput label="Country" placeholder="Indiquer le pays de livraison" />
                                <CustomInput label="Adresse" />
                                <ButtonNoBackground title="Calculer" />
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
}

export default CartDetailStep2;
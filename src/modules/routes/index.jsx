import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Wrappers from "../../components/wrappers";
import ProductDetail from "../product/product_detail";
import CartIndex from "../cart";
import Searchscreen from "../search/search";
import ProfileIndex from "../profile";
import SignUp from "../auth/signup";
import SignIn from "../auth/signin";
import Services from "../services";
import ServiceDescription from "../services/service_description";



export default function Navigation() {

    return (
        <Routes>
            <Route path='/' element={<Wrappers />}>

                {/* Accueil */}
                <Route path="/" element={<Home />} />

                {/* Products */}
                <Route path="/product/:pid" element={<ProductDetail />} />
                {/* <Route path="/product">
                </Route>
                <Route path="/product/:pid" element={<ProductDetail />} /> */}

                {/* Panier */}
                <Route path="/cart" element={<CartIndex />} />

                {/* Recherche */}
                <Route path="/search" element={<Searchscreen />} />

                {/* Profile */}
                <Route path="/profile" element={<ProfileIndex />} />
                

                {/* Inscription */}
                <Route path="/signup" element={<SignUp />} />
                {/* Connexion */}
                <Route path="/signin" element={<SignIn />} />

                {/* Services */}
                <Route path="/services" element={<Services />} />
                <Route path="/service" element={<ServiceDescription />} />

            </Route>
        </Routes>
    );
}
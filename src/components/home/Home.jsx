import React, { useEffect } from "react";
import Benefit from "./Benefit/Benefit";
import Bestseller from "./Bestseller/Bestseller";
import Category from "./Category/Category";
import Productlist from "./Productlist/Productlist";
import MainLayout from "../MainLayout";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <Benefit />
            <Bestseller />
            <Category />
            <Productlist />
        </MainLayout>
    );
};

export default Home;

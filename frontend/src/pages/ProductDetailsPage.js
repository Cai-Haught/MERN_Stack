import ProductDetailsPageComponent from "./components/ProductDetailsPageComponent";
import {addToCart} from "../redux/actions/cartActions";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

const ProductDetailsPage = () => {
    const dispatch = useDispatch()

    return (
        <ProductDetailsPageComponent addToCartReduxAction={addToCart} reduxDispatch={dispatch}/>
    );
};

export default ProductDetailsPage;
import CreateProductPageComponent from "./components/CreateProductPageComponent";
import { uploadImagesApiRequest, uploadImagesCloudinaryApiRequest } from "./utils/utils";
import axios from "axios"
import {useSelector, useDispatch} from "react-redux";
import { newCategory } from "../../redux/actions/categoryActions";

const createProductApiRequest = async (formInputs) => {
    const {data} = await axios.post(`/api/products/admin`, {...formInputs})
    return data
} 
const AdminCreateProuctPage = () => {
    const {categories} = useSelector((state) => state.getCategories)
    const dispatch = useDispatch()
    return (
        <CreateProductPageComponent createProductApiRequest={createProductApiRequest} uploadImagesApiRequest={uploadImagesApiRequest} uploadImagesCloudinaryApiRequest={uploadImagesCloudinaryApiRequest} categories={categories} reduxDispatch={dispatch} newCategory={newCategory}/>
    );
};

export default AdminCreateProuctPage;
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const getAllProducts = () => axios.get(`${BASE_URL}/products/`);
export const getSingleProduct = (id: number) => axios.get(`${BASE_URL}/products/${id}/`);
export const getAllCategories = () => axios.get(`${BASE_URL}/products/category/`);
export const getProductsByCategory = (category: string) => axios.get(`${BASE_URL}/products/category/${category}/`);
export const getCartDetails = () => axios.get(`${BASE_URL}/cart/`);
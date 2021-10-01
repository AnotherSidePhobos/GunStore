import axios from "axios"

export const fetchPhonesApi = (currentPage, pageSize) => {
    return axios.get(`http://localhost:3007/products?_page=${currentPage}&_limit=${pageSize}`)
    .then(response => response.data)
}
export const fetchPhonesCount = () => {
    return axios.get(`http://localhost:3007/products`)
    .then(response => response.data)
}
export const fetchPhoneById = (id) => {
    return axios.get(`http://localhost:3007/products/${id}`)
    .then(response => response.data)
}
export const fetchProductsByCategoryApi = (categoryId) => {
    debugger
    return axios.get(`http://localhost:3007/products?categoryId=${categoryId}`)
    .then(response => response.data)
}
export const fetchPhonesCountByCat = (categoryId) => {
    return axios.get(`http://localhost:3007/products?categoryId=${categoryId}`)
    .then(response => response.data)
}
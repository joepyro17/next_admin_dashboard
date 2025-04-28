import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const fetchStats = async () => {
    const response = await api.get('/stats')
    return response.data;
}

export const fetchUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const createUser = async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const updateUser = async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const createProduct = async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const updateProduct = async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
};

export default api;
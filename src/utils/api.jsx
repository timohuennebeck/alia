import axios from "axios";

const base_url = "http://localhost:8080";

export const getUsers = () => {
    return axios.get(`${base_url}/users`);
};

export const getPosts = () => {
    return axios.get(`${base_url}/posts`);
};

export const getPostsId = ({ id }) => {
    return axios.get(`${base_url}/posts/${id}`);
};

export const getHubs = () => {
    return axios.get(`${base_url}/hubs`);
};

export const getHubsId = ({ id }) => {
    return axios.get(`${base_url}/hubs/${id}`);
};
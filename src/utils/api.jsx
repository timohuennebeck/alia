import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// users

export const getUsers = () => {
    return axios.get(`${API_URL}/users`);
};

export const getUsersId = ({ id }) => {
    return axios.get(`${API_URL}/users/${id}`);
};

// posts

export const getPosts = () => {
    return axios.get(`${API_URL}/posts`);
};

export const getPostsId = ({ id }) => {
    return axios.get(`${API_URL}/posts/${id}`);
};

// hubs

export const getHubs = () => {
    return axios.get(`${API_URL}/hubs`);
};

export const getHubsId = ({ id }) => {
    return axios.get(`${API_URL}/hubs/${id}`);
};

// files

export const getFiles = () => {
    return axios.get(`${API_URL}/files`);
};

export const getFilesId = ({ id }) => {
    return axios.get(`${API_URL}/files/${id}`);
};

// files

export const getMeetings = () => {
    return axios.get(`${API_URL}/meetings`);
};

export const getMeetingsId = ({ id }) => {
    return axios.get(`${API_URL}/meetings/${id}`);
};

// events

export const getEvents = () => {
    return axios.get(`${API_URL}/events`);
};

export const getEventsId = ({ id }) => {
    return axios.get(`${API_URL}/events/${id}`);
};

// events

export const getComments = () => {
    return axios.get(`${API_URL}/comments`);
};

export const getCommentsId = ({ id }) => {
    return axios.get(`${API_URL}/comments/${id}`);
};

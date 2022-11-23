import axios from "axios";

const base_url = "http://localhost:8080";

// users

export const getUsers = () => {
    return axios.get(`${base_url}/users`);
};

export const getUsersId = ({ id }) => {
    return axios.get(`${base_url}/users/${id}`);
};

// posts

export const getPosts = () => {
    return axios.get(`${base_url}/posts`);
};

export const getPostsId = ({ id }) => {
    return axios.get(`${base_url}/posts/${id}`);
};

// hubs

export const getHubs = () => {
    return axios.get(`${base_url}/hubs`);
};

export const getHubsId = ({ id }) => {
    return axios.get(`${base_url}/hubs/${id}`);
};

// files

export const getFiles = () => {
    return axios.get(`${base_url}/files`);
};

export const getFilesId = ({ id }) => {
    return axios.get(`${base_url}/files/${id}`);
};

// files

export const getMeetings = () => {
    return axios.get(`${base_url}/meetings`);
};

export const getMeetingsId = ({ id }) => {
    return axios.get(`${base_url}/meetings/${id}`);
};

// events

export const getEvents = () => {
    return axios.get(`${base_url}/events`);
};

export const getEventsId = ({ id }) => {
    return axios.get(`${base_url}/events/${id}`);
};

// events

export const getComments = () => {
    return axios.get(`${base_url}/comments`);
};

export const getCommentsId = ({ id }) => {
    return axios.get(`${base_url}/comments/${id}`);
};

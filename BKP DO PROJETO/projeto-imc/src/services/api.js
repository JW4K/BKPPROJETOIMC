import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:5000",
});

export const createSession = async (login, password) => {
    return api.post("/sessions", {login, password});
};

export const getUsers = async() => {
    return api.get("/users");
};
import fetchAPI from "/scripts/supporting/fetchAPI.js";

// Сървър с REST услуги:
fetchAPI.settings.host = "http://localhost:3030";

fetchAPI.settings.endpoints.registerUser = "/users/register";
fetchAPI.settings.endpoints.loginUser = "/users/login";
fetchAPI.settings.endpoints.logoutUser = "/users/logout";

fetchAPI.settings.endpoints.catalog = "/data/catalog";
fetchAPI.settings.endpoints.catalogQuery = ((userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`);

const registerUser = fetchAPI.registerUser;
const loginUser = fetchAPI.loginUser;
const logoutUser = fetchAPI.logoutUser;

async function createFurniture(data) {
    return await fetchAPI.postRequest(fetchAPI.settings.endpoints.catalog, data);
}

async function getAllFurniture() {
    return await fetchAPI.getAllRequest(fetchAPI.settings.endpoints.catalog);
}

async function getFurnitureByID(id) {
    return await fetchAPI.getOneRequestByID(fetchAPI.settings.endpoints.catalog, id);
}

async function updateFurniture(id, data) {
    return await fetchAPI.putRequest(fetchAPI.settings.endpoints.catalog, id, data);
}

async function deleteFurniture(id) {
    return await fetchAPI.deleteRequest(fetchAPI.settings.endpoints.catalog, id);
}

async function getAllMyFurniture(id) {
    return await fetchAPI.getAllRequest(fetchAPI.settings.endpoints.catalogQuery(id));
}

export default {
    registerUser,
    loginUser,
    logoutUser,
    createFurniture,
    getAllFurniture,
    getFurnitureByID,
    updateFurniture,
    deleteFurniture,
    getAllMyFurniture
}
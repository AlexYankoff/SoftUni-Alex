import * as api from './api.js'

//SET HOST HERE
const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement  application-specific requests
export async function getAll() { //OK!
    return await api.get(host+'/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');     
}

export async function getItemById(id) { //OK!
    return await api.get(host+'/data/ideas/'+id)
}

export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId')
    return await api.get(host+`/data/catalog?where=_ownerId%3D%22${userId}%22`)
}

export async function createRecord(data) {
    return await api.post(host+'/data/catalog', data) 
    
}


export async function deleteRecord(id) {
    return await api.del(host+'/data/catalog/'+id);
}
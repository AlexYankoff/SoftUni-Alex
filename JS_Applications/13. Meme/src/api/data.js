import * as api from './api.js'

//SET HOST HERE
const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement  application-specific requests
export async function getItem() { //OK, tested
    return await api.get(host+'/data/memes?sortBy=_createdOn%20desc'); 
}

export async function getItemById(id) { //OK, tested
    return await api.get(host+'/data/memes/'+id)
}

export async function getMy() {
    const userId = sessionStorage.getItem('userId')
    return await api.get(host+`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function createRecord(data) {
    return await api.post(host+'/data/memes', data) 
    
}

export async function editRecord(id, data) {
    return await api.put(host+'/data/memes/'+id, data);
}

export async function deleteRecord(id) {
    return await api.del(host+'/data/memes/'+id);
}
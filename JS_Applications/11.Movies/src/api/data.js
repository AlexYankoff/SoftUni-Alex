import * as api from './api.js'

//SET HOST HERE
const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement  application-specific requests
export async function getItem() {  //OK, tested
    return await api.get(host+'/data/movies'); 
}

export async function getItemById(id) {///OK, tested
    return await api.get(host+'/data/movies/'+id) 
}

export async function getMy() { //??? не го видях в заданието
    const userId = sessionStorage.getItem('userId')
    return await api.get(host+`/data/catalog?where=_ownerId%3D%22${userId}%22`)
}

export async function createRecord(data) { //OK
    return await api.post(host+'/data/movies', data) 
    
}

export async function editRecord(id, data) {
    return await api.put(host+'/data/catalog/'+id, data);
}

export async function deleteRecord(id) {
    return await api.del(host+'/data/catalog/'+id);
}
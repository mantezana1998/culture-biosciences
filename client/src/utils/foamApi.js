const BASE_URL = '/api';

export function create(id){
    return fetch(`${BASE_URL}/foam/${id}/foamOrNot`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function deleteFoam(id){
    return fetch(`${BASE_URL}/foamOrNot/${id}/`, { 
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
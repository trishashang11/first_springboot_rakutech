import local from './local';


const fetchApi = () =>{

    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> resolve(json))
        .catch(e => reject(e))
    })
}
export default fetchApi;

export const getById = (id) =>{
    return new Promise((resolve, reject) => {
        fetch(`https://fakestoreapi.com/products/${id}/`)
        .then(res=>res.json())
        .then(json=>resolve(json))
        .catch(e => reject(e))
    })
}

export const addUser = async (obj) =>{
    const load = JSON.stringify(obj);
    const response = await fetch(`${local.api}/user`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:load
    });
    return response.json();
}

export const getUser = async (obj) =>{
    const load = JSON.stringify(obj);
    const response = await fetch(`${local.api}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:load
    });
    return response.json();
}

export const checkAcc = async (obj) =>{
    const load = JSON.stringify(obj);
    const response = await fetch(`${local.api}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:load
    });
    return response.json();
}



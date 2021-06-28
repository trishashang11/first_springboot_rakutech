
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
 
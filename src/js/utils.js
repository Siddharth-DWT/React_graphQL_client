
const prepareOptions =(selected ={}) =>{
    return {variables: { productDetailsId: Object.values(selected)}}
};

export {
    prepareOptions
}
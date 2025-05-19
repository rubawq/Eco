
export const getProduct = async()=>{
try{
const response = await fetch("https://fakestoreapi.com/products");
if(!response.ok) throw new Error("faild to fetch");
const data  = await response.json ();
return data;
}catch(Error){
throw Error;
}
};
// productList interface
export interface ProductList {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
// this fetch is to get the product list data
const getProductList = async () => {
  "use server";
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const productList = await res.json();
    return productList;
  } catch (error) {
    console.log(error);
  }
};

export default getProductList;

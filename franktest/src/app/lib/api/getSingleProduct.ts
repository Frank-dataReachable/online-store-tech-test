/**
 * @file this file is the get the single product
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */

import { mainDomain } from "@/app/lib/api/mainDomain";

/**
 * this is the single product interface
 * @property {number} id the id of the product
 * @property {string} title the title of the product
 * @property {price} number the price of the product
 * @property {string} description the detail descrption of the product
 * @property {string} image the image src of the product
 * @property {{rate:number,count:number}[]} rating the rating is an object have 2 property the rate number of the product and the count number of totoal rating
 */
export interface SingleProduct {
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

/**
 * this fetch is to get the single product data
 * @param {number} id the id of the product
 * @returns {object} return the product list if success request
 */
const getSingleList = async (id: number) => {
  "use server";
  try {
    const res = await fetch(`${mainDomain}/products/${id}`);
    const productList = await res.json();
    return productList;
  } catch (error) {
    console.log(error);
  }
};

export default getSingleList;

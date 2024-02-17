/**
 * @file this file is the get the car information
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */

import { mainDomain } from "@/app/lib/api/mainDomain";

/**
 * this is the Cart Information interface
 * @property {number} id the id of the cart
 * @property {string} date the data of the cart update
 * @property {{productId:number,quantity:number}[]} products the products in the cart is an array
 * @property {__v} number the version of the cart
 */
export interface CartInfo {
  id: number;
  date: string;
  products: { productId: number; quantity: number }[];
  __v: number;
}
/**
 * this fucntion is to get the cart info, here is the sample for cart 2
 * @param {number} id the id of the cart
 */
const getCartInfo = async (id: number) => {
  "use server";
  try {
    const res = await fetch(`${mainDomain}/carts/${id}`);
    const cartInfo = await res.json();
    return cartInfo;
  } catch (error) {
    console.log(error);
  }
};

export default getCartInfo;

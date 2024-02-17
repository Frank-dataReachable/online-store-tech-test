/**
 * @file this file is to update the cart
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import { mainDomain } from "@/app/lib/api/mainDomain";

/**
 * this functioni is to add a new product to the cart, it will only add 1 item to the cart
 * @param {number} id the id of the added item
 */
const updateCart = async (id: number) => {
  "use server";
  try {
    const res = await fetch(`${mainDomain}/carts/7`, {
      method: "PUT",
      body: JSON.stringify({
        userId: 3,
        date: 2019 - 12 - 10,
        products: [{ productId: id, quantity: 1 }],
      }),
    });
    // const result = await res.json();
    console.log(`you have success add item id:${id} into your cart `);
  } catch (error) {
    console.log(error);
  }
};

export default updateCart;

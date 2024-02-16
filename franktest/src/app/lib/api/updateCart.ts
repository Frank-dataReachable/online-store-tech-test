/**
 * this functioni is to add a new product to the cart, it will only add 1 item to the cart
 * @param {number} id the id of the added item
 * @return {}
 */
const updateCart = async (id: number) => {
  "use server";
  try {
    const res = await fetch("https://fakestoreapi.com/carts/7", {
      method: "PUT",
      body: JSON.stringify({
        userId: 3,
        date: 2019 - 12 - 10,
        products: [{ productId: id, quantity: 1 }],
      }),
    });
    const result = await res.json();
    console.log(`you have success add item id:${id} into your cart `);
  } catch (error) {
    console.log(error);
  }
};

export default updateCart;

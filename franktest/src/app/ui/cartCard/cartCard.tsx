/**
 * @file this is the cart cart component for the app
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */

import CartList from "@/app/ui/cartCard/cartList";
import { CartInfo } from "@/app/lib/api/getCartInfor";

/**
 * this is the cartCard interface
 * @property {}
 * @property {}
 * @property {}
 */
interface CartCardProps {
  cartInfo: CartInfo;
}
/**
 * this is the cart list component
 * @param {number} id the id of the product
 * @param {number} quantity the totaly quantity of the product
 * @returns {React.FC} a functional component for cart cart
 */
export default async function CartCard({ cartInfo }: CartCardProps) {
  return (
    <>
      {cartInfo.products.map((item) => {
        return (
          <CartList
            key={item.productId}
            id={item.productId}
            quantity={item.quantity}
          />
        );
      })}
    </>
  );
}

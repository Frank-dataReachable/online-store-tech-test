/**
 * @file this is the checkout page
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "./page.module.scss";
import CartCard from "@/app/ui/cartCard/cartCard";
import { XCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/app/ui/components/button/button";
import getCartInfo, { CartInfo } from "@/app/lib/api/getCartInfor";
import getSingleList, { SingleProduct } from "@/app/lib/api/getSingleProduct";
import CheckoutForm from "@/app/ui/checkoutForm/checkoutForm";
/**
 * this funciton will get the total price of the product in the cart
 * @param {CartInfo} cartinfo the cart information
 */
const totalPrice = async (cartInfo: CartInfo) => {
  let total = 0;
  for (let index = 0; index < cartInfo.products.length; index++) {
    const element = cartInfo.products[index];
    const getProductinfo: SingleProduct = await getSingleList(
      element.productId
    );
    total = total + getProductinfo.price * element.quantity;
  }
  return total;
};
/**
 * this is the checkout page file
 * @returns {React.FC} a functional component of checkout page
 */
export default async function Checkout() {
  const cartInfo: CartInfo = await getCartInfo(2);
  const getTotalPrice = await totalPrice(cartInfo);
  return (
    <div>
      <div className={style.Checkout_container__mask} />
      <div className={style.Checkout_wrapper}>
        <div className={style.Checkout_header}>
          <span>Checkout</span>
          <Link href="/product">
            <XCircle color="#707784" className={style.Checkout_close} />
          </Link>
        </div>
        <CheckoutForm />
        <CartCard cartInfo={cartInfo} />
        <p className={style.Checkout_totoal}>Order Summary:${getTotalPrice}</p>
        <Link href={"/product/confirmation"}>
          <Button
            w="315px"
            className={style.Checkout_button}
            btnType="secondary"
            content="Confirm Order"
            type="submit"
          />
        </Link>
      </div>
    </div>
  );
}

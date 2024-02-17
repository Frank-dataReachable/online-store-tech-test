/**
 * @file this is the cart page
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "@/app/product/cart/page.module.scss";
import CartCard from "@/app/ui/cartCard/cartCard";
import { XCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/app/ui/components/button/button";

/**
 * this is the cart page file
 * @returns {React.FC} a functional component
 */
export default function Cart() {
  return (
    <div>
      <div className={style.Cart_container__mask} />
      <div className={style.Cart_wrapper}>
        <div className={style.Cart_header}>
          <span>Cart</span>
          <Link href="/product">
            <XCircle color="#707784" className={style.Cart_close} />
          </Link>
        </div>
        <CartCard />
        <Link href={"/product/checkout"}>
          <Button
            w="315px"
            className={style.Cart_button}
            btnType="secondary"
            content="Checkout"
          />
        </Link>
      </div>
    </div>
  );
}

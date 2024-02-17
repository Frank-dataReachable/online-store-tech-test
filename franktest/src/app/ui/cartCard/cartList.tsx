/**
 * @file this is the cart list single component
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */

import style from "./cartList.module.scss";
import Image from "next/image";
import getSingleList, { SingleProduct } from "@/app/lib/api/getSingleProduct";
import { Trash2 } from "lucide-react";

/**
 * this is the interface for the cart list props
 * @property {number} id the id of the product
 * @property {number} quantity the totaly quantity of the product
 */
interface CartListProps {
  id: number;
  quantity: number;
}

/**
 * this is the cart list component
 * @param {number} id the id of the product
 * @param {number} quantity the totaly quantity of the product
 * @returns {React.FC} a functional component for cart list
 */
export default async function CartList({ id, quantity }: CartListProps) {
  const productInfo: SingleProduct = await getSingleList(id);
  return (
    <div className={style.Cartlist_wrapper}>
      <div className={style.Cartlist_left}>
        <Image
          src={productInfo.image}
          alt="Picture of the product"
          width={54}
          height={72}
        />
      </div>
      <div className={style.Cartlist_right}>
        <div>
          <span className={style.Cartlist_title}>{productInfo.title}</span>
          <div className={style.Cartlist_icon}>
            <Trash2
              size={20}
              color="#707784"
              className={style.Cartlist_right__icon}
            />
          </div>
        </div>
        <div>
          <span
            className={style.Cartlist_price}
          >{`$${productInfo.price}`}</span>
          <input
            className={style.Cartlist_right__input}
            defaultValue={quantity}
          />
        </div>
      </div>
    </div>
  );
}

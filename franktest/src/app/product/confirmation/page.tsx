/**
 * @file
 * @date 2024-02-17
 * @author
 * @lastModify  2024-02-17
 */
import style from "@/app/product/confirmation/page.module.scss";
import { XCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/app/ui/components/button/button";
/**
 * this is the confirmation page
 * @returns {React.FC} a functional component of confirmation
 */
export default function Confirmation() {
  return (
    <div>
      <div className={style.Confirm_container__mask} />
      <div className={style.Confirm_wrapper}>
        <div className={style.Confirm_header}>
          <span>Order Confirmation</span>
          <Link href="/product">
            <XCircle color="#707784" className={style.Confirm_close} />
          </Link>
        </div>
        <p>Thank you for your order!</p>
        <Link href={"/product"}>
          <Button
            w="315px"
            className={style.Confimr_button}
            btnType="confirm"
            content="Close"
          />
        </Link>
      </div>
    </div>
  );
}

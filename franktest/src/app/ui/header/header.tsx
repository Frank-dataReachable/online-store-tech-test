/**
 * @file this is the header component for the app
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "@/app/ui/header/header.module.scss";
import { Zap, ShoppingBag } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <div className={style.Header_wrapper}>
      <Link href={"/"}>
        <Zap className={style.Header_icon__zap} fill="#4F46E5" />
      </Link>
      <div className={style.Header_car__wrapper}>
        <Link href={"/product/cart"}>
          <ShoppingBag className={style.Header_icon__car} />
          <span className={style.Header_car__itemnumber}>x 4</span>
        </Link>
      </div>
    </div>
  );
}

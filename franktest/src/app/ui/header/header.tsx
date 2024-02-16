/**
 * @file this is the header component for the app
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "@/app/ui/header/header.module.scss";
import { Zap, ShoppingBag } from "lucide-react";
export default function Header() {
  return (
    <div className={style.Header_wrapper}>
      <Zap className={style.Header_icon__zap} fill="#4F46E5" />
      <div className={style.Header_car__wrapper}>
        <ShoppingBag className={style.Header_icon__car} />
        <a>x 4</a>
      </div>
    </div>
  );
}

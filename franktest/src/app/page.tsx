/**
 * @file this is the homepage for product show page
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "@/app/page.module.scss";
import getProductList, { ProductList } from "@/app/lib/api/getProductList";
import Button from "@/app/ui/components/button/button";
import Link from "next/link";

export default async function Home() {
  // this function is to get the product list
  const productList: ProductList[] = await getProductList();

  return (
    <div className={style.homepage_wrapper}>
      <h3>Enter The App</h3>
      <div>
        <Link href={"/product"}>
          <Button content="Enter" />
        </Link>
      </div>
    </div>
  );
}

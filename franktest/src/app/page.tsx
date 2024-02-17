/**
 * @file this is the homepage for product show page
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "@/app/page.module.scss";
import getProductList, { ProductListItem } from "@/app/lib/api/getProductList";
import Button from "@/app/ui/components/button/button";
import Link from "next/link";

/**
 * this the home page
 * @returns {React.FC} a functional component
 */
export default async function Home() {
  const productList: ProductListItem[] = await getProductList();

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

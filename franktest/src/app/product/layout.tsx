/**
 * @file this is the product show page layout
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import style from "@/app/product/page.module.scss";
import ProductCard from "@/app/ui/productCard/productCard";
import getProductList, { ProductListItem } from "@/app/lib/api/getProductList";

/**
 * this layout is the procution page layout
 * @param {ReactNode} children the children of this layout
 * @returns {React.FC} a functional component
 */
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productList: ProductListItem[] = await getProductList();
  return (
    <div className={style.product_wrapper}>
      <div className={style.product_list__wrapper}>
        <h3>Fake Products</h3>
        {productList.map((item) => {
          return (
            <ProductCard
              key={item.id}
              imgSrc={item.image}
              description={item.description}
              rating={item.rating.rate}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
      <div className={style.product_subpage__wrapper}>{children}</div>
    </div>
  );
}

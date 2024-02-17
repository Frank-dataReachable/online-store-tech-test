/**
 * @file this is the home page product card componet
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
import Button from "@/app/ui/components/button/button";
import style from "@/app/ui/productCard/productCard.module.scss";
import Image from "next/image";
import Rating from "@/app/ui/components/rating/rating";
import updateCart from "@/app/lib/api/updateCart";

/**
 * Product cart component interface
 * @property {string} imgSrc the image src of the product
 * @property {string} description the detail descrption of the product
 * @property {number} price the price of the product
 * @property {number} rating the rate of the product
 * @property {number} id the id of the product
 */
interface ProductCardProps {
  imgSrc?: string;
  description?: string;
  price?: number;
  rating?: number;
  id: number;
}
/**
 * this compont is for the production page's card only
 * @param {string} imgSrc image src to render the image
 * @param {string} description the description for the product
 * @param {number} price the price for the product
 * @param {number} rating the rate number for the product
 * @returns {React.FC} a functional component
 */
export default function ProductCard({
  imgSrc = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  description = "this is a sample for place holder",
  price = 11.5,
  rating = 3.8,
  id,
}: ProductCardProps) {
  return (
    <div className={style.Productcard_wrapper}>
      <div className={style.Productcard_image__wrapper}>
        <Image
          src={imgSrc}
          alt="Picture of the product"
          width={335}
          height={305}
        />
      </div>
      <p className={style.Productcard_description}>{description}</p>
      <div className={style.Productcard_priceNrating_wrapper}>
        <span>{`$${price}`}</span>
        <div>
          <Rating ratingNumber={rating} />
          <span className={style.Productcard_priceNrating_number}>
            {rating}
          </span>
        </div>
      </div>
      <form
        action={async () => {
          "use server";
          updateCart(id);
        }}
      >
        <Button
          w="336px"
          content="Add to Cart"
          className={style.Productcard_addbtn}
          type="submit"
        />
      </form>
    </div>
  );
}

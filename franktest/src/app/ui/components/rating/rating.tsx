/**
 * @file
 * @date 2024-02-16
 * @author
 * @lastModify  2024-02-16
 */
import { Star, StarHalf } from "lucide-react";
import style from "@/app/ui/components/rating/rating.module.scss";

// the rating props
interface RatingProps {
  ratingNumber?: number;
}

/**
 * this component will show the rating number, If the decimal part exceeds 0.5, it is calculated as half a star, otherwise it is calculated as an integer.
 * @param {number} ratingNumber this is a number for the rate
 * @return {}
 */
export default function Rating({ ratingNumber = 3.6 }: RatingProps) {
  const fullStarNumber = Math.floor(ratingNumber);
  const halfStarNumber = ratingNumber % 1;
  return (
    <div className={style.Rating_wrapper}>
      <div className={style.Rating_star}>
        <div className={style.Rating_unstar}>
          {Array.from({ length: 5 }, (index) => (
            <Star
              size={14}
              fill="#111"
              strokeWidth={0}
              key={`${index}ratingkey`}
            />
          ))}
        </div>
        <div className={`${style.Rating_unstar} ${style.Rating_started}`}>
          {Array.from({ length: fullStarNumber }, (index) => (
            <Star
              size={14}
              fill="yellow"
              strokeWidth={0}
              key={`${index}ratedkey`}
            />
          ))}
          {halfStarNumber >= 0.5 ? (
            <StarHalf size={14} fill="yellow" strokeWidth={0} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

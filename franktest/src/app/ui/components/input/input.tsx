/**
 * @file
 * @date 2024-02-16
 * @author
 * @lastModify  2024-02-16
 */
import style from "@/app/ui/components/input/input.module.scss";

// define the props type for the input
interface InputProps {
  w?: string;
  h?: string;
  name?: string;
  className?: string;
}

/**
 * this function is the input component function
 * @param {string} w width of the input, default '316px'
 * @param {string} h height of the input, default '42px'
 */
export default function Input({
  w = "316px",
  h = "42px",
  name = "content",
  className,
}: InputProps) {
  return (
    <input
      className={`${style.Input_common} ${className}`}
      style={{ width: w, height: h }}
      name={name}
    />
  );
}

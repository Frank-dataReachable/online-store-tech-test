/**
 * @file this is the checkout page form client component
 * @date 2024-02-17
 * @author Frank Su
 * @lastModify Frank Su 2024-02-17
 */
"use client";
import Input from "@/app/ui/components/input/input";
import style from "@/app/ui/checkoutForm/checkoutForm.module.scss";
import z from "zod";
import { checkoutSchema } from "@/app/lib/schema/checkoutSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
/**
 * this is the checkout form comoponent
 * @returns {React.FC} a functional component
 */
type FormData = z.infer<typeof checkoutSchema>;
export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(checkoutSchema),
  });
  /**
   * handle data submit in here just login into browser to see the data
   */
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form
      className={style.Checkoutform_wrapper}
      onSubmit={handleSubmit(onSubmit)}
      id="checkoutform"
    >
      <label className={style.checkoutform_title}>Shipping Information</label>
      <label className={style.checkoutform_lable}>Email</label>
      <input
        className={style.checkoutform_input}
        {...register("email")}
        onBlur={handleSubmit(onSubmit)}
      />
      <p className={style.checkoutform_error}>{errors.email?.message}</p>
      <label className={style.checkoutform_lable}>Name</label>
      <input
        className={style.checkoutform_input}
        {...register("shippingname")}
        onBlur={handleSubmit(onSubmit)}
      />
      <p className={style.checkoutform_error}>{errors.shippingname?.message}</p>
      <label className={style.checkoutform_lable}>Address</label>
      <input
        className={style.checkoutform_input}
        {...register("address")}
        onBlur={handleSubmit(onSubmit)}
      />
      <p className={style.checkoutform_error}>{errors.address?.message}</p>
      <label className={style.checkoutform_divideline} />
      <label className={style.checkoutform_title}>Payment</label>
      <label className={style.checkoutform_lable}>Card Number</label>
      <input
        className={style.checkoutform_input}
        {...register("cardNumber", { valueAsNumber: true })}
        onBlur={handleSubmit(onSubmit)}
      />
      <p className={style.checkoutform_error}>{errors.cardNumber?.message}</p>
      <label className={style.checkoutform_lable}>Name</label>
      <input
        className={style.checkoutform_input}
        {...register("name")}
        onBlur={handleSubmit(onSubmit)}
      />
      <p className={style.checkoutform_error}>{errors.name?.message}</p>
      <label className={style.checkoutform_expiry}>Expiry(MM/YY)</label>
      <label className={style.checkoutform_cvc}>CVC</label>
      <input
        className={style.checkoutform_expiry__input}
        {...register("expiry")}
        onBlur={handleSubmit(onSubmit)}
      />
      <input
        className={style.checkoutform_cvc__input}
        {...register("cvc", { valueAsNumber: true })}
        onBlur={handleSubmit(onSubmit)}
      />
      <p className={style.checkoutform_error}>{errors.expiry?.message}</p>
      <p className={style.checkoutform_error}>{errors.cvc?.message}</p>
      <label className={style.checkoutform_divideline} />
    </form>
  );
}

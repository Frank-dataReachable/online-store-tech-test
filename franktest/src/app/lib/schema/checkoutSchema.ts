/**
 * @file this is the checkout page form validation schema
 * @date 2024-02-17
 * @author Frank Su
 * @lastModify Frank Su 2024-02-17
 */
import z from "zod";

/**
 * this schema is the checkout form schema
 * @property {string} email email formate validation
 * @property {string} shippingname shipping name is a string and it's require
 * @property {string} address address is a string and it's require
 * @property {number} cardNumber cardnumber is a number, required,
 * @property {string} name name is a string, required
 * @property {string} expiry expiry is a stirng, required
 * @property {number} cvc cvc is a number
 */

export const checkoutSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Please enter the valid email",
    })
    .email({ message: "Please enter the valid email" }),
  shippingname: z
    .string()
    .min(1, { message: "Please enter the shipping name" }),
  address: z.string().min(1, { message: "Please enter the address" }),
  cardNumber: z.number({
    required_error: "Card Number is required",
    invalid_type_error: "Please enter the valid Card Number",
  }),
  name: z.string().min(1, { message: "Please enter the card name" }),
  expiry: z.string().min(1, { message: "Please enter the expiry day" }),
  cvc: z.number({
    required_error: "Card Number is required",
    invalid_type_error: "Please enter the valid CVC",
  }),
});

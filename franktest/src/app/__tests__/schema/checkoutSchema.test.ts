import { checkoutSchema } from "@/app/lib/schema/checkoutSchema";

describe("check out form schema testing", () => {
  test("passed with valid data", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "frank su",
      address: "sydney",
      cardNumber: 123,
      name: "frank",
      expiry: "12/32",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
  test("fails with email missing data and error message", () => {
    const data = {
      email: "",
      shippingname: "frank su",
      address: "sydney",
      cardNumber: 123,
      name: "frank",
      expiry: "12/32",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please enter the valid email"
      );
    }
  });
  test("fails with shippoing name missing data and error message", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "",
      address: "sydney",
      cardNumber: 123,
      name: "frank",
      expiry: "12/32",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please enter the shipping name"
      );
    }
  });
  test("fails with address missing data and error message", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "frank su",
      address: "",
      cardNumber: 123,
      name: "frank",
      expiry: "12/32",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("Please enter the address");
    }
  });
  test("fails with card number missing data and error message", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "frank su",
      address: "sydney",
      name: "frank",
      expiry: "12/32",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("Card Number is required");
    }
  });
  test("fails with name missing data and error message", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "frank su",
      address: "sydney",
      cardNumber: 123,
      name: "",
      expiry: "12/32",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please enter the card name"
      );
    }
  });
  test("fails with expiry data and error message", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "frank su",
      address: "sydney",
      cardNumber: 123,
      name: "frank",
      expiry: "",
      cvc: 123,
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please enter the expiry day"
      );
    }
  });
  test("fails with cvc data and error message", () => {
    const data = {
      email: "xxx@gmail.com",
      shippingname: "frank su",
      address: "sydney",
      cardNumber: 123,
      name: "frank",
      expiry: "12/32",
    };
    const result = checkoutSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("cvc is required");
    }
  });
});

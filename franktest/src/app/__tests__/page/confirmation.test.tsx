import Confirmation from "@/app/product/confirmation/page";
import { render, screen } from "@testing-library/react";

describe("confirmation page ui testing", () => {
  test("have basic fields", () => {
    render(<Confirmation />);
    // Test that the basic element are in the confirmation form
    expect(screen.getByTestId("headerTitle")).toBeInTheDocument();
    expect(screen.getByTestId("headerIcon")).toBeInTheDocument();
    expect(screen.getByTestId("bodyContent")).toBeInTheDocument();
    expect(screen.getByTestId("confirmButton")).toBeInTheDocument();
  });
  test("element have corrent content", () => {
    render(<Confirmation />);
    expect(screen.getByTestId("headerTitle")).toHaveTextContent(
      "Order Confirmation"
    );
    expect(screen.getByTestId("bodyContent")).toHaveTextContent(
      "Thank you for your order!"
    );
    expect(screen.getByTestId("confirmButton")).toHaveTextContent("Close");
  });
});

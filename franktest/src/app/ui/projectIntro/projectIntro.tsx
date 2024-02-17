/**
 * @file
 * @date 2024-02-17
 * @author
 * @lastModify  2024-02-17
 */
import style from "@/app/ui/projectIntro/projectIntro.module.scss";
/**
 * this is the project introducation page
 * @returns {React.FC} a functional component of project introduction
 */
export default function ProjectIntro() {
  return (
    <div className={style.Projectintro_content__wrapper}>
      <h3>Project introduction</h3>
      <p>
        please find the folder structure introduciton at the github README.md
        file
        repo:https://github.com/dkmini-frank/online-store-tech-test/tree/feature/online_store
      </p>
      <p>
        First of all, thank you for your time to read the introduction about
        this project, this is my first time for me to use next.js as even I have
        some experiences with other SSR frontend framework, but it&apos;s still
        need few hours to read the offical documentation.
      </p>
      <p>OK, let&apos;s start to introduce the project.</p>
      <p>
        1. after read the UI design I decide to write few componets that can be
        reused in many pages, which are <b>Button</b>,<b>Input</b> and
        <b>Rating</b>. I give Button a <b> btnType</b> prop that can render 3
        differents color(you can find the detial at app/ui/components/button
        file) to meet the requirement.
      </p>
      <p>
        2. I divide the root layout for two side, left side is for my
        introduction of the project, and right side is the project display. The
        left side will be hidden after screen size less than 1024px in order to
        not affect the right side display.
      </p>
      <p>
        3. I find the <b>header</b> is appeared at all pages, so I write it as a
        component. The header have a lighting icon that can link to the root
        page, also you can click the cart icon to enter the cart page.
      </p>
      <p>
        4. the production page will auto fetch the product list from the
        fakestoreapi, it will give the product start according to the data
        return from fakestoreapi, all the api requrest process are put in the
        same folder <b>/app/lib/api</b>, due to the fakestoreapi is only fake,
        so when you click the <b>Add to Cart</b> button, after a success api
        processing, you can see a success message logout at your compile&apos;s
        TERMINAL.
      </p>
      <p>
        5. at the cart page, it will fetch a cart(cart id is definded by myself,
        you can change it mannually at app/product/cart/page.tsx getCartInfo(id)
        ), due to the fakestoreapi only return the card id and quantity in this
        api, I need to call another api to get the product price, which you can
        find it in app/ui/cartCard/cartList.tsx file, it will calling
        getSingleProduct funtion in api folder. due to the cartCard(the middle
        block with product image and price) will be used in Checkout page, I
        write it as a component.
      </p>
      <p>
        6. at Checkout page, I write the form as a client component because it
        need few interactions with user, so I import it as dynamic import, here
        I am using Zod and react-hook-form for form validation, I am using Zod
        to write the form schema at app/li/schema/checkoutSchema.ts file, I am
        using rect-hook-form for errormessage and validation. At the bottom it
        will calculate the total price accroding to the cart item price and
        quantity. you can change de default cart id at
        app/product/checkout/page.tsx getCartInfo(id) function to see the
        different cart summary. Due to the there is no api for form sumbit, so I
        am just writing a form with validtion and there is no data can be
        submited.
      </p>
      <p>
        All done, that&apos;s all about this project, I want to do the page
        loading skeleton if I have more time, but I decide to write few testing
        for this project, as the testing required to show some test case{" "}
      </p>
    </div>
  );
}

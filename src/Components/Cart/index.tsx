import { useAuth } from "../../Provider/Auth";
import { useProducts } from "../../Provider/Products";
import { CardProduct } from "../CardProduct";
import { Cover } from "./style";
import { AiOutlineClose } from "react-icons/ai";

interface ProductType {
  title: string;
  type: string;
  image: string;
  price: number;
  item: any;
  id?: number;
  remove?: boolean;
}

export const Cart = () => {
  const { cart, showCart, setShowCart } = useProducts();
  const { id } = useAuth();
  const myProducts = cart.filter(
    (item: any) => Number(item.userId) === Number(id)
  );

  const total = myProducts.reduce((acc: any, item: any) => {
    return acc + Number(item.price.replace(/,/, "."));
  }, 0);

  return (
    <>
      {showCart && (
        <Cover>
          <div className="cart">

            <div className="cart-top">
              <h3>carrinho</h3>
              <p>
                <AiOutlineClose onClick={() => setShowCart(!showCart)} />
              </p>
            </div>

            <div className="cart-card">
              {myProducts.map((item: ProductType, index: number) => (
                <CardProduct
                  key={index}
                  title={item.title}
                  type={item.type}
                  image={item.image}
                  price={item.price}
                  item={item}
                  remove
                />
              ))}
            </div>

            <div className="total">{`Total R$ ${total.toFixed(2)}`}</div>
          </div>
        </Cover>
      )}
    </>
  );
};

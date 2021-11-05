import { useProducts } from "../../Provider/Products";
import { CardProduct } from "../CardProduct";
import { Products } from "./style";

interface ProductType {
  title: string;
  type: string;
  image: string;
  price: number;
  item: any;
  id?: number;
  remove?: boolean;
}

export const ProductsList = () => {
  const { products, filteredProducts } = useProducts();

  return (
    <Products>
      {filteredProducts.length > 0
        ? filteredProducts.map((item: ProductType, index: number) => (
            <CardProduct
              key={index}
              title={item.title}
              type={item.type}
              image={item.image}
              price={item.price}
              item={item}
              remove
            />
          ))
        : products.map((item: ProductType, index: number) => (
            <CardProduct
              key={index}
              title={item.title}
              type={item.type}
              image={item.image}
              price={item.price}
              item={item}
            />
          ))}
    </Products>
  );
};

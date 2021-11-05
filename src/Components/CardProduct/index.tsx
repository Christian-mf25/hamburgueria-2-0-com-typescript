import { Button } from "@material-ui/core";
import { useProducts } from "../../Provider/Products";
import { Card } from "./style";

interface ProductType {
  title: string;
  type: string;
  image: string;
  price: number;
  remove?: boolean;
  id?: number;
  item: any;
}

export const CardProduct = ({
  title,
  type,
  image,
  price,
  remove,
  item,
}: ProductType) => {
  const { removeFromCart, addToCart } = useProducts();
  return (
    <Card>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{type}</p>
        <span>{`R$ ${price}`}</span>
        {remove ? (
          <Button type="submit" variant="contained" size="medium" onClick={() => removeFromCart(item.id)}>
            Remover
          </Button>
        ) : (
          <Button
            onClick={() => addToCart(item)}
            type="submit"
            variant="contained"
            size="medium"
          >
            Adicionar
          </Button>
        )}
      </div>
    </Card>
  );
};

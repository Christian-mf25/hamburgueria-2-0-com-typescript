import { ProductsList } from "../../Components/ProductsList";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Provider/Auth";
import { HeaderMenu } from "../../Components/HeaderMenu";
import { Cart } from "../../Components/Cart";
import { Container } from "./style";

export const Dashboard = () => {
  const history = useHistory();
  const { token } = useAuth();

  if (!token) {
    history.push("/");
  }
  return (
    <Container>
      <HeaderMenu />
      <section className="list_products">
        <ProductsList />
      </section>
      <Cart />
    </Container>
  );
};

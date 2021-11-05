import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import API from "../../Services/API";
import { useAuth } from "../Auth";

interface ProductProps {
  children: ReactNode;
}

interface ProductProviderData {
  cart: any;
  input: any;
  products: any;
  setInput: any;
  showCart: any;
  setShowCart: any;
  filteredProducts: any;
  addToCart: (newProduct: Product) => void;
  removeFromCart: (productId: number) => void;
}

interface Product {
  title: string;
  type: string;
  image: string;
  price: number;
  userId: number;
  id: number;
}

const ProductsContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductProvider = ({ children }: ProductProps) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [action, setAction] = useState(false);
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);

  const { id, token, isLoggedIn } = useAuth();

  const filterProducts = () => {
    const inputFilter = products.filter(
      (item: any) =>
        item.title.toLocaleLowerCase() === input.toLocaleLowerCase() ||
        item.type.toLocaleLowerCase() === input.toLocaleLowerCase()
    );

    typeof inputFilter[0] === "undefined"
      ? setFilteredProducts([])
      : setFilteredProducts(inputFilter);
  };

  useEffect(() => {
    filterProducts();
  }, [input]);

  const getCart = () => {
    API.get("/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = ({ ...newProduct }: Product) => {
    API.post(
      "/cart",
      {
        title: newProduct.title,
        type: newProduct.type,
        image: newProduct.image,
        price: newProduct.price,
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setAction(!action);
        toast.success(`Adicionado ao carrinho`);
      })
      .catch((err) => console.log(err));
  };

  const removeFromCart = (productId: number) => {
    API.delete(`/cart/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((_) => {
      setAction(!action);
      toast.success("Item removido do carrinho");
    });
  };

  useEffect(() => {
    getCart();
  }, [isLoggedIn,  action]);

  useEffect(() => {
    API.get("/menu")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        input,
        setInput,
        filteredProducts,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

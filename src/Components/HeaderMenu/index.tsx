import { Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import { History } from "history";
import { GrLogout } from "react-icons/gr";
import SearchIcon from "@material-ui/icons/SearchSharp";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledBadge,
} from "./stylemui";
import { Logo, Buttons } from "./style";
import { useAuth } from "../../Provider/Auth";
import { useProducts } from "../../Provider/Products";

export const HeaderMenu = () => {
  const history = useHistory();

  const { Logout, id } = useAuth();
  const { setShowCart, showCart, cart, input, setInput } = useProducts();

  const myProducts = cart.filter(
    (item: any) => Number(item.userId) === Number(id)
  );

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Logo>
            <h3>Burguer</h3> <p>Kenzie</p>
          </Logo>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisa…"
              inputProps={{ "aria-label": "search" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Search>

          <Buttons>
            <IconButton>
              <StyledBadge badgeContent={myProducts.length} color="secondary">
                <AiOutlineShoppingCart onClick={() => setShowCart(!showCart)} />
              </StyledBadge>
            </IconButton>

            <IconButton>
              <GrLogout onClick={() => Logout(history)} />
            </IconButton>
          </Buttons>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

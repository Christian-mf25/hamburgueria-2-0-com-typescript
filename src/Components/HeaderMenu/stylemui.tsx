import { styled, alpha, Badge, InputBase, Typography } from "@material-ui/core";

export const Search = styled("div")(({ theme }) => ({
	position: "absolute",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  left: "50%",
	transform: "translatex(-50%)",
  width: "40%",
  [theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
  "& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
			width: "12ch",
      "&:focus": {
				width: "20ch",
      },
    },
  },
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

import React, { useContext, useEffect, useState } from "react";
import "../../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Leftheader from "./Leftheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { server } from "../../server";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [text, setText] = useState("");
  const [listOpen, setListOpen] = useState(true);

  const { products } = useSelector((state) => state.getproductsdata);

  const getValiduserDetails = async () => {
    const res = await fetch(`${server}/validuser`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (res.status === 400) {
      // console.log('User is not logged in');
    } else {
      // console.log('Valid user');
      setAccount(data);
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const logoutUser = async () => {
    const res2 = await fetch(`${server}/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      setAccount(false);
      toast.success("Logout Successful", {
        position: "top-center",
      });
      navigate("/");
    }
  };

  const getText = (items) => {
    setText(items);
    setListOpen(false);
  };

  useEffect(() => {
    getValiduserDetails();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="appbar" onClick={handleDrawerOpen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={drawerOpen} onClose={handleDrawerClose}>
            <Leftheader logClose={handleDrawerClose} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              <img src="./amazon_PNG25.png" alt="amazon_logo" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              name=""
              onChange={(e) => getText(e.target.value)}
              placeholder="Search Your Products"
              id=""
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
            {products && products.length > 0 && (
              <List className="extrasearch" hidden={listOpen}>
                {products
                  ?.filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLocaleLowerCase())
                  )
                  .map((product) => (
                    <ListItem key={product._id}>
                      <NavLink
                        to={`/getproductsone/${product._id}`}
                        onClick={() => setListOpen(true)}
                      >
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">Sign in</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
          </div>
          {account ? (
            <Avatar
              className="avtar2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="avtar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></Avatar>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} style={{ margin: 10 }}>
              My account
            </MenuItem>
            {account ? (
              <MenuItem onClick={logoutUser} style={{ margin: 10 }}>
                <LogoutIcon style={{ fontSize: 25, marginRight: 5 }} />
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

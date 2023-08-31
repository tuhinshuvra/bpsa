import { List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function MobileMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      // sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="navHeight"
    >
      <List>
        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second	 w-full text-center"
            }
            to="/"
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second	 w-full text-center"
            }
            to="/about"
          >
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second	 w-full text-center"
            }
            to="/committee"
          >
            Committee
          </NavLink>
        </ListItem>

        {/* <ListItem>
          {" "}
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second	 w-full text-center"
            }
            to="/notice"
          >
            Notice
          </NavLink>
        </ListItem> */}
        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second w-full text-center	"
            }
            to="/news"
          >
            News
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second	 w-full text-center"
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second w-full text-center	"
            }
            to="/events"
          >
            Events
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={(active) =>
              active?.isActive
                ? "text-white bg-main w-full py-2 text-center font-semibold hover:text-second"
                : "text-second hover:text-second w-full text-center	"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="bg-second ml-3"
            onClick={toggleDrawer(anchor, true)}
          >
            <AiOutlineMenu className="text-white" size={28} />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import Home from "./images/home.png";
import Requirement from "./images/irequirement.png";
import Notification from "./images/knotification.png";
import Logout from "./images/logout.png";
import { Link } from "react-router-dom";
import Signin from "./Signin";

const Navbar = ({ toggleSidebar }) => {
  const [active, setActive] = useState(true);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(true);
  };

  useEffect(() => {
    addEventListener("scroll", isActive);
    return () => {
      removeEventListener("scroll", isActive);
    };
  }, []);

  const [logout, setLogout] = useState(false);
  const [loggedout, setLoggedout] = useState(false);

  const handlerClick = () => {
    setLogout(true);
  };

  useEffect(() => {
    if (logout) {
      const userConfirmed = window.confirm("Are you sure you want to log out?");
      if (userConfirmed) {
        setLoggedout(true);
      } else {
        setLogout(false);
      }
    }
  }, [logout]);

  if (loggedout) {
    return <Signin />;
  }

  return (
    <div
      style={{
        padding: "10px",
        borderBottom: "1px solid #D6D6D6",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f9f9f9",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {active && (
        <Box
          container
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Search company Data Vault"
              sx={{
                width: "250px",
                marginLeft: "10rem",
                backgroundColor: grey[100],
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  height: "36px",
                },
              }}
            />
            <Button
              sx={{
                ml: 1,
                height: "36px",
                backgroundColor: "#007bff",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Search
            </Button>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "space-evenly",
              gap: "20px",
            }}
          >
            <Link to="/secondhome">
              <img
                src={Home}
                alt="home"
                style={{
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>
            <Link to="/list">
              <img
                src={Requirement}
                alt="requirement"
                style={{
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>

            <img
              src={Notification}
              alt="notification"
              style={{
                width: "28px",
                height: "28px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <button
              onClick={handlerClick}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={Logout}
                alt="logout"
                style={{
                  width: "28px",
                  height: "28px",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Navbar;

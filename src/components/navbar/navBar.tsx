"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { formatNavigationLinks } from "@/helper/helper";

import { NAVBAR_LINKS } from "@/constants/constants";

import styles from "./navBar.module.css";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen

  // Handle drawer toggling
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      {/* For Mobile View */}
      {isMobile ? (
        <>
          <Box
            sx={{
              margin: "10px 20px",
            }}
          >
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: "#d2f2f1" }} />
            </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            className={styles["drawer"]}
            variant="temporary"
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "black",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <CloseIcon sx={{ color: "#d2f2f1" }} />
              </IconButton>
            </Box>
            <List className={styles["navlist"]}>
              {NAVBAR_LINKS.map((link, index) => (
                <ListItem key={index} className={styles["navitem"]}>
                  <Link href={formatNavigationLinks(link)}>
                    <ListItemText
                      className={styles["navlink-text"]}
                      primary={link}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        // For larger screens
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <List
            className={styles["navlist"]}
            sx={{ margin: "10px", display: "flex" }}
          >
            {NAVBAR_LINKS.map((link, index) => (
              <ListItem key={index} className={styles["navitem"]}>
                <Link href={formatNavigationLinks(link)}>
                  <ListItemText
                    className={styles["navlink-text"]}
                    primary={link}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;

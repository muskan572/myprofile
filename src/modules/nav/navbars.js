import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  LinkedIn,
  Menu,
  GitHub,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import { Homepage } from "../home";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  "Home",
  "About Me",
  "Education",
  "Skills",
  "Contact",
  "Projects",
  "Achievements",
];

const Navbars = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: "linear-gradient(135deg, #FDF6EC, #F9DCC4)",

          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#4D3C2D",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Person2Icon />
            Muskan
          </Typography>

          {isMobile ? (
            <>
              <IconButton onClick={handleDrawerToggle}>
                <Menu sx={{ color: "#4D3C2D" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List sx={{ width: 200 }}>
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item}
                      to={item.toLowerCase().replace(" ", "")}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={handleDrawerToggle}
                    >
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText
                            primary={item}
                            primaryTypographyProp={{
                              fontSize: 18,
                              fontWeight: "medium",
                              color: "#2F1B1B",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </ScrollLink>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Stack direction="row" gap={5}>
                {navItems.map((item) => (
                  <ScrollLink
                    key={item}
                    to={item.toLowerCase().replace(" ", "")}
                    smooth={true}
                    duration={500}
                    offset={-80}
                  >
                    <Button
                      disableElevation
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      sx={{
                        color: "#2F1B1B",
                        fontSize: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        "&:hover": { color: theme.palette.primary.main },
                      }}
                    >
                      {item}
                    </Button>
                  </ScrollLink>
                ))}
              </Stack>
              <Stack direction="row" sx={{ ml: 3 }}>
                <IconButton
                  href=" https://www.instagram.com/muskan_jhedu/"
                  target="_blank"
                >
                  {" "}
                  <Instagram
                    sx={{ mx: 1, color: "#4D3C2D", cursor: "pointer" }}
                  />
                </IconButton>

                <IconButton
                  href=" https://www.instagram.com/muskan_jhedu/"
                  target="_blank"
                >
                  <Facebook
                    sx={{ mx: 1, color: "#4D3C2D", cursor: "pointer" }}
                  />
                </IconButton>
                <IconButton
                  href=" https://www.linkedin.com/in/muskan-jhedu-b49a49276/"
                  target="_blank"
                >
                  <LinkedIn
                    sx={{ mx: 1, color: "#4D3C2D", cursor: "pointer" }}
                  />
                </IconButton>
                <IconButton
                  href=" https://github.com/muskan572"
                  target="_blank"
                >
                  <GitHub sx={{ mx: 1, color: "#4D3C2D", cursor: "pointer" }} />
                </IconButton>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ pt: { xs: 8, md: 10 } }}>
        <Homepage />
      </Box>
    </>
  );
};

export { Navbars };

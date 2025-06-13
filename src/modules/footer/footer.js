import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  Email,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const pulse3D = keyframes`
  0%, 100% {
    transform: perspective(500px) rotateX(0deg) rotateY(0deg);
    filter: drop-shadow(0 0 0 rgba(0,0,0,0));
  }
  50% {
    transform: perspective(500px) rotateX(10deg) rotateY(10deg);
    filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.4));
  }
`;

const Footer = ({ bgColor = " #F9DCC4 ", textColor = "#eee" }) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: bgColor,
        color: textColor,
        py: 4,
        px: 3,
        textAlign: "center",
        userSelect: "none",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
        Muskan Jhedu
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, opacity: 0.75 }}>
        &copy; {new Date().getFullYear()} Muskan Jhedu. All rights reserved.
      </Typography>

      {/* Navigation Links */}
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        sx={{
          mb: 3,
          flexWrap: "wrap",
          "& a": {
            color: textColor,
            fontWeight: 600,
            position: "relative",
            textDecoration: "none",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.primary.light,
              animation: `${pulse3D} 0.8s ease-in-out`,
            },
          },
        }}
      >
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </Stack>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{
          "& .MuiIconButton-root": {
            color: textColor,
            borderRadius: 2,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
            backgroundColor: "rgba(255,255,255,0.05)",
            "&:hover": {
              color: theme.palette.primary.main,
              transform:
                "translateY(-5px) scale(1.2) rotateX(15deg) rotateY(15deg)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.15)",
              animation: `${pulse3D} 0.6s ease-in-out`,
            },
          },
        }}
      >
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
        >
          <Facebook />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
        >
          <Twitter />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
        >
          <Instagram />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          href="https://github.com"
          target="_blank"
          rel="noopener"
        >
          <GitHub />
        </IconButton>
        <IconButton aria-label="Email" href="mailto:youremail@example.com">
          <Email />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;

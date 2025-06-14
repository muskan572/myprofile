import { Box, Typography, Stack, useTheme, IconButton } from "@mui/material";
import {
  Facebook,
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

const Contact = ({
  bgColor = "rgb(255, 222, 195) ",
  textColor = "#8B4513",
}) => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
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
          href="https://www.facebook.com/profile.php?id=61552203032346"
          target="_blank"
          rel="noopener"
        >
          <Facebook />
        </IconButton>

        <IconButton
          aria-label="Instagram"
          href="https://www.instagram.com/muskan_jhedu/"
          target="_blank"
          rel="noopener"
        >
          <Instagram />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/muskan-jhedu-b49a49276/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          href="https://github.com/muskan572"
          target="_blank"
          rel="noopener"
        >
          <GitHub />
        </IconButton>
        <IconButton
          aria-label="Email"
          href="mailto:muskanchhimpa2022@gmail.com"
        >
          <Email />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;

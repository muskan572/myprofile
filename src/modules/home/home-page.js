import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import About from "../about/about";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #FDF6EC, #F9DCC4)",
          py: 10,
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            padding: 5,
            borderRadius: 5,
            maxWidth: 1000,
            backgroundColor: "#ffffffcc",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transform: "rotateX(2deg)",
          }}
          data-aos="fade-up"
        >
          {/* Profile Image */}
          <Box
            data-aos="zoom-in"
            sx={{
              width: "250px",
              height: "370px",
              borderRadius: "40% / 20%",
              overflow: "hidden",
              border: "4px solid #E3DFB0",
              flexShrink: 0,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src="/assets/image/image.png"
              alt="Muskan Jhedu"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Intro Text */}
          <Box data-aos="fade-left">
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontFamily: "cursive",
                color: "#4D3C2D",
                mb: 1,
              }}
            >
              Hey there...!!
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#333", mb: 2 }}
            >
              I'm Muskan Jhedu
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#555", fontSize: "18px", lineHeight: 1.8 }}
            >
              A passionate{" "}
              <b style={{ color: "#A0522D" }}>Front-end Developer</b> with a
              keen eye for design, blending creativity with technical expertise
              to build intuitive and visually engaging user interfaces.
            </Typography>
          </Box>
        </Paper>
      </Box>
      <About />
    </>
  );
};

export { Homepage };

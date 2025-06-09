import { Box, Typography, Paper } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="aboutme"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FAF6F0, #F4E2D8)",
        py: 8,
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 900,
          padding: 5,
          borderRadius: 5,
          backgroundColor: "#ffffffcc",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
          transform: "rotateX(2deg)",
        }}
        data-aos="fade-up"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <LaptopMacIcon fontSize="large" sx={{ color: "#4D3C2D" }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#4D3C2D",
            }}
          >
            About Me
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{ color: "#333", lineHeight: 1.8, fontSize: "18px" }}
        >
          Skilled in <b style={{ color: "#A0522D" }}>React.js</b>,{" "}
          <b style={{ color: "#A0522D" }}>JavaScript</b>, and core{" "}
          <b style={{ color: "#A0522D" }}>UI/UX Principles</b>, I strive to
          create seamless digital experiences that enhance user interaction and
          accessibility.
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#333", mt: 3, lineHeight: 1.8, fontSize: "18px" }}
        >
          Experienced in developing dynamic and responsive web pages with
          expertise in <b style={{ color: "#A0522D" }}>Redux Toolkit</b>,{" "}
          <b style={{ color: "#A0522D" }}>Material UI</b>, and{" "}
          <b style={{ color: "#A0522D" }}>Visual Studio Code</b>.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            mt: 4,
          }}
        >
          <DeveloperModeIcon
            fontSize="large"
            sx={{ color: "#845EC2" }}
            data-aos="zoom-in"
          />
          <DesignServicesIcon
            fontSize="large"
            sx={{ color: "#D65DB1" }}
            data-aos="zoom-in"
          />
          <CodeIcon
            fontSize="large"
            sx={{ color: "#FF6F91" }}
            data-aos="zoom-in"
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default About;

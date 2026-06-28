import { Box, Typography, Grid, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const educationData = [
  {
    title: "X",
    year: "2019–2020",
    percentage: "~64%",
    board: "CBSE",
    school: "Brahmrishi Mission School",
    location: "Abohar, Punjab",
    icon: <SchoolIcon sx={{ fontSize: 50, color: "#8B4513" }} />,
  },
  {
    title: "XII",
    year: "2021–2022",
    percentage: "~80%",
    board: "PSEB",
    school: "Government Girls School",
    location: "Abohar, Punjab",
    icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "#8B4513" }} />,
  },
  {
    title: "BCA",
    year: "2022–2025",
    percentage: "~72%",
    board: "Panjab University",
    school: "Gopichand Arya Mahila College",
    location: "Abohar, Punjab",
    icon: <LaptopChromebookIcon sx={{ fontSize: 50, color: "#8B4513" }} />,
  },
  {
    title: "MCA",
    year: "2025–2027",
    percentage: "Pursuing",
    board: "J.C. Bose University of Science and Technology, YMCA",
    school: "Master of Computer Applications",
    location: "Faridabad, Haryana",
    icon: <SchoolIcon sx={{ fontSize: 50, color: "#8B4513" }} />,
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="education"
      sx={{
        py: 10,
        px: 4,
        background: "linear-gradient(135deg, #FDF6EC, #F9DCC4)",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontFamily: "cursive",
          color: "#4D3C2D",
          mb: 6,
          display: "inline-block",
          px: 3,
          py: 1,
          background: "#f0eac2",
          borderRadius: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        Education
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {educationData.map((item, idx) => (
          <Grid item xs={12} sm={6} lg={3} key={idx} data-aos="zoom-in">
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 5,
                backgroundColor: "#f7f2d9",
                border: "4px solid #d3ceaa",
                height: "100%",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#4D3C2D",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "#666",
                  mb: 1,
                }}
              >
                {item.year}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#333",
                  fontWeight: 600,
                }}
              >
                {item.percentage}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontWeight: 600,
                  color: "#5A4634",
                }}
              >
                {item.school}
              </Typography>

              <Typography
                sx={{
                  color: "#777",
                  fontSize: "0.95rem",
                }}
              >
                {item.board}
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  mt: 1,
                }}
              >
                {item.location}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Education };

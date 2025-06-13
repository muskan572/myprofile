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
    school: "Gopichand Arya Mahilla College",
    location: "Abohar, Punjab",
    icon: <LaptopChromebookIcon sx={{ fontSize: 50, color: "#8B4513" }} />,
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
          mb: 5,
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

      <Grid container spacing={5} justifyContent="center">
        {educationData.map((item, idx) => (
          <Grid item xs={12} md={4} key={idx} data-aos="zoom-in">
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 5,
                backgroundColor: "#f7f2d9",
                border: "4px solid #d3ceaa",
                height: "100%",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#4D3C2D" }}
              >
                {item.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#666", mb: 1 }}>
                ({item.year})
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#333", fontWeight: "500" }}
              >
                {item.percentage}{" "}
                <span style={{ fontWeight: 400 }}>({item.board})</span>
              </Typography>
              <Typography sx={{ mt: 1, color: "#555" }}>
                {item.school}
              </Typography>
              <Typography sx={{ color: "#555" }}>{item.location}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Education };

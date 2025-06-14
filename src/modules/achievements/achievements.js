import { Box, Typography, Grid, Paper } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const achievements = [
  {
    title: "Won 2 Medals in Debugging & Quiz",
    year: "2nd Year",
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#FFD700" }} />,
  },
  {
    title: "Won Medal in Debugging",
    year: "1st Year",
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#C0C0C0" }} />,
  },
  {
    title: "Certificate in DSA Workshop",
    year: "DSA Workshop",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: "#DAA520" }} />,
  },
];

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="achievements"
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        background: "#FFF7ED",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
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
          Achievements
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achieve, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
            <Paper
              elevation={6}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
                backgroundColor: "#FFF3E0",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{achieve.icon}</Box>
              <Typography variant="h6" fontWeight="medium">
                {achieve.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray", mt: 1, fontStyle: "italic" }}
              >
                {achieve.year}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;

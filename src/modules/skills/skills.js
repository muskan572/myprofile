import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import StarRateIcon from "@mui/icons-material/StarRate";
import VerifiedIcon from "@mui/icons-material/Verified";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      icon: <VerifiedIcon sx={{ color: "#6C584C", fontSize: 28 }} />,
      text: "Completed 4 months of Hands-on Experience at SyncGlob.",
    },
    {
      icon: <TerminalIcon sx={{ color: "#6C584C", fontSize: 28 }} />,
      text: "React.js, JavaScript, C, C++, HTML, CSS (Tailwind CSS also)",
    },
    {
      icon: <StarRateIcon sx={{ color: "#6C584C", fontSize: 28 }} />,
      text: "Positive Attitude & Good Communication Skills",
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: 4,
        background: "linear-gradient(to bottom, #fdf6ec, #f9dcc4)",
        minHeight: "100vh",
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
        Skills
      </Typography>

      <Grid container justifyContent="center" data-aos="fade-up">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={6}
            sx={{
              p: 5,
              borderRadius: 5,
              backgroundColor: "#f7f2d9",
              border: "4px solid #d3ceaa",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <List>
              {skills.map((skill, index) => (
                <ListItem key={index} sx={{ py: 2 }}>
                  <ListItemIcon>{skill.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{ color: "#3C2F2F", fontWeight: 500 }}
                      >
                        {skill.text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Skills };

import { Box, Typography, Grid, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/system";

const FlipCard = styled(Box)({
  perspective: "1000px",
  width: "100%",
  height: "250px",
  position: "relative",
  "&:hover .flip-inner": {
    transform: "rotateY(180deg)",
  },
});

const FlipInner = styled(Box)({
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  position: "relative",
  height: "100%",
});

const FlipSide = styled(Box)(({ front }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: front ? "#FFEBD8" : "#F9DCC4",
  borderRadius: 12,
  padding: "1.5rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transform: front ? "rotateY(0deg)" : "rotateY(180deg)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const projects = [
  {
    title: "Scoopwise",
    subtitle: "From Freezer to Forecast",
    description:
      "React-based weather-integrated ice cream app adapting UI & flavors based on temperature.",
    link: "https://github.com/muskan572/scoopwise",
  },
  {
    title: "BrandName",
    subtitle: "Web development Agency",
    description:
      "I recently worked on a Web Development Agency website – designed and built modern design, responsiveness, and clear service offerings. 🔧 Tech Stack Used: HTML & CSS",
    link: "https://github.com/muskan572/BRANDNAME",
  },
  {
    title: "Food Website",
    subtitle: "Tasty UI Experience",
    description:
      "Responsive food website with animations, menu filtering, and elegant design using React.js.",
    link: "https://github.com/muskan572/food-website",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="projects"
      sx={{ py: 8, px: { xs: 2, md: 8 }, background: "#FFF4EC" }}
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
          My Projects
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareColor="#ffffff"
            >
              <FlipCard>
                <FlipInner className="flip-inner">
                  <FlipSide front>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontStyle: "italic", opacity: 0.8 }}
                    >
                      {project.subtitle}
                    </Typography>
                  </FlipSide>

                  <FlipSide>
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, textAlign: "center" }}
                    >
                      {project.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.link}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{ textTransform: "none" }}
                    >
                      View on GitHub
                    </Button>
                  </FlipSide>
                </FlipInner>
              </FlipCard>
            </Tilt>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

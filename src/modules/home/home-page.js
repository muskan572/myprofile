import { Avatar, Container, Grid2, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ mt: 8, display: "flex", alignItems: "center" }}
      >
        <Grid2 container spacing={4} alignItems="center">
          {/* Profile Image */}
          <Grid2 size xs={12} md={5}>
            <Avatar
              src="https://via.placeholder.com/250"
              sx={{ width: 250, height: 250, borderRadius: "50%", mx: "auto" }}
            />
          </Grid2>

          {/* Intro Text */}
          <Grid2 size xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "#4D3C2D",
              }}
            >
              Hey, There ...!!
            </Typography>
            <Typography
              variant="h5"
              sx={{ mt: 1, fontWeight: "bold", color: "#333" }}
            >
              I'm Muskan Jhedu
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
              Passionate Front-end Developer with a keen eye for design,
              blending creativity with technical expertise to build intuitive
              and visually engaging user interfaces.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};
export { Homepage };

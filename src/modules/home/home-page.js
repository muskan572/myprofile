import { Box, Container, Grid2, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Container sx={{ mt: 8, display: "flex", alignItems: "center" }}>
        <Grid2 container spacing={4} alignItems="center">
          {/* Profile Image */}
          <Grid2 size={6}>
            <Box
              width="270px"
              height="400px"
              borderRadius="150px"
              borderColor="#E3DFB0"
              border={1}
            >
              <Box
                width="250px"
                height="390px"
                borderRadius="150px"
                bgcolor="#E3DFB0"
                borderColor="#E3DFB0"
                marginLeft={3}
              >
                <Box>
                  <img
                    src="/assets/image/image.png"
                    alt="profile "
                    style={{
                      width: "250px",
                      height: "350px",
                      borderRadius: "120px",
                      marginTop: "20px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid2>

          {/* Intro Text */}
          <Grid2 size={6}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "#4D3C2D",
              }}
            >
              Hey, There ...!!
            </Typography>
            <Typography
              variant="h3"
              sx={{ mt: 1, fontWeight: "bold", color: "#333" }}
            >
              I'm Muskan Jhedu
            </Typography>
            <Typography sx={{ mt: 2, color: "#555", fontSize: "25px" }}>
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

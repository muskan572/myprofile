import { Typography, Box } from "@mui/material";

export default function Projects() {
  return (
    <>
      <Box
        id="projects"
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
          Projects
        </Typography>
      </Box>
    </>
  );
}

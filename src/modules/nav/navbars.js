import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { Homepage } from "../home";
const Navbars = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#EAE5D8", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            sx={{ flexGrow: 1, color: "#4D3C2D", fontWeight: "bold" }}
          >
            Muskan
          </Typography>
          <Stack direction="row">
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Education</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
          <Stack direction="row">
            <Button>
              <Instagram sx={{ mx: 1, color: "#4D3C2D" }} />
            </Button>
            <Button>
              <Facebook sx={{ mx: 1, color: "#4D3C2D" }} />
            </Button>
            <Button>
              <LinkedIn sx={{ mx: 1, color: "#4D3C2D" }} />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Homepage />
    </>
  );
};
export { Navbars };

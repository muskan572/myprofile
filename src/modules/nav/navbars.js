import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { Homepage } from "../home";
import Person2Icon from "@mui/icons-material/Person2";
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
            <Person2Icon />
            Muskan
          </Typography>
          <Stack direction="row" gap={7} justifyContent="center" flex={5}>
            <Button style={{ color: "#2F1B1B", fontSize: "18px" }}>Home</Button>
            <Button style={{ color: "#2F1B1B", fontSize: "18px" }}>
              About Me
            </Button>
            <Button style={{ color: "#2F1B1B", fontSize: "18px" }}>
              Education
            </Button>
            <Button style={{ color: "#2F1B1B", fontSize: "18px" }}>
              Skills
            </Button>
            <Button style={{ color: "#2F1B1B", fontSize: "18px" }}>
              Contact
            </Button>
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

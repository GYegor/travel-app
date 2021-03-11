import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { useStyles } from "../mui-style";

const logoPath = process.env.PUBLIC_URL + "/assets/icons/rs_school_logo.svg";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <Box>
          <a
            href="https://rs.school/js/"
            className={classes.logoLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://rs.school/images/rs_school_js.svg" className={classes.logo} alt="logo" />
          </a>
        </Box>
        <Box className={classes.creators}>
          <Typography>Created by:</Typography>
          <a
            className={classes.author}
            href="https://github.com/GYegor"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>Yahor Hlushanko</Typography>
          </a>          
          <a
            className={classes.author}
            href="https://github.com/KseniyaShukevich"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>Kseniya Shukevich</Typography>
          </a>
          <a
            className={classes.author}
            href="https://github.com/pacetin"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>Palina Cetin</Typography>
          </a>
          <a
            className={classes.author}
            href="https://github.com/MarinaYur"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>Marina Yurkevich</Typography>
          </a>
          <Typography> 2021</Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

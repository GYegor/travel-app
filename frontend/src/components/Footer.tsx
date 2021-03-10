import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";

const logoPath = process.env.PUBLIC_URL + "/assets/icons/rs_school_logo.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1, 2),
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    height: "75px",
  },
  logoLink: {
    cursor: "pointer",
    display: "block",
    boxSizing: "content-box",
    textAlign: "center",
  },
  creators: {
    flex: '0 1 50%',
    display: "flex",
    columnGap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  author: {
    textDecoration: "none",
    cursor: "pointer",
    color: theme.palette.primary.contrastText,
  },
}));

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
            <img src={logoPath} className={classes.logo} alt="logo" />
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
          <Typography>, 2021</Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import Image from "./BazaarImage";
import { Paragraph } from "./Typography";
import { Link } from "react-router-dom";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
import Instagram from "./Instagram";
import Google from "./Google";
// import AppStore from "./AppStore";
import FlexBox from "./FlexBox";

const StyledLink = styled("a")(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const Footer = () => {
  return (
    <footer style={{ marginTop: "1rem" }}>
      <Box bgcolor="#222935">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>

              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image style={{ width: "60%" }} mb={2.5} src="/assets/images/logo-goodness.png" alt="logo" width="80%" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

                {/* <AppStore /> */}
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  A propos
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <Link href="/" key={ind} passHref>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Services
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Link href="/" key={ind} passHref>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>

                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Contactez nous
                </Box>

                <Box py={0.6} color="grey.500">
                  70 Washington Square South, New York, NY 10012, United States
                </Box>

                <Box py={0.6} color="grey.500">
                  Email: uilib.help@gmail.com
                </Box>

                <Box py={0.6} mb={2} color="grey.500">
                  Phone: +1 1123 456 780
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon fontSize="inherit" />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];
const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/corede-technology",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/corede-technology",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  {
    icon: Google,
    url: "/",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/corede-technology/",
  },
];
export default Footer;
import React from 'react';
import styled from 'styled-components';
import { Box, Grid, Typography } from '@mui/material';

const FooterContainer = styled.div`
  text-align: center;
  background-color: #201658;
  color: white;
  margin-top: 30px;
  padding: 80px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Grid container>
          <Grid item md={3} sm={12} textAlign={'center'}>
            <Typography variant="h4" padding={'20px'}>
              VoteZone
            </Typography>
            <Typography variant="body2">
              VoteZone is a platform <br /> for conducting elections online.
            </Typography>
          </Grid>
          <Grid item md={3} sm={12}>
            <Typography variant="h4" padding={'20px'}>
              Additional Links
            </Typography>
            <Typography variant="body2">
              FAQs <br /> Voting <br /> Privacy
            </Typography>
          </Grid>
          <Grid item md={3} sm={12}>
            <Typography variant="h4" padding={'20px'}>
              Contact Info
            </Typography>
            <Typography variant="body2">
              <a href="tel:+94761234567">+94761234567</a> <br />
              <a href="mailto:support@votezone.com">support@votezone.com</a>
            </Typography>
          </Grid>
          <Grid item md={3} sm={12}>
            <Typography variant="h4" padding={'20px'}>
              Follow Us
            </Typography>
            <Typography variant="body2">
              Facebook <br /> Twitter <br /> Instagram
            </Typography>
          </Grid>
        </Grid>
      </FooterContainer>
      <Box textAlign={'center'}>Copyright &copy; 2024 VoteZone | All Rights Reserved</Box>
    </>
  );
};

export default Footer;

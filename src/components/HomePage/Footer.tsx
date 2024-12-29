import styled from 'styled-components';
import { Box, Grid, Typography } from '@mui/material';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';

const FooterContainer = styled.div`
  text-align: center;
  background-color: #201658;
  color: white;
  margin-top: 30px;
  padding: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  svg {
    color: white;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #00aa8d;
    }
  }
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #00aa8d;
    }
  }
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
              <LinkList>
                <LinkItem>
                  <a href="#faqs">FAQs</a>
                </LinkItem>
                <LinkItem>
                  <a href="#voting">Voting</a>
                </LinkItem>
                <LinkItem>
                  <a href="#events">Events</a>
                </LinkItem>
                <LinkItem>
                  <a href="#privacy">Privacy</a>
                </LinkItem>
              </LinkList>
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
              <SocialIcons>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </SocialIcons>
            </Typography>
          </Grid>
        </Grid>
      </FooterContainer>
      <Box textAlign={'center'}>Copyright &copy; 2024 VoteZone | All Rights Reserved</Box>
    </>
  );
};

export default Footer;

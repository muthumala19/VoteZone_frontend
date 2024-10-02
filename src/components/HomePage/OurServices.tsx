import React from 'react';
import styled from 'styled-components';
import { Security, Build, AutoAwesome } from '@mui/icons-material'; // Assuming you're using Material-UI icons
import { Grid } from '@mui/material';

// Styles
const FeaturesContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: white;
  //border-bottom: 2px solid #201658;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #201658;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 40px;
`;

const WhyChooseUs = () => {
  return (
    <FeaturesContainer>
      <Title>WHY CHOOSE US?</Title>
      <Subtitle>
        We take democracy seriously. Find out why our clients consistently rely on us for their
        election needs.
      </Subtitle>

      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <Security />
          <h3>Secure and Reliable</h3>
          <p>
            Third Party Audits & Certifications
            <br />
            Voter-Verified Results
            <br />
            100% Availability Guarantee
          </p>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <Build />
          <h3>Flexible and Simple to Use</h3>
          <p>
            24 × 7 × 365 Support
            <br />
            Simple and Accessible Voter Experience
            <br />
            Internet, Phone, and Paper Ballots
          </p>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <AutoAwesome />
          <h3>Industry-Specific Expertise</h3>
          <p>
            Self Administered or Fully Managed Elections
            <br />
            Professional Electoral Services
            <br />
            Custom Voting Technology
          </p>
        </Grid>
      </Grid>
    </FeaturesContainer>
  );
};

export default WhyChooseUs;

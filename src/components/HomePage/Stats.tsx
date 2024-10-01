import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faUsers,
  faListAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top: 30px;
  background-color: #201658;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
`;

const StatNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const StatsIcons = () => {
  return (
    <StatsContainer>
      <StatBox>
        <IconWrapper>
          <FontAwesomeIcon icon={faCalendarAlt} color="#FFCCCC" />
        </IconWrapper>
        <StatNumber>100+ ELECTIONS</StatNumber>
      </StatBox>
      <StatBox>
        <IconWrapper>
          <FontAwesomeIcon icon={faUsers} color="#8CFFCC" />
        </IconWrapper>
        <StatNumber>2300+ VOTERS</StatNumber>
      </StatBox>
      <StatBox>
        <IconWrapper>
          <FontAwesomeIcon icon={faListAlt} color="#8CCBFF" />
        </IconWrapper>
        <StatNumber>15+ CATEGORIES</StatNumber>
      </StatBox>
      <StatBox>
        <IconWrapper>
          <FontAwesomeIcon icon={faMapMarkerAlt} color="#8CFFCC" />
        </IconWrapper>
        <StatNumber>50+ LOCATIONS</StatNumber>
      </StatBox>
    </StatsContainer>
  );
};

export default StatsIcons;

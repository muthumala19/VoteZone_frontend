import styled from 'styled-components';
import Appbar from '../../components/Appbar/Appbar';
import HomePage from '../../components/HomePage/HomePage';
import ContactUs from '../../components/HomePage/ContactUs';
import StatsIcons from '../../components/HomePage/Stats';
import Services from '../../components/HomePage/OurServices';
import Footer from '../../components/HomePage/Footer';

export const HomeWarpper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default function Home() {
  return (
    <HomeWarpper>
      <Appbar />
      <HomePage />
      <Services />
      <StatsIcons />
      <ContactUs />
      <Footer />
    </HomeWarpper>
  );
}

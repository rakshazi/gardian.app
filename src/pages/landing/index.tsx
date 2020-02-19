import React from 'react';
import MainScreen from './screens/main';
import HowItWorks from './screens/how-it-works';
import PickPlan from './screens/pick-plan';
import FAQ from './screens/faq';
import GetStarted from './screens/get-started';
import Footer from '../../components/footer';

const Landing = () => {
  return (
    <>
      <MainScreen />
      <HowItWorks />
      <PickPlan />
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Landing;

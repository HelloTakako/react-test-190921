import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../complexes/DefaultLayout';

const AboutPage: React.FC = () => {
  return (
    <DefaultLayout className="AboutPage">
      <p>
        <Link to="/">Home</Link>
      </p>
<<<<<<< HEAD
      <h1>About test change - firebase - koushin</h1>
=======
      <h1>About test change - firebase - abcdefg</h1>
>>>>>>> 6c49c4a1c18214892354008453fff0950630a70b
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam, placeat similique accusamus aliquid, quidem dolor iusto ut eum exercitationem beatae omnis libero? Saepe molestias obcaecati ratione, quam nemo quas.</p>
    </DefaultLayout>
  );
};

export default AboutPage;

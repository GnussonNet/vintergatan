import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';
import { useState, useEffect } from 'react';
import DashboardItem from '../../components/DashboardItem/DashboardItem';
import SigninForm from '../../components/SigninForm/SigninForm';
import dashboardData from '../../data/dashboardData.json';
import { useNavigate } from 'react-router-dom';

import styles from './Signin.module.scss';

function Signin() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      navigate('/', {state:{isSignedIn:isSignedIn}});
    }
  }, [isSignedIn]);

  return (
    <section id="home" className={styles.home}>
      {isSignedIn ? (
        console.log("Signed In")
      ) : (
        <section id="home" className={styles.home}>
          <SigninForm setIsSignedIn={setIsSignedIn} />
        </section>
      )}
    </section>
  );
}

export default Signin;

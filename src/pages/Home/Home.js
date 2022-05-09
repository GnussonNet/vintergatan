import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';
import { useState, useEffect } from 'react';
import DashboardItem from '../../components/DashboardItem/DashboardItem';
import SigninForm from '../../components/SigninForm/SigninForm';
import dashboardData from '../../data/dashboardData.json';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Home.module.scss';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (location.state && location.state.isSignedIn) {
      if (location.state.isSignedIn === true) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
        navigate('/signin', { replace: true });
      }
    } else {
      navigate('/signin', { replace: true });
    }
  }, [location.state]);

  return (
    <section id="home" className={styles.home}>
      {isSignedIn ? (
        // If signed in, show dashboard
        <div className={styles.home__dashboard}>
          {dashboardData.map((item, index) => (
            <div className={styles.home__dashboard__category} key={index}>
              <motion.h3 className={styles.home__dashboard__category__title} initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 0.9 } }, hidden: { opacity: 0, translateY: -30 } }}>
                <FeatherIcon icon={item.icon} size={20} /> {item.name}
              </motion.h3>
              <DashboardItem data={item} />
            </div>
          ))}
        </div>
      ) : (
        console.log('Not signed in')
      )}
    </section>
  );
}

export default Home;

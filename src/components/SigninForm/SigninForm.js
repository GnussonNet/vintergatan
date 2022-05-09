// Imports
import { motion } from 'framer-motion';
import Logo from '../../assets/svgs/logo.svg';
import { useState } from 'react';
import database from '../../data/database.json';

// Styles
import styles from './SigninForm.module.scss';

function SigninForm({setIsSignedIn}) {
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value.toLowerCase());

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'invalid', message: <p className={styles.error}>Invalid username or password</p> });
      } else {
        setIsSignedIn(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'invalid', message: <p className={styles.error}>Invalid username or password</p> });
    }
  };

  return (
    <div className={styles.signin}>
      <form className={styles.signin__form} onSubmit={handleSubmit}>
        <motion.img className={styles.signin__form__logo} src={Logo} alt="logo" initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 0.8 } }, hidden: { opacity: 0, translateY: -30 } }} />
        <motion.h2 className={styles.signin__form__title} initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 0.9 } }, hidden: { opacity: 0, translateY: -30 } }}>
          Sign in to Vintergatan.io
        </motion.h2>
        <motion.p className={styles.signin__form__subtitle} initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 1 } }, hidden: { opacity: 0, translateY: -30 } }}>
          Please enter your credentials to sign in
        </motion.p>
        <motion.label htmlFor="email" initial="hidden" animate="visible" variants={{ visible: { opacity: 1, transition: { delay: 1.2 } }, hidden: { opacity: 0 } }}>
          Email:
        </motion.label>
        <motion.input className={styles.signin__form__email} type="email" name="uname" required initial="hidden" animate="visible" variants={{ visible: { opacity: 1, transition: { delay: 1.2 } }, hidden: { opacity: 0 } }} />
        <motion.label htmlFor="password" initial="hidden" animate="visible" variants={{ visible: { opacity: 1, transition: { delay: 1.2 } }, hidden: { opacity: 0 } }}>
          Password:
        </motion.label>
        <motion.input className={styles.signin__form__password} type="password" name="pass" required initial="hidden" animate="visible" variants={{ visible: { opacity: 1, transition: { delay: 1.2 } }, hidden: { opacity: 0 } }} />
        {errorMessages ? errorMessages.message : null}
        <motion.input className={styles.signin__form__submit} type="submit" value="Sign In" initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 1 } }, hidden: { opacity: 0, translateY: 30 } }} />
      </form>
    </div>
  );
}

export default SigninForm;

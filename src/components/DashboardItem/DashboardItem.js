// Imports
import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

// Styles
import styles from './DashboardItem.module.scss';

function DashboardItem({data}) {
  return (
    <motion.div className={styles.dashboard_items} initial="hidden" animate="visible" variants={{ visible: { opacity: 1, translateY: 0, transition: { delay: 0.8 } }, hidden: { opacity: 0, translateY: -30 } }}>
      {data.items.map((item, index) => (
        <div key={index} className={styles.dashboard_items__item}>
          <img src={item.icon_path} alt="logo" />
          <div className={styles.dashboard_items__item__about}>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
          <div>
            <div>{item.online ? <FeatherIcon icon="circle" color="green" size={18} /> : <FeatherIcon icon="circle" color="red" size={18} />}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default DashboardItem;
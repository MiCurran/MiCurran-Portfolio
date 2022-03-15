import styles from './Footer.module.scss';
import { BiCoffeeTogo } from 'react-icons/bi';

export default function PortfolioCard({props}){
    
   return( <footer className={styles.footer}>
          {/* we need to link this to buy me a coffee just cuz we can */}
        <p>
          Powered by{' '}
          <span className={styles.logo}>
            <BiCoffeeTogo size="2em" />
          </span>
        </p>
      </footer>
   )
};

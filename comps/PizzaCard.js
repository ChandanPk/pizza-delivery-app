import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {

    // const 

    return ( 
        <div className={styles.container}>
            <Image src='/imgs/pizza7.png' width='500' height='500' />
            <h1 className={styles.title}>Veg Loaded Farm-House</h1>
            <span className={styles.price}>$29.03</span>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur natus cum facere porro quo dolor.</p>
        </div>
     );
}
 
export default PizzaCard;
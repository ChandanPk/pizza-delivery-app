import Image from 'next/image';
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Navbar = () => {

    const { quantity } = useSelector(state => state.cart);

    return (
        <nav className={styles.container}>

            <div className={styles.item}>
                <div className={styles.callBtn}>
                    <Image src='/img/telephone.png' width='30' height='30'></Image>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>8073960134</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href='/' passHref><li className={styles.listItem}>Homepage</li></Link>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Products</li>
                    {/* <Image src='/img/logo.png' alt='' width='160px' height='69px'></Image> */}
                    <li className={styles.logo}>Growminose</li>
                    <li className={styles.listItem}>Blogs</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>

            <div className={styles.item}>
                {quantity > 0 ? (<Link href='/cart' passHref>
                    <div className={styles.cart}>
                        <p className={styles.count}>{quantity}</p>
                        <Image src='/img/cart.png' width='35' height='30' />
                    </div>
                </Link>): (<div className={styles.cart}>
                        <p className={styles.count}>0</p>
                        <Image src='/img/cart.png' width='35' height='30' />
                    </div>)}
                

            </div>
        </nav>
    );
}

export default Navbar;
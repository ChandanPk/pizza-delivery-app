import Image from 'next/image';
import styles from '../styles/Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' layout='fill' objectFit='cover' />
                            </div>
                        </td>
                        <td className={styles.td}>
                            <span className={styles.name}>Lasaranga</span>
                        </td>
                        <td className={styles.td}>
                            <span className={styles.extras}>Cheese Brust, Halapino</span>
                        </td>
                        <td className={styles.td}>
                            <span className={styles.prize}>$19</span>
                        </td>
                        <td className={styles.td}  >
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td className={styles.td}>
                            <span className={styles.total}>$26</span>
                        </td>
                    </tr>
                    
                </table>
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.cartText}>
                        <b className={styles.cartTextTitle}>Subtotal:</b>$26
                    </div>
                    <div className={styles.cartText}>
                        <b className={styles.cartTextTitle}>Discount:</b>$26
                    </div>
                    <div className={styles.cartText}>
                        <b className={styles.cartTextTitle}>Total:</b>$26
                    </div>
                    <button className={styles.btn}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>THE BEST IN MANY</div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet repellat ab temporibus enim commodi nesciunt nisi, suscipit quos cum nostrum beatae asperiores sequi voluptate, aliquid ad placeat aliquam. Sint, amet ipsam! Nihil dicta vitae ad!</p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    );
}

export default PizzaList;
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Product.module.css'

const Product = () => {

    const [prise, setPrise] = useState(0);

    const pizza = {
        id: 1,
        img: '/img/pizza.png',
        name: 'Farm-House veg loaded double layer cheese bust',
        price: [19.9, 22.5, 25.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat ullam cum!"
    }

    return (
        <div className={styles.container}>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout='fill' />
                </div>
            </div>


            <div className={styles.item}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.prize}>${pizza.price[prise]}</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae excepturi dolores incidunt perferendis dolorem quis magni, corporis deleniti illum!</p>
                <h3>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setPrise(0)}>
                        <p className={styles.sizing1}>Small</p>
                        <Image src='/img/size.png' layout='fill' />
                    </div>
                    <div className={styles.size} onClick={() => setPrise(1)}>
                        <p className={styles.sizing2}>Medium</p>
                        <Image src='/img/size.png' layout='fill' />
                    </div>
                    <div className={styles.size} onClick={() => setPrise(2)}>
                        <p className={styles.sizing3}>Large</p>
                        <Image src='/img/size.png' layout='fill' />
                    </div>
                </div>

                <h3 className={styles.choose}>Choose extra ingredients</h3>
                <div className={styles.options}>
                    <div className={styles.option}>
                        <input type="checkbox" name='double' id='double' className={styles.checkbox} />
                        <label htmlFor="double">Double the Ingredients</label>
                    </div>

                    <div className={styles.option}>
                        <input type="checkbox" name='cheesbust' id='cheesbust' className={styles.checkbox} />
                        <label htmlFor="cheesbust">Cheese Bust</label>
                    </div>

                    <div className={styles.option}>
                        <input type="checkbox" name='mushrooms' id='mushrooms' className={styles.checkbox} />
                        <label htmlFor="mushrooms">Mushrooms</label>
                    </div>

                    <div className={styles.option}>
                        <input type="checkbox" name='halopinos' id='halopinos' className={styles.checkbox} />
                        <label htmlFor="halopinos">Halopinos</label>
                    </div>
                </div>

                <div className={styles.add}>
                    <input type="Number" className={styles.quantity} />
                    <button className={styles.addCartBtn}>Add to Cart</button>
                </div>
            </div>

        </div>
    );
}

export default Product;
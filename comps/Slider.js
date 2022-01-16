import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Slider.module.css'

const Slider = () => {

    const [position, setPosition] = useState(0);

    const pizzas = [
        '/imgs/pizza8.png',
        '/imgs/pizza9.png',
        '/imgs/pizza2.png',
    ]

    let pizzaLength = pizzas.length - 1;

    const handleArrow = (direction) => {
        if (direction === "left") {
            setPosition(position === 0 ? pizzaLength : position - 1)
        }
        if (direction === "right") {
            setPosition(position === pizzaLength ? 0 : position + 1)
        }
        // console.log(position)
    }

        return (
            <div className={styles.container}>
                <div className={styles.imgContainer} style={{ left: 0 }}>
                    <Image src='/img/arrowl.png' layout='fill' objectFit='contain' onClick={() => handleArrow("left")} />
                </div>

                <div className={styles.wrapper} style={{transform: `translate(${(-100 * position)}vw`}}>
                    {pizzas.map((pizza, i) => {
                        return (<div className={styles.imgWrapper} key={i}>
                            <Image src={pizza} layout='fill' objectFit='contain' />
                        </div>)
                    })}
                </div>

                <div className={styles.imgContainer} style={{ right: 0 }}>
                    <Image src='/img/arrowr.png' layout='fill' objectFit='contain' onClick={() => handleArrow("right")} />
                </div>
            </div>
        );
    }
    export default Slider;
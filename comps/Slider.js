// import Image from 'next/image';
// import { useState } from 'react';
// import styles from '../styles/Slider.module.css'

// const Slider = () => {

//     const [position, setPosition] = useState(0);

//     const pizzas = [
//         '/imgs/pizza9.png',
//         '/imgs/pizza2.png',
//         '/imgs/pizza8.png',
//     ]

//     let pizzaLength = pizzas.length - 1;

//     const handleArrow = (direction) => {
//         if (direction === "left") {
//             setPosition(position === 0 ? pizzaLength : position - 1)
//         }
//         if (direction === "right") {
//             setPosition(position === pizzaLength ? 0 : position + 1)
//         }
//         // console.log(position)
//     }

//         return (
//             <div className={styles.container}>
//                 {/* <div className={styles.imgContainer} style={{ left: 0 }}>
//                     <Image priority='blur' alt="lassan" src='/img/arrowl.png' layout='fill' objectFit='contain' onClick={() => handleArrow("left")} />
//                 </div> */}

//                 <div className={styles.wrapper} style={{transform: `translate(${(-100 * position)}vw`}}>
//                     {pizzas.map((pizza, i) => {
//                         return (<div className={styles.imgWrapper} key={i}>
//                             <Image priority='blur' alt="lassan" src={pizza} layout='fill' objectFit='contain' />
//                         </div>)
//                     })}
//                 </div>

//                 {/* <div className={styles.imgContainer} style={{ right: 0 }}>
//                     <Image priority='blur' alt="lassan" src='/img/arrowr.png' layout='fill' objectFit='contain' onClick={() => handleArrow("right")} />
//                 </div> */}
//             </div>
//         );
//     }
//     export default Slider;

import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/pizzagirl1.png",
    "/img/pizzagirl2.png",
    "/img/annish.png"
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Slider;
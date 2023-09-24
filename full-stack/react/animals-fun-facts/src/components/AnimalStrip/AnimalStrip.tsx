import React from 'react';
import { animals } from './animals';
import '../../styles.css'

const AnimalStrip = () => {

    const animalsKeys: string[] = Object.keys(animals);

    return (
        <div className='animal-strip'>
            {
                animalsKeys.map(
                    (key) => (
                        <img
                            key={key}
                            className={`animal ${key}`}
                            src={animals[key].image}
                            alt={key}
                            aria-label={key}
                        />
                    ))
            }
        </div>
    );
};



// const AnimalStrip = () => {
//     let images : any[] = [];
//     for (const key in animals) {
//         const image = (
//             <img

//                 key={key}
//                 className='animal'
//                 src={animals[key].image}
//                 alt={key}
//                 aria-label={key}
//             />
//         )
//         images.push(image);
//     }
//     return images;
// }

export default AnimalStrip;
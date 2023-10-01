import React from 'react';
import { animals } from './animals';
import '../../styles.css'

function generateFact(event: any ) {
    const animalKey = event.target.alt;
    const triva = animals[animalKey].facts;
    const randomIndex = Math.floor(triva.length * Math.random());
    const fact = triva[randomIndex];
    const p = document.getElementById("fact");
    if (p) {
        p.innerHTML = fact;
    }
}


const AnimalStrip = () => {

    const animalsKeys: string[] = Object.keys(animals);

    return (
        <div className='animal-strip'>
            {
                animalsKeys.map(
                    (key) => (
                        <img
                            onClick={generateFact}
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

export default AnimalStrip;
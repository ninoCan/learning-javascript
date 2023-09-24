import AnimalStrip from '../AnimalStrip/AnimalStrip';
import '../../styles.css';

interface AnimalFactsProps {
  title?: string;
}

function AnimalFacts(
  { title }: AnimalFactsProps
) {
  const background = <img src="/assets/ocean.jpg" alt="ocean" className='background' />;
  return (
    <>
      <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
      <AnimalStrip />
      {background}

    </>
  );
}

export default AnimalFacts;
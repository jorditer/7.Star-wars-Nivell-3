import { useEffect, useState } from 'react';
import { fetchPilots } from '../../hooks/usPilots';
import { Pilot } from "../../interfaces/Pilot";
import Separator from './Separator';

const Pilots = ({ pilotUrls }: { pilotUrls: string[] }) => {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const getPilots = async () => {
      try {
        const pilotData = await fetchPilots(pilotUrls);
        setPilots(pilotData);
        setHasFetched(true);
      } catch (error) {
        console.error("Error fetching pilots:", error);
      }
    };

    if (pilotUrls.length > 0 && !hasFetched) {
      getPilots();
    }
  }, [pilotUrls, hasFetched]);

  const regex = /\/(\d+)\/$/;

  return (
    <>
      <Separator>Pilots</Separator>
      <ul className='mt-6 mx-12 md:mx-24 gap-1 p-1 bg-yellow-500 justify-items-center justify-center grid-cols-1 md:grid-cols-2 grid pilots-grid '>
        {pilots.map((pilot) => {
          const match = pilot.url.match(regex);
          const id = match ? match[1] : null;
          const imageUrl = id
            ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
            : "../imgs/404.png";

          return (
            <li className='bg-stone-950' key={pilot.url}>
              <img src={imageUrl} alt={pilot.name} className=" object-cover" />
              <p className='py-2 text-center'><span className='text-xl'>{pilot.name}</span></p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pilots;
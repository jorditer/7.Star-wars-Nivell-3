import { useLocation } from 'react-router-dom';
import { Details } from "../../interfaces/Details";
import Pilots from './Pilots';
import Spaceship from "./Starship";

const StarshipDetails = () => {
  const location = useLocation();
  const { details } = location.state as { details: Details };

  return (
    <>
      <Spaceship details={details}/>    
      {/* <Pilots pilotUrls={details.pilots}></Pilots> */}
      {details.pilots.length != 0 && <Pilots pilotUrls={details.pilots}/>}
      {/* <Films films={details.films}/> */}
    </>
  );
};

export default StarshipDetails;
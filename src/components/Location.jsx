import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-[url('backgroundHeader.svg')] bg-cover bg-center h-[400px]">
      <div className="relative flex justify-center">
        <img className="absolute w-[300px]" src="/portal.svg" alt="" />
        <img className="absolute w-[300px]" src="/logo.svg" alt="" />
      </div>
      <form onSubmit={handleSubmit} className=" flex justify-center  p-2 mt-60 mb-14">
        <input
          placeholder="Type a dim. number"
          name="idLocation"
          className="text-black border-solid border-2 border-green-300"
          type="number"
        />
        <button type="submit" className="flex p-1 items-center bg-green-500 border-solid border-2 border-green-300">
          Search <IconSearch size={18} />
        </button>
      </form>
     
      {/* Location Info */}
      <section className="box-border w-auto border-solid border-2 border-green-300">
        <h3 className="grid justify-center text-green-300 text-bold">Wellcome to {location?.name}!</h3>
        <ul className="flex gap-5 justify-center">
          <li>Type: {location?.type} </li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  );
};
export default Location;

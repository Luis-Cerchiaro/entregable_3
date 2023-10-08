import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/constants";

const ResidentCard = ({ residentEndPoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndPoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="relative">
        <img
          className="border-solid border-2 border-green-300"
          src={resident?.image}
        />

        {/* status del personaje */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-md flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="border-solid border-2 border-green-300  ">
        <h4 className="text-gray-100 text-2xl p-1 font-bold">
          {resident?.name}
        </h4>
        <hr className="h-px my-1 border-teal-900" />
        <ul className="p-1">
          <li className="grid grid-cols-2">
            <span className="text-gray-600 text-base font-medium">
              Species
            </span>
            {resident?.species}
          </li>
          <li className="grid grid-cols-2">
            <span className="text-gray-600 text-base font-medium">
              Origin
            </span>
            {resident?.origin.name}
          </li>
          <li className="grid grid-cols-2">
            <span className="text-gray-600 text-base font-medium">
              Times appear
            </span>
            {resident?.episode.length}
            {resident?.episode.length === 1 ? " time" : " times"}
          </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;

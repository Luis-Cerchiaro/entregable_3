import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section className="bg-[url('/backgroundPage.svg')] bg-cover bg-center">
      <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[800px] mx-auto py-10">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndPoint={resident} />
        ))}
      </section>
      {/* Paginacion */}
      <ul className="text-lg flex gap-3 justify-center flex-wrap align items-center">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={` text-white p-1 ${
                page === currentPage && "w-10 h-10 flex-shrink-0 rounded-md bg-gray-900"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentList;

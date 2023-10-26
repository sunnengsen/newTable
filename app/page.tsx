"use client";
import { useState } from "react";
import Image from "next/image";

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [data, setData] = useState([
    {
      No: 1,
      Id: "iteG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Sunneng",
      judges: 4,
      score: 100,
      complete: 2,
      judgeMembers:"Suneng, Rithy, Meysorng, Veha"
    },
    {
      No: 2,
      Id: "ieeG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Rithy",
      judges: 4,
      score: 90,
      complete: 2,
      judgeMembers:"Suneng, Rithy, Meysorng, Veha"
    },
    {
      No: 3,
      Id: "bioG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Meysorng",
      judges: 4,
      score: 70,
      complete: 3,
      judgeMembers:"Suneng, Rithy, Meysorng, Veha"
    },
    {
      No: 4,
      Id: "atmG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Veha",
      judges: 4,
      score: 100,
      complete: 1,
      judgeMembers:"Suneng, Rithy, Meysorng, Veha"
    },
  ]);
  const [ascending, setAscending] = useState(true);

  const sortScore = () => {
    const sortedData = [...data].sort((a, b) => {
      if (ascending) {
        return b.score - a.score;
      } else {
        return a.score - b.score;
      }
    });
    setData(sortedData);
    setAscending(!ascending);
  };

  return (
    <div className="bg-gray-300 w-screen h-screen">
      <h1 className=" uppercase text-center text-5xl font-extrabold pt-10">
        Table
      </h1>
      <div className="flex justify-center ">
        <table className="table-auto  border-1 rounded-lg bg-white mt-10 border-gray-400 shadow-2xl">
          <thead>
            <tr>
              <th className="p-5 text-start" key="No">
                No
              </th>
              <th className="p-5 text-start" key="Id">
                Id
              </th>
              <th className="p-5 text-start" key="projectName">
                Project Name
              </th>
              <th className="p-5 text-start" key="leader">
                Leader
              </th>
              <th className="p-5 text-start" key="judges">
                Judges
              </th>
              <th
                className="p-5 text-start cursor-pointer flex justify-center"
                key="score"
                onClick={sortScore}
              >
                Score
                <Image src="/sort.svg" alt="sort" width={20} height={20} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.Id}
                className={`table-row  ${
                  row.complete === 1
                    ? "bg-green-200"
                    : row.complete === 2
                    ? "bg-yellow-200"
                    : ""
                }`}
              >
                <td className="px-5 py-5 border-y-2 ">{row.No}</td>
                <td className="px-5 py-5 border-y-2 ">{row.Id}</td>
                <td className="px-5 py-5 border-y-2 ">{row.projectName}</td>
                <td className="px-5 py-5 border-y-2 ">{row.leader}</td>
                <td
                  className={`px-5 py-5 border-y-2 `}
                  onClick={toggleDropdown}
                >
                  {row.judges}
                  <div className="absolute">

                  {isOpen && (
                    <div className="bg-red-500 z-50 relative">
                      <tr>{row.judgeMembers}</tr>
                    </div>
                  )}
                  </div>
                </td>

                <td className="px-5 py-5 border-y-2 ">{row.score}</td>
                <td className="opacity-0">{row.complete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Page;

"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./modal"

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDropdown = (index: number) => {
    setIsOpen(index === openIndex ? !isOpen : true);
    setOpenIndex(index);
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

    },

    {
      No: 2,
      Id: "ieeG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Rithy",
      judges: 4,
      score: 90,
      complete: 2,
      
    },
    {
      No: 3,
      Id: "bioG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Meysorng",
      judges: 4,
      score: 70,
      complete: 1,
      
    },

    {
      No: 4,
      Id: "atmG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Veha",
      judges: 4,
      score: 100,
      complete: 3,
      
    },
    {
      No: 5,
      Id: "atmG7",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Veha",
      judges: 4,
      score: 10,
      complete: 1,
      
    },
  ]);

  const [isAscending, setIsAscending] = useState(true);

  const sortScore = () => {
    const sortedData = [...data].sort((a, b) => {
      if (isAscending) {
        return a.score - b.score;
      } else {
        return b.score - a.score;
      }
    });
    setData(sortedData);
    setIsAscending(!isAscending);
  };

  return (
    <div className="bg-gray-300 w-screen h-screen">
      <h1 className=" uppercase text-center text-5xl font-extrabold pt-10">
        Table
      </h1>
      <div className="flex justify-center ">
        <table className="table-auto  border-1 rounded-lg bg-white mt-10 border-gray-400 shadow-2xl">
          <thead className="">
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
            {data.map((row, index) => (
              <tr
                key={row.Id}
                className={`table-row rounded-xl  ${
                  row.complete === 1
                    ? "bg-green-300 rounded-md"
                    : row.complete === 2
                    ? "bg-yellow-200"
                    : ""
                }`}
              >
                <td className="px-5 py-4 border-y-2 ">{row.No}</td>
                <td className="px-5 py-4 border-y-2 ">{row.Id}</td>
                <td className="px-5 py-4 border-y-2 ">{row.projectName}</td>
                <td className="px-5 py-4 border-y-2 ">{row.leader}</td>
                <td className="px-5 py-4 border-y-2 ">{row.score}</td>
                <td className="px-5 py-4 border-y-2">Evaluate</td>
                <td className="px-5 py-4 border-y-2 "><Modal/></td>
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

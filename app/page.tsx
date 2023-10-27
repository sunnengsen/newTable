"use client";
import { useState } from "react";
import Image from "next/image";

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
      judgeMember1: "Suneng",
      judgeMember2: "John",
      judgeMember3: "David",
      judgeMember4: "Michael",
    },

    {
      No: 2,
      Id: "ieeG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Rithy",
      judges: 4,
      score: 90,
      complete: 2,
      judgeMember1: "Veha",
      judgeMember2: "James",
      judgeMember3: "Robert",
      judgeMember4: "William",
    },
    {
      No: 3,
      Id: "bioG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Meysorng",
      judges: 4,
      score: 70,
      complete: 3,
      judgeMember1: "Rithy",
      judgeMember2: "Richard",
      judgeMember3: "Joseph",
      judgeMember4: "Thomas",
    },

    {
      No: 4,
      Id: "atmG8",
      projectName: "DigiTran (Digital Transformation)",
      leader: "Veha",
      judges: 4,
      score: 100,
      complete: 1,
      judgeMember1: "Meysorng",
      judgeMember2: "Christopher",
      judgeMember3: "Anthony",
      judgeMember4: "Mark",
    },
  ]);

  const sortScore = () => {
    const sortedData = [...data].sort((a, b) => b.score - a.score);
    setData(sortedData);
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
            {data.map((row, index) => (
              <tr
                key={row.Id}
                className={`table-row  ${
                  row.complete === 1
                    ? "bg-green-300"
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
                  className={`px-5 py-5 border-y-2 cursor-pointer ${
                    index === openIndex ? "border-y-02" : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  {row.judges}
                  <div className="flex justify-center">
                    <div
                      className={`${
                        isOpen && index === openIndex ? "" : "hidden"
                      } absolute bg-gray-200 shadow-xl  rounded-md mt-2 duration-700`}
                    >
                      <h1 className="p-2 text-center font-semibold">
                        Judge Member
                      </h1>
                      <p className="p-2 w-32 text-center text-black">
                        {row.judgeMember1}
                      </p>
                      <p className="p-2 w-32 text-center text-black">
                        {row.judgeMember2}
                      </p>
                      <p className="p-2 w-32 text-center text-black">
                        {row.judgeMember3}
                      </p>
                      <p className="p-2 w-32 text-center text-black">
                        {row.judgeMember4}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-y-2 ">{row.score}</td>
                <td className="px-5 py-5 border-y-2">Evaluate</td>
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

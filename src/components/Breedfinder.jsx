import React, { useEffect, useState } from "react";

function Breedfinder() {
  // สร้าง state เพื่อเก็บข้อมูลจาก JSON และเก็บประเภทที่เลือก
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [filter, setFilter] = useState("all"); // ค่าเริ่มต้นเป็น 'all'

  // ดึงข้อมูลจากไฟล์ JSON เมื่อ Component ถูก mount
  useEffect(() => {
    fetch("/breeds.json") // ระบุตำแหน่งของไฟล์ breeds.json ในโฟลเดอร์ public
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data); // บันทึกข้อมูลใน state
        setFilteredBreeds(data); // กำหนดข้อมูลที่กรองเริ่มต้น
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  // ฟังก์ชันในการกรองข้อมูลตามประเภท
  const handleFilter = (type) => {
    setFilter(type);
    if (type === "all") {
      setFilteredBreeds(breeds);
    } else {
      setFilteredBreeds(breeds.filter((breed) => breed.type === type));
    }
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 id="breedfinder" className="text-Lightpink text-4xl font-bold mb-4 md:mb-0">
          Breed Finder
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={() => handleFilter("all")}
            className={`py-2 px-6 rounded-full focus:outline-none ${
              filter === "all"
                ? "bg-emerald-300 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-emerald-400`}
          >
            All Breeds
          </button>
          <button
            onClick={() => handleFilter("Dog")}
            className={`py-2 px-6 rounded-full focus:outline-none ${
              filter === "Dog"
                ? "bg-emerald-300 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-emerald-400`}
          >
            Dogs
          </button>
          <button
            onClick={() => handleFilter("Cat")}
            className={`py-2 px-6 rounded-full focus:outline-none ${
              filter === "Cat"
                ? "bg-emerald-300 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-emerald-400`}
          >
            Cats
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredBreeds.map((breed) => (
          <div
            key={breed.id}
            className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={breed.image}
                alt={breed.name}
              />
            </a>
            <div className="p-5 flex-1">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {breed.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {breed.description}
              </p>
              <a
                href={breed.detailPage}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-Lightorange rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breedfinder;

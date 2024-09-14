import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function GoldenRetrieverPage() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  // ดึงข้อมูลจากไฟล์ JSON เมื่อ Component ถูก mount
  useEffect(() => {
    fetch("/breeds.json") // ระบุตำแหน่งของไฟล์ breeds.json ในโฟลเดอร์ public
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data); // บันทึกข้อมูลใน state
        const goldenRetriever = data.find(
          (breed) => breed.name === "Golden Retriever"
        );
        setSelectedBreed(goldenRetriever); // กำหนดสายพันธุ์ที่เลือกเป็น Golden Retriever
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  if (!selectedBreed) {
    return <div>Loading...</div>; // แสดงข้อความเมื่อข้อมูลยังโหลดไม่เสร็จ
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 max-w-4xl w-full ">
          {/* Breed Image and Info */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 border-b-2 border-gray-300 pb-4">
            <img
              className="w-full sm:w-56 h-auto sm:h-56 object-cover border-2 border-gray-300 rounded-lg"
              src={selectedBreed.image} // ใช้ URL รูปจาก JSON
              alt={selectedBreed.name}
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 border-2 border-gray-200 p-4 rounded-lg flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{selectedBreed.name}</h2>
              <p className="mb-2"><strong>ประเภท:</strong> {selectedBreed.titletype}</p>
              <p className="mb-2"><strong>แหล่งกำเนิด:</strong> {selectedBreed.origin}</p>
              <p className="mb-2"><strong>อุปนิสัย:</strong> {selectedBreed.temperament.join(', ')}</p>
              <p className="mb-2"><strong>ขนาด:</strong> {selectedBreed.size}</p>
              <p className="mb-2"><strong>อายุขัย:</strong> {selectedBreed.lifespan}</p>
              <p className="mb-2"><strong>การมีปฏิสัมพันธ์กับคน:</strong> {selectedBreed.interactionpeople}</p>
              <p className="mb-2"><strong>การมีปฏิสัมพันธ์กับสัตว์:</strong> {selectedBreed.interactionAnimals}</p>
              <p className="mb-2"><strong>ปัญหาสุขภาพ:</strong> {selectedBreed.healthIssues.join(', ')}</p>
            </div>
          </div>

          {/* Health and Care Tips */}
          <div className="mt-6 p-4 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Health and Care Tips</h3>
            <div className="space-y-4">
              {/* สุขภาพ */}
              <details className="bg-white p-3 rounded-md shadow-lg">
                <summary className="font-semibold cursor-pointer">สุขภาพ</summary>
                <p className="mt-2">{selectedBreed.healthTips}</p>
              </details>

              {/* การดูแลขน */}
              <details className="bg-white p-3 rounded-md shadow-lg">
                <summary className="font-semibold cursor-pointer">การดูแลขน</summary>
                <p className="mt-2">{selectedBreed.coatCare}</p>
              </details>

              {/* การออกกำลังกาย */}
              <details className="bg-white p-3 rounded-md shadow-lg">
                <summary className="font-semibold cursor-pointer">การออกกำลังกาย</summary>
                <p className="mt-2">{selectedBreed.exercise}</p>
              </details>

              {/* การฝึก */}
              <details className="bg-white p-3 rounded-md shadow-lg">
                <summary className="font-semibold cursor-pointer">การฝึก</summary>
                <p className="mt-2">{selectedBreed.training}</p>
              </details>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-teal-600"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoldenRetrieverPage;

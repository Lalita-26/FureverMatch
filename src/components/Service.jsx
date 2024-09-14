import React from 'react';

const Service = () => {
  const services = [
    {
      title: "Breed Finder",
      description: "ค้นหาสายพันธุ์ที่ตรงกับการดูแล, ระดับการดูแล, หรือความเป็นมิตรกับเด็กหรือสัตว์เลี้ยงอื่นๆ จากข้อมูลแนะนำสายพันธุ์ที่เหมาะสม",
      image: "/assets/images/Breed.jpg",
    },
    {
      title: "Health and Care Tips",
      description: "แนะนำการดูแลสุขภาพและพฤติกรรมเฉพาะสายพันธุ์ รวมการรักษาโรค การออกกำลังกาย และการดูแลขน",
      image: "/assets/images/Healtcare.png",
    },
    {
      title: "Detailed Breed Information",
      description: "รวมถึงประวัติ ความสามารถ และลักษณะนิสัยทั่วไป ข้อดีและข้อควรระวัง ให้ข้อมูลลึกซึ้งของสายพันธุ์แต่ละชนิด เช่น ปัญหาสุขภาพหรือพฤติกรรมที่ต้องการการฝึกฝน",
      image: "/assets/images/Breed-infomation.png",
    },
    {
      title: "Adoption and Rescue Information",
      description: "แสดงข้อมูลการรับอุปการะสัตว์เลี้ยง หรือช่วยเหลือสัตว์เลี้ยงที่ต้องการบ้านใหม่หรือช่วยเหลือจากมูลนิธิหรือศูนย์ช่วยสัตว์",
      image: "/assets/images/Adoption.jpg",
    },
  ];

  return (
    <div className="bg-gray-600 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 id='service' className="text-3xl sm:text-4xl font-bold mb-8 text-Lightorange">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

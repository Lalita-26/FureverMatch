const people = [
  {
    name: "The Voice (เสียงจากเรา)",
    descriptions: "เป็นเพจที่ช่วยเหลือสัตว์ที่ถูกทอดทิ้งและหาบ้านให้กับพวกเขา",
    imageUrl:
      "https://taejai.com/_next/image?url=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fmembers.organization.logo%2F5e52d696-3d51-4787-b937-13b6917df445%2Fb062ac80-c590-4a3e-8fa1-b128146c1910.png&w=256&q=75",
    urlpage: "https://www.thevoicefoundation.org/",
  },
  {
    name: "Soi Dog Foundation",
    descriptions: "เป็นเพจที่ช่วยเหลือสัตว์ที่ถูกทอดทิ้งและหาบ้านให้กับพวกเขา",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZvjbzoqTX6-Qfi9dyGUkHwUGNL9NVjAUaA&s",
    urlpage: "https://www.soidog.org/th",
  },
  {
    name: "Santisook มูลนิธิสันติสุข",
    descriptions:
      "เพื่อน้องหมาจรและน้องแมวที่อยู่ในจังหวัดเชียงใหม่ ที่ช่วยดูแลการทำหมันให้น้องหมาจรและน้องแมวจร",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEP3jDzVr_TwZNHxO4qQrKU6nsnyXt5dlE5w&s",
    urlpage: "https://www.santisookdogandcat.org/",
  },
  {
    name: "หมาหาบ้าน Places for Paws",
    descriptions: "รับเคสจากผู้ที่ประสงค์จะหาบ้านให้น้องหมาจร น้องแมวจร",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCfUNBOzY9IdZf2CdtZ5P_5Ayjm3xNaMGwA&s",
    urlpage: "https://www.facebook.com/pfpthai",
  },
  {
    name: "หมาหาบ้าน Adopt Me Please",
    descriptions:
      "เริ่มต้นจากการช่วยเหลือน้องหมาที่ถูกจับเพื่อนำไปค้าสุนัขส่งออก และน้องหมาจรที่ได้รับการอุปถัมภ์",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRaKiJDfAicB36HYELbFy5GQKBQf_v3rlmw&s",
    urlpage: "https://www.facebook.com/ampthai",
  },
  {
    name: "วิภาวดีสัตวแพทย์",
    descriptions:
      "โรงพยาบาลสัตว์ที่ตั้งอยู่ในกรุงเทพฯ ประเทศไทย ที่ช่วยหาบ้านให้กับสุนัขและแมว",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJW0eIaxF_RqilrusiOO3SbcDB0tmDmpjx4w&s",
    urlpage:
      "https://www.facebook.com/p/%E0%B8%A7%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B8%B5%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C-100064520357159/",
  },
  {
    name: "Thai Love Animal",
    descriptions: "เป็นเพจที่ช่วยเหลือสัตว์ที่ถูกทอดทิ้งและหาบ้านให้กับพวกเขา",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8L9zjwPimIQqOfK5RgCSfkdmejxsMqAAQ0ZBFC2E3VBOMzEMFYUgrP8nWnMZeevF5CU&usqp=CAU",
    urlpage: "https://www.facebook.com/ThaiLoveAnimal/?locale=th_TH",
  },
  {
    name: "กู้ภัยหมาแมว",
    descriptions:
      "มุ่งเน้นการช่วยเหลือสัตว์เลี้ยง โดยเฉพาะหมาและแมวที่ประสบภัย เช่น ถูกทอดทิ้ง เจ็บป่วย ประสบอุบัติเหตุ ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJe8eepMniIK_Sm6qa-4BKOz30NWUcAHpZw&s",
    urlpage: "https://www.facebook.com/Animal.Rescue.Thailand/",
  },
  // More people...
];

export default function Adaptionpets() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2
            id="adoptionptes"
            className="text-3xl font-bold tracking-tight text-Lightorange sm:text-4xl"
          >
            Adaption Pets
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ร่วมสนับสนุนการช่วยเหลือหมาแมวที่ถูกทอดทิ้ง
            โดยช่วยหาบ้านใหม่ผ่านเพจเหล่านี้
          </p>
        </div>
        <ul
          descriptions="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-24 w-24 rounded-full"
                />
                <div>
                  <h3 className="text-base font-bold leading-7 tracking-tight text-Lightorange">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.descriptions}
                  </p>
                  <a href={person.urlpage}>
                    <button className="mt-2 px-4 py-2 bg-emerald-400 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-Lightorange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Go to Page
                    </button>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

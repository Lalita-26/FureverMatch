import React from "react";

const About = () => {
  return (
    <div id="about" class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      
        <img
          class="rounded-lg max-w-xs md:max-w-md"
          src="/assets/images/Banner.png"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal flex-auto w-64">
          <h5 class="mb-2 text-4xl font-bold tracking-tight text-Lightpink dark:text-white text-center">
            About Us
          </h5>
          <p class="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">
          <span class="font-bold">FureverMatch</span> เริ่มต้นจากความหลงใหลในสัตว์เลี้ยงของเราและความต้องการสร้างสรรค์วิธีที่ดีกว่าในการเชื่อมโยงผู้คนกับสัตว์เลี้ยงในฝันของพวกเขา รวมถึงมือใหม่ที่ต้องการเลี้ยงสัตว์เลี้ยงและรวมถึงต้องการศึกษา
          แต่ละสายพันธุ์ของสุนัขและแมว จึงเป็นที่มาของ <span class="font-bold">FureverMatch</span>
          </p>
        </div>
   
    </div>
  );
};

export default About;

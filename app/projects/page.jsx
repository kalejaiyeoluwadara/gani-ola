import React from "react";
import finished from "@/app/assets/finished.webp";
import Image from "next/image";
import Link from "next/link";
function Page() {
  return (
    <div className="flex items-center flex-col gap-8 py-40 justify-center min-h-screen w-screen ">
      <h1 className="text-primary">Projects</h1>
      <div className="w-[90%] flex-center relative h-[400px] bg-gray-900  ">
        <Image className=" cover " src={finished} alt="" />
        <div className="z-40 text-center text-white">
          <h1>Ongoing Projects</h1>
          <Link href={"/ongoing-projects"}>
            {" "}
            <p className=" pointer hover:font-bold hover:text-primary ">
              Click to view {"- >"}
            </p>
          </Link>
        </div>
        <div className="cover bg-black z-20 bg-opacity-[0.5] "></div>
      </div>

      <div className="flex relative w-[90%]  flex-center h-[70px]  ">
        <div className="border-primary h-[2px] w-full bg-primary " />
        <div className="w-[300px] h-[40px] absolute top-4 bg-white " />
      </div>

      <div className="w-[90%] flex-center relative h-[400px] bg-gray-900  ">
        <Image className=" cover " src={finished} alt="" />
        <div className="z-40 text-center text-white">
          <h1>Past Projects</h1>
          <Link href={"/past-projects"}>
            {" "}
            <p className=" pointer hover:font-bold hover:text-primary ">
              Click to view {"- >"}
            </p>
          </Link>
        </div>
        <div className="cover bg-black z-20 bg-opacity-[0.5] "></div>
      </div>
    </div>
  );
}

export default Page;
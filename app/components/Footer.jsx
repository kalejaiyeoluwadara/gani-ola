import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <section className="h-[300px]  w-screen bg-primary  ">
        <section className="flex justify-between px-8 p-10 text-white ">
          <h1>Logo</h1>
          <div>
            <h2 className="text-[30px] border-l-2 mb-4 border-green-400 px-2 font-semibold ">
              Quick Links
            </h2>
            <div className=" flex flex-col mt-2 text-gray-100 gap-1 ">
              <p>
                {" "}
                <Link href={""}>{"> "}About Us</Link>
              </p>
              <p>
                {" "}
                <Link href={""}>{"> "}Projects</Link>
              </p>
              <p>
                {" "}
                <Link href={""}>{"> "}Consultancy</Link>
              </p>
              <p>
                {" "}
                <Link href={""}>{"> "}Work Experience</Link>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[30px] border-l-2 border-green-400 px-2 font-semibold mb-4 ">
              Contact Info
            </h2>
            <div>
              <div className="flex flex-col">
                <p>icon</p>
                <p>
                  21A, Tunji Bello Street, Ikolaba Estate, Ibadan, Oyo state.
                </p>
              </div>
              <div className="flex flex-col">
                <p>icon</p>
                <p>(+234) 803 3244 038</p>
              </div>
              <div className="flex flex-col">
                <p>icon</p>
                <p>goeslimited@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </section>
      <section className="w-screen h-[60px] bg-white flex items-center justify-center ">
        <p className="text-gray-400">
          Copyright 2024 Gani-Ola Engineering Services ltd.
        </p>
      </section>
    </footer>
  );
}

export default Footer;

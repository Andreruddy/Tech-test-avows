import React from "react";

export default function Card({ img, alt, linkUrl, title }) {
  return (
    <div className="w-full lg:w-1/5">
      <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-success">
        <a className="flex items-center" href={linkUrl}>
          <div className="w-14 p-3.5 bg-[#82CD47] text-white rounded-full mr-3">
            <img src={img} alt={alt} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-lg font-semibold">{title}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

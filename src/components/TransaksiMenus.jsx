import React from "react";
import Card from "./commons/Card";
import transaksi from "../json/transaksi.json";
export default function TransaksiMenus() {
  return (
    <>
      <section className="md:h-full flex items-center text-slate-600">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl text-slate-400 font-semibold">
              Mau Transaksi Apa hari Ini?
            </h1>
          </div>
          <div className="min-w-screen min-h-auto bg-gray-100 flex items-center justify-center rounded-lg shadow">
            <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                {transaksi.transaksi.map((item, i) => {
                  return (
                    <Card
                      key={i}
                      linkUrl={item.url}
                      img={item.img}
                      alt={item.title}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

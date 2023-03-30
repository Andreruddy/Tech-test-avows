import React from "react";
import { Tab } from "@headlessui/react";
import moment from "moment";
import { useState } from "react";
import transaksi from "../json/transaksi.json";
import Chart from "./commons/Chart";
export default function ChartHarga() {
  const [hargaBeli, setHargaBeli] = useState({
    labels: transaksi.harga_beli.map((data) => data.year),
    datasets: [
      {
        data: transaksi.harga_beli.map((data) => data.price),
        borderColor: "#007500",
        backgroundColor: "rgb(124,252,0)",
        borderWidth: 2,
      },
    ],
  });
  const [hargaJual, setHargaJual] = useState({
    labels: transaksi.harga_jual.map((data) => data.year),
    datasets: [
      {
        data: transaksi.harga_jual.map((data) => data.price),
        borderColor: "#007500",
        backgroundColor: "rgb(124,252,0)",
        borderWidth: 2,
      },
    ],
  });
  const option = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const d = new Date();
  const dateNow = moment(d).format("D MMMM YYYY");
  return (
    <>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-7/12 bg-white border border-gray-200 rounded-lg shadow p-6">
        <h3 className="text-2xl mb-2 text-left md:text-3xl text-slate-500 font-semibold">
          Tabungan Emas
        </h3>
        <p className="text-left font-semibold mb-6 text-slate-500">
          Tanggal : {dateNow}
        </p>
        <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 mb-5">
          <div className="grid grid-cols-12 p-4 gap-6 mx-auto">
            <div className="col-span-6 mr-3">
              <h3 className="text-left font-semibold mb-2">Rp. 9.960/gram</h3>
              <button className="inline-block w-full rounded-lg bg-success font-bold text-white hover:bg-[#59981A] px-20 pt-3 pb-2.5">
                Beli Emas
              </button>
            </div>
            <div className="col-span-6 ">
              <h3 className="text-left mb-2 font-semibold">Rp. 9.960/gram</h3>
              <button className="w-full rounded-lg bg-white border-2 font-bold border-slate-300 text-slate-500 hover:text-white hover:bg-[#59981A] px-20 pt-3 pb-2.5">
                Jual Emas
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white border-success border-2 p-1 mb-5">
                <Tab className="w-full rounded-lg hover:bg-success hover:outline-none py-2.5 text-base font-medium leading-5 text-success hover:text-white">
                  Harga Beli
                </Tab>
                <Tab className="w-full rounded-lg hover:bg-success py-2.5 text-base font-medium leading-5 text-success hover:text-white">
                  Harga Jual
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Chart chartData={hargaBeli} options={option} />
                </Tab.Panel>
                <Tab.Panel>
                  <Chart chartData={hargaJual} options={option} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
}

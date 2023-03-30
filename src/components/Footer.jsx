import React from "react";
import transaksi from "../json/transaksi.json";
export default function Footer() {
  return (
    <>
      <footer className="container h-full px-6 pt-24 pb-7">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 text-left">
          <div className="col-span-4">
            <h1 className="mb-5 font-bold text-2xl">Tautan cepat</h1>
            <ul>
              {transaksi.tautan.map((item, i) => {
                return (
                  <li key={i} className="mb-3">
                    <a
                      href={item.link}
                      className="hover:text-success duration-300 cursor-pointer leading-6 text-base"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-4">
            <h1 className="mb-5 font-bold text-2xl">
              Download Pegadaian Digital
            </h1>
            <div className="flex lg:justify-start mb-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=en&gl=US"
                className="mr-3"
              >
                <img
                  className="w-36 h-12"
                  src="https://digital.pegadaian.co.id/assets/image/google-play-badge.png"
                  alt="Google Play"
                />
              </a>
              <a href="https://apps.apple.com/us/app/pegadaian-digital/id1350501409">
                <img
                  className="w-36 h-12"
                  src="https://digital.pegadaian.co.id/assets/image/badge-app.png"
                  alt="Play Store"
                />
              </a>
            </div>
            <h1 className="mb-5 font-bold text-2xl">
              PT Pegadaian terdaftar dan diawasi oleh
            </h1>
            <div className="flex justify-start">
              <img
                className="w-40 h-16"
                src="https://digital.pegadaian.co.id/assets/image/ojk_2.png"
                alt="OJK"
              />
            </div>
          </div>
          <div className="col-span-4">
            <h1 className="mb-5 font-bold text-2xl">Kantor Pusat Pegadaian</h1>
            <div className="flex justify-start mb-3">
              <img
                src="https://digital.pegadaian.co.id/assets/image/pinpoint.svg"
                alt="maps"
                className="w-10 h-8 pr-3"
              />
              <span className="text-base font-semibold">
                Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia
              </span>
            </div>
            <div className="flex justify-start mb-3">
              <img
                src="https://digital.pegadaian.co.id/assets/image/phone.svg"
                alt="phone"
                className="w-10 h-8 pr-3"
              />
              <span className="text-base font-semibold mr-7">021 3155 550</span>
              <img
                src="https://digital.pegadaian.co.id/assets/image/box-mail.svg"
                alt="mail"
                className="w-10 h-8 pr-3"
              />
              <span className="text-base font-semibold">021 8063 5162</span>
            </div>
            <div className="flex flex-start mb-3">
              <img
                src="https://digital.pegadaian.co.id/assets/image/call-center.svg"
                alt="call center"
                className="w-44"
              />
            </div>
            <h1 className="mb-5 font-bold text-2xl">Ikuti Media Sosial Kami</h1>
            <div className="flex flex-row gap-3">
              {transaksi.sosmed.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="p-2 border border-slate-400 rounded-lg hover:border-success"
                  >
                    <a href={item.link} className="hover:text-success">
                      <img src={item.img} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

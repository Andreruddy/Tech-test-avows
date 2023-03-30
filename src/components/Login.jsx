import React from "react";
import ChartHarga from "./ChartHarga";
export default function Login() {
  return (
    <>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="gap-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <ChartHarga />
            <div className="md:w-5/12 lg:ml-5 lg:w-4/12">
              <div className="text-center mb-5">
                <img
                  src="/favicon/pegadaian-rmv.png"
                  alt="logo"
                  className="w-28 mx-auto"
                />
                <h3 className="font-semibold text-2xl text-success">
                  Pegadaian Digital
                </h3>
              </div>
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="min-h-[auto] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 focus:ring-blue-500"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="min-h-[auto] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5 focus:ring-blue-500"
                    placeholder="Your Password"
                  />
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Ingat Saya
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-success hover:underline"
                  >
                    Lupa Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-success hover:bg-[#59981A] px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white"
                >
                  Masuk
                </button>
                <p className="text-sm font-light mt-3 text-gray-500 dark:text-gray-400">
                  Belum Punya Akun?{" "}
                  <a
                    href="#"
                    className="font-medium text-success hover:underlin"
                  >
                    Daftar
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

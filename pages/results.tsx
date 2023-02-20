import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageHead from "@/components/PageHead";
import Link from "next/link";

export default function Results() {
  const router = useRouter();
  const job1 = String(router.query.job1).split(": ");
  const job2 = String(router.query.job2).split(": ");
  const job3 = String(router.query.job3).split(": ");

  return (
    <>
      <PageHead />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2 max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-12 md:max-w-2xl">
          <Link href="https://seer.mixo.io/">
            <img
              className="w-auto h-10 md:h-20"
              src="/logo.png"
              alt="Seer logo"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="">시어</span>, AI 직무 추천
            <span className="bg-seer text-white text-xs md:text-lg font-medium ml-3 mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Beta
            </span>
          </h1>
        </div>
        <div className="max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:max-w-2xl">
          <div className="grid gap-y-12">
            <div className="flex flex-col mt-5 relative">
              <div className="font-bold-600 text-lg mb-3 absolute -top-5">
                <span className="bg-seer font-bold text-white px-4 py-2.5 rounded-full">
                  1
                </span>
                <span className="bg-seer font-semibold text-white px-3 py-1.5 rounded-r-lg -ml-3">
                  {job1[0].split(".")[1]}
                </span>
              </div>
              <div className="rounded-lg overflow-hidden ml-3 shadow-md border border-seer">
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base font-bold">{job1[1]}</p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="https://seer.mixo.io/"
                    className=" text-seer font-bold py-2 px-4 rounded flex justify-center max-w-md"
                  >
                    관련 일자리 보러가기 👉
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5 relative">
              <div className="font-bold-600 text-lg mb-3 absolute -top-5">
                <span className="bg-seer font-bold text-white px-4 py-2.5 rounded-full">
                  2
                </span>
                <span className="bg-seer font-semibold text-white px-3 py-1.5 rounded-r-lg -ml-3">
                  {job2[0].split(".")[1]}
                </span>
              </div>
              <div className="rounded-lg overflow-hidden ml-3 shadow-md border border-seer">
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base font-bold">{job2[1]}</p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="https://seer.mixo.io/"
                    className=" text-seer font-bold py-2 px-4 rounded flex justify-center max-w-md"
                  >
                    관련 일자리 보러가기 👉
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5 relative">
              <div className="font-bold-600 text-lg mb-3 absolute -top-5">
                <span className="bg-seer font-bold text-white px-4 py-2.5 rounded-full">
                  3
                </span>
                <span className="bg-seer font-semibold text-white px-3 py-1.5 rounded-r-lg -ml-3">
                  {job3[0].split(".")[1]}
                </span>
              </div>
              <div className="rounded-lg overflow-hidden ml-3 shadow-md border border-seer">
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base font-bold">{job3[1]}</p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="https://seer.mixo.io/"
                    className=" text-seer font-bold py-2 px-4 rounded flex justify-center max-w-md"
                  >
                    관련 일자리 보러가기 👉
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/"
                className=" bg-seer hover:bg-seer text-white font-bold py-2 px-4 rounded flex justify-center max-w-md"
              >
                다시 추천 받기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

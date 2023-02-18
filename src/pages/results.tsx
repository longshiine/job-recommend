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
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            시어, AI 직무 추천 (Beta)
            <span className="text-4xl md:text-6xl font-bold text-sky-400">
              .
            </span>
          </h1>
        </div>
        <div className="max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:max-w-2xl">
          <div className="grid gap-y-12">
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden shadow-md ">
                <div className="px-6 py-4">
                  <div className="font-bold text-lg md:text-xl mb-3">
                    {job1[0]}
                  </div>
                  <p className="text-gray-700 text-base">{job1[1]}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden shadow-md ">
                <div className="px-6 py-4">
                  <div className="font-bold text-lg md:text-xl mb-3">
                    {job2[0]}
                  </div>
                  <p className="text-gray-700 text-base">{job2[1]}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden shadow-md ">
                <div className="px-6 py-4">
                  <div className="font-bold text-lg md:text-xl mb-3">
                    {job3[0]}
                  </div>
                  <p className="text-gray-700 text-base">{job3[1]}</p>
                </div>
              </div>
            </div>
            <Link
              href="https://www.mixo.io/site/seer-suvmu/index.html#"
              className=" bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded flex justify-center"
            >
              관련 일자리 보러가기
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

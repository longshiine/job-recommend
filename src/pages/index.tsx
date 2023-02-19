import PageHead from "@/components/PageHead";
import CareerInput from "@/components/CareerInput";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PageHead />
      <main className="flex flex-col items-center justify-center min-h-screen py-2 responsive">
        <div className="flex items-center space-x-2 max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-12 md:max-w-2xl">
          <Link href="https://www.mixo.io/site/seer-suvmu/index.html">
            <img
              className="w-auto h-10 md:h-20"
              src="/logo.png"
              alt="Seer logo"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2 responsive">
          <div className="flex w-full justify-end -mr-20"></div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="">시어</span>, AI 직무 추천
            <span className="bg-seer text-white text-xs md:text-lg font-medium ml-3 mr-2 mb-20 px-2.5 py-0.5 rounded">
              Beta
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl">
            <span className="text-seer font-bold">기존 경력</span>을 입력하면
            재취업에 적합한
          </p>
          <p className="text-lg md:text-2xl">
            <span className="text-lg md:text-2xl font-bold text-seer">
              {" "}
              맞춤 직무 3가지를{" "}
            </span>
            추천드릴게요.
          </p>
        </div>
        <CareerInput />
      </main>
    </>
  );
}

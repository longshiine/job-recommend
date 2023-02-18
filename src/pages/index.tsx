import PageHead from "@/components/PageHead";
import CareerInput from "@/components/CareerInput";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageHead />
      <main className="flex flex-col items-center justify-center min-h-screen py-2 responsive">
        <div className="flex items-center space-x-2 max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-12 md:max-w-2xl">
          <img
            className="w-auto h-5 md:h-8"
            src="https://storage.googleapis.com/mixo-files/logos/reLife-1676040768449.svg"
            alt="Seer logo"
          />
          <Link
            href="https://www.mixo.io/site/seer-suvmu/index.html"
            className="font-sans text-lg md:text-xl font-bold text-gray-900"
          >
            Seer
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2 responsive">
          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            <span className="">시어</span>, AI 직무 추천
            <span className="bg-seer text-white text-xs md:text-lg font-medium ml-3 mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
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

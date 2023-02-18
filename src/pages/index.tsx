import PageHead from "@/components/PageHead";
import CareerInput from "@/components/CareerInput";

export default function Home() {
  return (
    <>
      <PageHead />
      <main className="flex flex-col items-center justify-center min-h-screen py-2 mt-10">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-3xl md:text-6xl font-bold">
            시어, AI 직무 추천 (Beta)
            <span className="text-3xl md:text-6xl font-bold text-sky-400">
              .
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl">
            기존 경력을 입력하면 재취업에 적합한
          </p>
          <p className="text-lg md:text-2xl">
            <span className="text-lg md:text-2xl font-bold text-sky-400">
              {" "}
              직무 3가지를{" "}
            </span>
            이유와 함께 추천드릴게요.
          </p>
        </div>
        <CareerInput />
      </main>
    </>
  );
}

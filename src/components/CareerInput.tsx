import React, { useState } from "react";
import { useRouter } from "next/router";

export default function CareerInput() {
  const router = useRouter();

  const [prevCareer, setPrevCareer] = useState("");
  const [careerType, setCareerType] = useState("");
  const [workType, setWorkType] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsGenerating(true);
    if (prevCareer === "" || careerType === "" || workType === "") {
      alert("모든 항목을 입력해주세요.");
      setIsGenerating(false);
      return;
    }
    try {
      const res = await fetch("/api/jobRecommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prevCareer,
          careerType,
          workType,
        }),
      });
      setIsGenerating(false);
      const data = await res.json();
      if (data?.jobRecommendation) {
        const jobRecommendation = data.jobRecommendation.trim().split("\n");
        router.push({
          pathname: "/results",
          query: {
            job1: String(jobRecommendation[0]),
            job2: String(jobRecommendation[2]),
            job3: String(jobRecommendation[4]),
          },
        });
      } else {
        alert("접속량이 많습니다. 잠시 뒤 다시 시도해주세요.");
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12 md:max-w-2xl ">
      <div className="grid gap-y-12">
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col relative mt-10">
              <div className="text-lg mb-3 absolute -top-5">
                <span className="bg-seer font-bold text-white px-4 py-2.5 rounded-full">
                  1
                </span>
                <span className="bg-seer text-white font-semibold px-3 py-1.5 rounded-r-lg -ml-2">
                  이전 경력을 입력해주세요.
                </span>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md border border-seer ml-3">
                <div className="px-6 py-4">
                  <textarea
                    rows={7}
                    disabled={isGenerating}
                    value={prevCareer}
                    onChange={(e) => {
                      setPrevCareer(e.target.value);
                    }}
                    name="prevCareer"
                    id="prevCareer"
                    placeholder="경력 사항을 자유롭게 입력해주세요"
                    className="block w-full rounded-md mt-3 border border-gray shadow-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                  />
                </div>
                <div className="px-6 pb-2 mb-2">
                  <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ex1) 경리 일을 했다
                  </span>
                  <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ex2) 인사담당자 업무를 20년 동안 했다
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-20 relative">
              <div className="text-lg mb-3 absolute -top-5">
                <span className="bg-seer font-bold text-white px-4 py-2.5 rounded-full">
                  2
                </span>
                <span className="bg-seer text-white font-semibold px-3 py-1.5 rounded-r-lg -ml-2">
                  선호하는 직무 형태를 입력해주세요.
                </span>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md border border-seer ml-3">
                <div className="px-6 py-4">
                  <select
                    value={careerType}
                    onChange={(e) => setCareerType(e.target.value)}
                    className="block w-full rounded-md border bg-white border-gray shadow-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                    name="careerType"
                    id="careerType"
                    disabled={isGenerating}
                  >
                    <option value="">선호 직무 형태를 선택해주세요</option>
                    <option value="연봉이 높은">연봉이 높은</option>
                    <option value="워라밸이 좋은">워라밸이 좋은</option>
                    <option value="단순 작업이 많은">단순 작업이 많은</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-20 relative">
              <div className="text-lg mb-3 absolute -top-5">
                <span className="bg-seer font-bold text-white px-4 py-2.5 rounded-full">
                  3
                </span>
                <span className="bg-seer text-white font-semibold px-3 py-1.5 rounded-r-lg -ml-2">
                  선호하는 근무 형태를 입력해주세요.
                </span>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md border border-seer ml-3">
                <div className="px-6 py-4">
                  <select
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                    className="block w-full rounded-md border bg-white border-gray shadow-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-90"
                    name="workType"
                    id="workType"
                    disabled={isGenerating}
                  >
                    <option value="">선호 근무 형태를 선택해주세요</option>
                    <option value="풀타임">풀타임</option>
                    <option value="파트타임">파트타임</option>
                  </select>
                </div>
              </div>
            </div>
            {isGenerating ? (
              <div role="status" className="mt-10 flex justify-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray animate-spin dark:text-gray fill-seer"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="flex text-sm text-gray-400 items-center justify-center">
                  최대 1분 정도 소요됩니다.
                </span>
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <button
                  className={`bg-seer w-xl hover:bg-sky-500 text-white font-bold mt-10 py-2 px-4 rounded
                ${
                  isGenerating || prevCareer === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                  type="submit"
                  disabled={isGenerating || prevCareer === ""}
                >
                  {isGenerating ? "추천중..." : "직무 추천 받기"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

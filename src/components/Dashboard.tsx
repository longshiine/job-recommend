import React, { useState } from "react";

export default function Dashboard() {
  const [jobRecommendation, setJobRecommendation] = useState("");

  const [prevCareer, setPrevCareer] = useState("");
  const [careerType, setCareerType] = useState("");
  const [workType, setWorkType] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(jobRecommendation);
    setIsCopied(true);
    alert("Copied to clipboard!");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const res = await fetch("/api/jobRecommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prevCareer,
          careerType,
        }),
      });
      setIsGenerating(false);
      const data = await res.json();
      if (data.jobRecommendation) {
        setJobRecommendation(data.jobRecommendation.trim());
      } else {
        alert("다시 시도해주세요");
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="max-w-sm w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:max-w-2xl">
      <div className="grid gap-y-12">
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <p className="mt-2 text-sm md:text-xl text-gray-700">
                1. 이전 경력을 입력해주세요.
              </p>
              <textarea
                rows={7}
                value={prevCareer}
                onChange={(e) => {
                  setPrevCareer(e.target.value);
                }}
                name="prevCareer"
                id="prevCareer"
                placeholder="ex) 이전 경력사항을 입력해주세요"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-sky-400 focus:ring-sky-400 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <p className="mt-2 text-sm md:text-xl text-gray-700">
                2. 선호하는 직무 형태를 입력해주세요.
              </p>
              <select
                value={careerType}
                onChange={(e) => setCareerType(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-sky-400 focus:ring-sky-400 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="careerType"
                id="careerType"
              >
                <option value="">선호 직무 형태 (optional)</option>
                <option value="연봉이 높은">연봉이 높은</option>
                <option value="워라밸이 좋은">워라밸이 좋은</option>
                <option value="단순 작업이 많은">단순 작업이 많은</option>
              </select>
            </div>
            <div className="flex flex-col">
              <p className="mt-2 text-sm md:text-xl text-gray-700">
                3. 선호하는 근무 형태를 입력해주세요
              </p>
              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-sky-400 focus:ring-sky-400 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="workType"
                id="workType"
              >
                <option value="">선호 근무 형태 (optional)</option>
                <option value="풀타임">풀타임</option>
                <option value="파트타임">파트타임</option>
              </select>
            </div>
            <button
              className={`bg-sky-400 w-full hover:bg-sky-500 text-white font-bold mt-6 py-2 px-4 rounded
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
          </form>
        </div>
        {/* <div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>
            <textarea
              rows={
                jobRecommendation === ""
                  ? 7
                  : jobRecommendation.split("\n").length + 12
              }
              name="output"
              value={jobRecommendation}
              onChange={(e) => setJobRecommendation(e.target.value)}
              disabled={jobRecommendation === ""}
              id="output"
              placeholder="AI가 경력을 분석하여, 추천하는 직무 3가지가 상세한 이유와 함께 나옵니다."
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
            />
            <button
              onClick={handleCopy}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={jobRecommendation === ""}
            >
              {isCopied ? "복사되었습니다" : "복사하기"}
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

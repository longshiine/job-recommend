import React, { useState } from "react";

export default function Dashboard() {
  const [jobDescription, setJobDescription] = useState("");

  const [prevCareer, setPrevCareer] = useState("");
  const [careerType, setCareerType] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(jobDescription);
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
      if (data.jobDescription) {
        setJobDescription(data.jobDescription.trim());
      } else {
        alert("다시 시도해주세요");
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12 ">
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <label htmlFor="keywords" className="sr-only">
                이전 경력사항을 입력해주세요
              </label>
              <textarea
                rows={7}
                value={prevCareer}
                onChange={(e) => {
                  setPrevCareer(e.target.value);
                }}
                name="prevCareer"
                id="prevCareer"
                placeholder="이전 경력사항을 입력해주세요"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="careerType">
                선호하는 직무의 형태를 입력해주세요
              </label>
              <select
                value={careerType}
                onChange={(e) => setCareerType(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="careerType"
                id="careerType"
              >
                <option value="">선호 직무 형태 (optional)</option>
                <option value="연봉이 높은">연봉이 높은</option>
                <option value="워라밸이 좋은">워라밸이 좋은</option>
                <option value="단순 작업이 많은">단순 작업이 많은</option>
              </select>
            </div>
            <button
              className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded
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
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>
            <textarea
              rows={
                jobDescription === ""
                  ? 7
                  : jobDescription.split("\n").length + 12
              }
              name="output"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              disabled={jobDescription === ""}
              id="output"
              placeholder="AI가 경력을 분석하여, 추천하는 직무 3가지가 상세한 이유와 함께 나옵니다."
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
            />
            <button
              onClick={handleCopy}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={jobDescription === ""}
            >
              {isCopied ? "복사되었습니다" : "복사하기"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

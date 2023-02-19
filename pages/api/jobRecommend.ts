const generateRecommendation = async ({
  prevCareer,
  careerType,
  workType,
}: {
  prevCareer: string;
  careerType?: string;
  workType?: string;
}) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: `나는 새로운 일을 찾고 있어. 다음과 같은 요소를 만족하는 직무 3가지를 이유와 함께 추천해줄래?

          - 50대, 60대에게 적합한 직무를 찾고 있어.
          - 이전에는 ${prevCareer}. 이전의 경력이 도움이 되는 직무를 찾고 있어.
          - ${careerType} 직무를 찾고 있어.
          - ${workType} 직무를 찾고 있어.`,
          max_tokens: 1000,
          temperature: 0.6,
        }),
      }
    );
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      if (data) {
        return data.choices[0].text;
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default async function handler(req: any, res: any) {
  const { prevCareer, careerType, workType } = req.body;

  try {
    const jobRecommendation = await generateRecommendation({
      prevCareer,
      careerType,
      workType,
    });
    res.status(200).json({
      jobRecommendation,
    });
  } catch (err) {
    throw err;
  }
}

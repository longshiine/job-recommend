import Head from "next/head";

export default function PageHead() {
  return (
    <>
      <Head>
        <title>Seer | AI 직무 추천</title>
        <meta
          name="description"
          content="AI에게 새로운 직무를 추천받아보세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="og:description"
          content="AI에게 새로운 직무를 추천받아보세요!"
        />
        <meta
          property="og:image"
          content="https://job-recommend.vercel.app/banner.jpeg"
        />
      </Head>
    </>
  );
}

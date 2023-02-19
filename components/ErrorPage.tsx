import * as React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = "Error";

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>
            사용량이 많아 접속이 지연되고 있습니다.. 잠시 기다렸다 다시
            시도해주세요.
          </h1>

          {statusCode && <p>Error code: {statusCode}</p>}

          <img src="/error.png" alt="Error" className="width-100" />
        </main>
      </div>
    </>
  );
};

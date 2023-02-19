import * as React from "react";
import styles from "./styles.module.css";

export interface Site {
  name: string;
  domain: string;

  rootNotionPageId: string;
  rootNotionSpaceId: string;

  // settings
  html?: string;
  fontFamily?: string;
  darkMode?: boolean;
  previewImages?: boolean;

  // opengraph metadata
  description?: string;
  image?: string;
}

interface Page404Props {
  site: Site;
  pageId: string;
  error?: Error;
}

export const Page404: React.FC<Page404Props> = ({ site, pageId, error }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen py-2">
        <main className={styles.main}>
          <h1>Notion Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}

          <img src="/404.png" alt="404 Not Found" className="width-100" />
        </main>
      </div>
    </>
  );
};

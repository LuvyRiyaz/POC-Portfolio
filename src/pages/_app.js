import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import { appWithTranslation } from "next-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useEffect } from "react";
import { useRouter } from "next/router";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/common.json",
    },
    react: {
      useSuspense: false,
    },
  });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const html = document.documentElement;
    if (router.locale === "ar") {
      html.setAttribute("dir", "rtl");
    } else {
      html.setAttribute("dir", "ltr");
    }
  }, [router.locale]);

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);

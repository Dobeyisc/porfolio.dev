import { ui, defaultLanguage } from "./ui";

export function getLanguageFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}

export function useTranslate(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  };
}


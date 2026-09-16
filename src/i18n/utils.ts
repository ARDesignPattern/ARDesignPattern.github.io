import type { Locale } from "./ui";

export function localizePath(path: string, lang: Locale) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (lang === "en") {
    return normalizedPath;
  }

  return `/${lang}${normalizedPath}`;
}

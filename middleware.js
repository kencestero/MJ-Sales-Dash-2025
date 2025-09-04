import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// default + supported locales
const defaultLocale = "en";
const locales = ["en", "bn", "ar"];

// parse best locale from Accept-Language
function detectLocale(request) {
  const accepted = request.headers.get("accept-language") ?? "";
  const languages = new Negotiator({ headers: { "accept-language": accepted } }).languages();
  return match(languages, locales, defaultLocale);
}

// pull locale prefix from path (/en, /ar, etc)
function getPrefixLocale(pathname) {
  const m = pathname.match(/^\/([a-zA-Z-]{2,5})(\/|$)/);
  if (!m) return null;
  const code = m[1].toLowerCase();
  return locales.includes(code) ? code : null;
}

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  const prefixed = getPrefixLocale(pathname);
  if (prefixed) {
    // already has supported locale, continue
    return NextResponse.next();
  }

  // no prefix -> choose best and redirect
  const best = detectLocale(request) || defaultLocale;
  url.pathname = `/${best}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|assets|docs|.*\\..*).*)"]
};


export default function ({ $dayjs, i18n }) {
  const defaultLocale = i18n.defaultLocale;
  let locale = "";

  if (defaultLocale === "zh-CN") {
    locale = "zh-cn";
  }

  if (defaultLocale === "zh-TW") {
    locale = "zh-tw";
  }

  if (defaultLocale === "en-US") {
    locale = "en";
  }

  $dayjs.locale(locale);
}

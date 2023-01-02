import { languages, getAppLang } from "./utils";

window.languages = languages.map((lang) => lang.code);
window.defualtLang = languages[0].code;
window.getAppLang = getAppLang;

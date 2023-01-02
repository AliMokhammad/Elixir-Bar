export const languages = [
  { code: "tr", text: "Türk" },
  { code: "en", text: "English" },
];

export const validatePhoneNumber = (phoneNum) => {
  if (!phoneNum) return false;
  const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return regex.test(phoneNum);
};

export const validateEmail = (email) => {
  if (!email) return false;
  const regex = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
};

export const getAppLang = () => {
  let appLang = localStorage.getItem("lang");
  if (!window.languages.includes(appLang)) {
    appLang = window.defualtLang;
    localStorage.setItem("lang", appLang);
  }
  return appLang;
};

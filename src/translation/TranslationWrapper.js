import React from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import * as Translations from "./languages";
const Context = React.createContext();

const TranslationWrapper = (props) => {
  const {
    settings: { appLang },
  } = useSelector((state) => state);

  return (
    <IntlProvider messages={Translations[appLang]} locale={appLang}>
      {props.children}
    </IntlProvider>
  );
};
export default TranslationWrapper;

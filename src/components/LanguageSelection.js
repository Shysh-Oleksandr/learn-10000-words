import React from "react";
import LanguageCard from "./LanguageCard";
import langs from "./../resources/langData";
import { useGlobalContext } from "./../context";

const LanguageSelection = () => {
  const { currLangName, selectCurrentLanguage, chooseLang, lang } =
    useGlobalContext();

  return (
    <div className="language-selection">
      <div className="language-selection__header">
        <h2>Language Courses for {currLangName} Speakers</h2>
        <div className="i-speak">
          <span>I speak </span>
          <select
            className="language__select"
            onChange={selectCurrentLanguage}
            name="currentLanguage"
            id="currentLanguage"
            value={lang}
          >
            {langs.map((lang, index) => {
              return (
                <option
                  // selected={lang.langCode === currLangName}
                  key={index}
                  value={lang.langCode}
                >
                  {lang.langName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="language-selection__bottom">
        {langs.map((langEl, index) => {
          if (langEl.langName !== currLangName) {
            return (
              <LanguageCard lang={langEl} key={index} chooseLang={chooseLang} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default LanguageSelection;

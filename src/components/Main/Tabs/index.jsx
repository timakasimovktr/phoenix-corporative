import React, { useState } from "react";
import "./styles.scss";
import { useTranslation } from "react-i18next";

const Tabs = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className='tabsBlock'>
      <div className='container tabsContainer'>
        <div className='blockTabs'>
          <div
            className={toggleState === 1 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            {t("blocks.tabsBlock.title1")}
          </div>
          <div
            className={toggleState === 2 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            {t("blocks.tabsBlock.title2")}
          </div>
          <div
            className={toggleState === 3 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            {t("blocks.tabsBlock.title3")}
          </div>
          <div
            className={toggleState === 4 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            {t("blocks.tabsBlock.title4")}
          </div>
        </div>
        <div className='contentTabs'>
          <div className={toggleState === 1 ? "content activeContent" : "content"}>
            <h2>{t("blocks.tabsBlock.subtitle1")}</h2>
            <p>{t("blocks.tabsBlock.text1")}</p>
          </div>
          <div className={toggleState === 2 ? "content activeContent" : "content"}>
            <h2>{t("blocks.tabsBlock.subtitle2")}</h2>
            <p>{t("blocks.tabsBlock.text2")}</p>
          </div>
          <div className={toggleState === 3 ? "content activeContent" : "content"}>
            <h2>{t("blocks.tabsBlock.subtitle3")}</h2>
            <p>{t("blocks.tabsBlock.text3")}</p>
          </div>
          <div className={toggleState === 4 ? "content activeContent" : "content"}>
            <h2>{t("blocks.tabsBlock.subtitle4")}</h2>
            <p>{t("blocks.tabsBlock.text4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const Tabs = (props) => {
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
            {props.tab1}
          </div>
          <div
            className={toggleState === 2 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            {props.tab2}
          </div>
          <div
            className={toggleState === 3 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            {props.tab3}
          </div>
          <div
            className={toggleState === 4 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            {props.tab4}
          </div>
        </div>
        <div className='contentTabs'>
          <div className={toggleState === 1 ? "content activeContent" : "content"}>
            <h2>{props.title1}</h2>
            <p>{props.subtitle1}</p>
          </div>
          <div className={toggleState === 2 ? "content activeContent" : "content"}>
            <h2>{props.title2}</h2>
            <p>{props.subtitle2}</p>
          </div>
          <div className={toggleState === 3 ? "content activeContent" : "content"}>
            <h2>{props.title3}</h2>
            <p>{props.subtitle3}</p>
          </div>
          <div className={toggleState === 4 ? "content activeContent" : "content"}>
            <h2>{props.title4}</h2>
            <p>{props.subtitle4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

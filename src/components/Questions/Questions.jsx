/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import "./Questions.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function Questions(props) {
  const { t } = useTranslation();
  const [choosenCategory, setChoosenCategory] = useState(0);
  const [filteredSurvey, setFilteredSurvey] = useState([]);
  const [surveyStep, setSurveyStep] = useState(1);

  const closePopup = () => {
    const questionsWrapper = document.querySelector(".questionsCard");
    questionsWrapper.style.animation = "riseDown 0.5s ease-in-out 1";

    setTimeout(() => {
      props.setIsQuestions(false);
      setSurveyStep(1);
      questionsWrapper.style.animation = "";
    }, 500);
  };

  const surveyObj = [
    {
      surveyCategory: {
        id: 1,
        name: `${t("tests.first.name")}`,
        surveyQuestions: [
          {
            title: `${t("tests.first.surveyQuestions.first.title")}`,
            q1: `${t("tests.first.surveyQuestions.first.q1")}`,
            q2: `${t("tests.first.surveyQuestions.first.q2")}`,
          },
          {
            title: `${t("tests.first.surveyQuestions.second.title")}`,
            q1: `${t("tests.first.surveyQuestions.second.q1")}`,
            q2: `${t("tests.first.surveyQuestions.second.q2")}`,
            q3: `${t("tests.first.surveyQuestions.second.q3")}`,
            q4: `${t("tests.first.surveyQuestions.second.q4")}`,
            q5: `${t("tests.first.surveyQuestions.second.q5")}`,
            q6: `${t("tests.first.surveyQuestions.second.q6")}`,
          },
          {
            title: `${t("tests.first.surveyQuestions.third.title")}`,
            q1: `${t("tests.first.surveyQuestions.third.q1")}`,
            q2: `${t("tests.first.surveyQuestions.third.q2")}`,
            q3: `${t("tests.first.surveyQuestions.third.q3")}`,
          },
          {
            title: `${t("tests.first.surveyQuestions.forth.title")}`,
            q1: `${t("tests.first.surveyQuestions.forth.q1")}`,
            q2: `${t("tests.first.surveyQuestions.forth.q2")}`,
            q3: `${t("tests.first.surveyQuestions.forth.q3")}`,
            q4: `${t("tests.first.surveyQuestions.forth.q4")}`,
          },
          {
            title: `${t("tests.first.surveyQuestions.fifth.title")}`,
            q1: `${t("tests.first.surveyQuestions.fifth.q1")}`,
            q2: `${t("tests.first.surveyQuestions.fifth.q2")}`,
            q3: `${t("tests.first.surveyQuestions.fifth.q3")}`,
          },
          {
            title: `${t("tests.first.surveyQuestions.sixth.title")}`,
            q1: `${t("tests.first.surveyQuestions.sixth.q1")}`,
            q2: `${t("tests.first.surveyQuestions.sixth.q2")}`,
            q3: `${t("tests.first.surveyQuestions.sixth.q3")}`,
          },
        ],
        product: "product/10",
      },
    },
    {
      surveyCategory: {
        id: 2,
        name: `${t("tests.second.name")}`,
        surveyQuestions: [
          {
            title: `${t("tests.second.surveyQuestions.first.title")}`,
            q1: `${t("tests.second.surveyQuestions.first.q1")}`,
            q2: `${t("tests.second.surveyQuestions.first.q2")}`,
          },
          {
            title: `${t("tests.second.surveyQuestions.second.title")}`,
            q1: `${t("tests.second.surveyQuestions.second.q1")}`,
            q2: `${t("tests.second.surveyQuestions.second.q2")}`,
            q3: `${t("tests.second.surveyQuestions.second.q3")}`,
            q4: `${t("tests.second.surveyQuestions.second.q4")}`,
            q5: `${t("tests.second.surveyQuestions.second.q5")}`,
            q6: `${t("tests.second.surveyQuestions.second.q6")}`,
          },
          {
            title: `${t("tests.second.surveyQuestions.third.title")}`,
            q1: `${t("tests.second.surveyQuestions.third.q1")}`,
            q2: `${t("tests.second.surveyQuestions.third.q2")}`,
            q3: `${t("tests.second.surveyQuestions.third.q3")}`,
          },
          {
            title: `${t("tests.second.surveyQuestions.forth.title")}`,
            q1: `${t("tests.second.surveyQuestions.forth.q1")}`,
            q2: `${t("tests.second.surveyQuestions.forth.q2")}`,
            q3: `${t("tests.second.surveyQuestions.forth.q3")}`,
            q4: `${t("tests.second.surveyQuestions.forth.q4")}`,
          },
          {
            title: `${t("tests.second.surveyQuestions.fifth.title")}`,
            q1: `${t("tests.second.surveyQuestions.fifth.q1")}`,
            q2: `${t("tests.second.surveyQuestions.fifth.q2")}`,
            q3: `${t("tests.second.surveyQuestions.fifth.q3")}`,
          },
          {
            title: `${t("tests.second.surveyQuestions.sixth.title")}`,
            q1: `${t("tests.second.surveyQuestions.sixth.q1")}`,
            q2: `${t("tests.second.surveyQuestions.sixth.q2")}`,
            q3: `${t("tests.second.surveyQuestions.sixth.q3")}`,
          },
        ],
        product: "product/5",
      },
    },
    // {
    //   surveyCategory: {
    //     id: 3,
    //     name: "Диабет",
    //     surveyQuestions: [
    //       "Қандли диабет билан касалланган қариндошларингиз борми?",
    //       "Қондаги глюкоза миқдорини қанчалик тез-тез текширасиз?",
    //       "Қандли диабет учун тавсия етилган парҳезга риоя қиласизми?",
    //       "Қондаги глюкоза миқдорини назорат қилиш учун insulin ёки бошқа дори-дармонларни қабул қиласизми?",
    //     ],
    //     product: "product/5",
    //   },
    // },
  ];

  return (
    <>
      <div
        className={props.visible ? "questionsWrapper" : "hidden"}
        onClick={() => closePopup()}
      >
        <ToastContainer />
        <div
          className='questionsCard'
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className='closePopup'
            onClick={() => closePopup()}
          ></div>
          <div
            className='surveyStep1 surveyStep'
            data-hiddenelem={surveyStep !== 1}
          >
            <h3> {t("tests.optionTitle.title3")}</h3>
            <select
              name=''
              id=''
            >
              <option
                value=''
                hidden
              >
                {t("tests.optionTitle.title2")}
              </option>
              <option value=''> {t("tests.valueAge.value1")}</option>
              <option value=''>{t("tests.valueAge.value2")}</option>
              <option value=''>{t("tests.valueAge.value3")}</option>
              <option value=''>{t("tests.valueAge.value4")}</option>
            </select>
            <select
              name=''
              id=''
              value={choosenCategory}
              onChange={(e) => setChoosenCategory(e.target.value)}
            >
              <option
                value=''
                hidden
              >
                {t("tests.optionTitle.title1")}
              </option>
              {surveyObj.map((item) => (
                <option
                  key={item.surveyCategory.id}
                  value={item.surveyCategory.id}
                >
                  {item.surveyCategory.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                if (choosenCategory === 0) {
                  toast.error("Касаллик тоифасини танланг!");
                } else {
                  setSurveyStep(2);
                  setFilteredSurvey(surveyObj.filter((item) => +item.surveyCategory.id === +choosenCategory));
                  setChoosenCategory(0);
                }
              }}
            >
              Следущий
            </button>
          </div>

          {filteredSurvey[0]?.surveyCategory?.surveyQuestions.map((item, index) => (
            <div
              className={`surveyStep${index + 2} surveyStep`}
              data-hiddenelem={surveyStep !== index + 2}
              key={index}
            >
              <h3>{item.title}</h3>
              <select
                name=''
                id=''
                onChange={(e) => setChoosenCategory(e.target.value)}
              >
                <option
                  value=''
                  hidden
                >
                  {t("tests.optionTitle.title4")}
                </option>
                <option value=''>{item?.q1}</option>
                <option value=''>{item?.q2}</option>
                <option value=''>{item?.q3}</option>
                <option value=''>{item?.q4}</option>
                <option value=''>{item?.q5}</option>
                <option value=''>{item?.q6}</option>
              </select>
              <button
                onClick={() => {
                  if (choosenCategory === 0) {
                    toast.error("Жавоб вариантларидан бирини танланг!");
                  } else {
                    if (index !== filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1) {
                      setSurveyStep(surveyStep + 1);
                    }
                    if (index === filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1) {
                      toast.success("Тавсия етилган маҳсулот 3 сонияда очилади!");
                      setTimeout(() => {
                        window.location.href = `/${filteredSurvey[0]?.surveyCategory?.product}`;
                      }, 3000);
                    }
                    setChoosenCategory(0);
                  }
                }}
              >
                {index === filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1 ? "Тўлиқ" : "Кейинги"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Questions;

/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import "./Questions.scss";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Questions(props) {
  const { t } = useTranslation();
  const [choosenCategory, setChoosenCategory] = useState(1);
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
  ];

  return (
    <>
      <div
        className={props.visible ? "questionsWrapper" : "hidden"}
        onClick={() => closePopup()}
      >
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

            <button
              onClick={() => {
                if (choosenCategory === 0) {
                  toast.error(`${t("tests.textAlert.alert1")}`);
                } else {
                  setSurveyStep(2);
                  setFilteredSurvey(surveyObj.filter((item) => +item.surveyCategory.id === +choosenCategory));
                  setChoosenCategory(1);
                }
              }}
            >
              {t("tests.btnText.next")}
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
                {item?.q1 ? <option value=''>{item?.q1}</option> : null}
                {item?.q2 ? <option value=''>{item?.q2}</option> : null}
                {item?.q3 ? <option value=''>{item?.q3}</option> : null}
                {item?.q4 ? <option value=''>{item?.q4}</option> : null}
                {item?.q5 ? <option value=''>{item?.q5}</option> : null}
                {item?.q6 ? <option value=''>{item?.q6}</option> : null}
                {/* <option value=''>{item?.q2}</option>
                <option value=''>{item?.q3}</option>
                <option value=''>{item?.q4}</option>
                <option value=''>{item?.q5}</option>
                <option value=''>{item?.q6}</option> */}
              </select>
              <button
                onClick={() => {
                  if (choosenCategory === 0) {
                    toast.error(`${t("tests.textAlert.alert2")}`);
                  } else {
                    if (index !== filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1) {
                      setSurveyStep(surveyStep + 1);
                    }
                    if (index === filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1) {
                      toast.success(`${t("tests.textAlert.alert3")}`);
                      setTimeout(() => {
                        window.location.href = `/${filteredSurvey[0]?.surveyCategory?.product}`;
                      }, 3000);
                    }
                    setChoosenCategory(1);
                  }
                }}
              >
                {index === filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1
                  ? ` ${t("tests.btnText.theEnd")}`
                  : ` ${t("tests.btnText.next")}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Questions;

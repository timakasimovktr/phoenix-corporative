/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import "./Questions.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Questions(props) {
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
        name: "Гипертония",
        surveyQuestions: [
          "Қон босимингизни қанчалик тез-тез ўлчайсиз?",
          "Яқинда сизда юқори қон босими ҳолатлари бўлганми?",
          "Сизнингча, қон босимингизга қандай омиллар таъсир қилади?",
          "Принимаете ли вы лекарства для контроля артериального давления?",
        ],
        product: "product/10",
      },
    },
    {
      surveyCategory: {
        id: 2,
        name: "Диабет",
        surveyQuestions: [
          "Қандли диабет билан касалланган қариндошларингиз борми?",
          "Қондаги глюкоза миқдорини қанчалик тез-тез текширасиз?",
          "Қандли диабет учун тавсия етилган парҳезга риоя қиласизми?",
          "Қондаги глюкоза миқдорини назорат қилиш учун insulin ёки бошқа дори-дармонларни қабул қиласизми?",
        ],
        product: "product/5",
      },
    },
    {
      surveyCategory: {
        id: 3,
        name: "Диабет",
        surveyQuestions: [
          "Қандли диабет билан касалланган қариндошларингиз борми?",
          "Қондаги глюкоза миқдорини қанчалик тез-тез текширасиз?",
          "Қандли диабет учун тавсия етилган парҳезга риоя қиласизми?",
          "Қондаги глюкоза миқдорини назорат қилиш учун insulin ёки бошқа дори-дармонларни қабул қиласизми?",
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
        <ToastContainer />
        <div className="questionsCard" onClick={(e) => e.stopPropagation()}>
          <div className="closePopup" onClick={() => closePopup()}></div>
          <div
            className="surveyStep1 surveyStep"
            data-hiddenelem={surveyStep !== 1}
          >
            <h3>Сўровдан ўтинг</h3>
            <select name="" id="">
              <option value="" hidden>
                Ёш
              </option>
              <option value="">10-30 йиллар</option>
              <option value="">30-50 йиллар</option>
              <option value="">50-70 йиллар</option>
              <option value="">70+ йиллар</option>
            </select>
            <select
              name=""
              id=""
              value={choosenCategory}
              onChange={(e) => setChoosenCategory(e.target.value)}
            >
              <option value="" hidden>
                Касаллик тоифаси
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
                  setFilteredSurvey(
                    surveyObj.filter(
                      (item) => +item.surveyCategory.id === +choosenCategory
                    )
                  );
                  setChoosenCategory(0);
                }
              }}
            >
              Кейинги
            </button>
          </div>

          {filteredSurvey[0]?.surveyCategory?.surveyQuestions.map(
            (item, index) => (
              <div
                className={`surveyStep${index + 2} surveyStep`}
                data-hiddenelem={surveyStep !== index + 2}
                key={index}
              >
                <h3>{item}</h3>
                <select
                  name=""
                  id=""
                  onChange={(e) => setChoosenCategory(e.target.value)}
                >
                  <option value="" hidden>
                    ҳа / йўқ / баъзан / доимий / камдан-кам
                  </option>
                  <option value="">ҳа</option>
                  <option value="">йўқ</option>
                  <option value="">баъзан</option>
                  <option value="">доимий</option>
                  <option value="">камдан-кам</option>
                </select>
                <button
                  onClick={() => {
                    if (choosenCategory === 0) {
                      toast.error("Жавоб вариантларидан бирини танланг!");
                    } else {
                      if (
                        index !==
                        filteredSurvey[0]?.surveyCategory?.surveyQuestions
                          .length -
                          1
                      ) {
                        setSurveyStep(surveyStep + 1);
                      }
                      if (
                        index ===
                        filteredSurvey[0]?.surveyCategory?.surveyQuestions
                          .length -
                          1
                      ) {
                        toast.success(
                          "Тавсия етилган маҳсулот 3 сонияда очилади!"
                        );
                        setTimeout(() => {
                          window.location.href = `/${filteredSurvey[0]?.surveyCategory?.product}`;
                        }, 3000);
                      }
                      setChoosenCategory(0);
                    }
                  }}
                >
                  {index ===
                  filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1
                    ? "Тўлиқ"
                    : "Кейинги"}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Questions;

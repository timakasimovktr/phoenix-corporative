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
          "Как часто вы измеряете артериальное давление?",
          "Были ли у вас случаи высокого артериального давления в последнее время?",
          "Какие факторы, на ваш взгляд, влияют на ваше кровяное давление?",
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
          "Есть ли у вас родственники с диабетом?",
          "Как часто вы проверяете уровень глюкозы в крови?",
          "Следите ли вы за диетой, рекомендованной для диабетиков?",
          "Принимаете ли вы инсулин или другие лекарства для контроля уровня глюкозы в крови?",
        ],
        product: "product/5",
      },
    },
    {
      surveyCategory: {
        id: 3,
        name: "Диабет",
        surveyQuestions: [
          "Есть ли у вас родственники с диабетом?",
          "Как часто вы проверяете уровень глюкозы в крови?",
          "Следите ли вы за диетой, рекомендованной для диабетиков?",
          "Принимаете ли вы инсулин или другие лекарства для контроля уровня глюкозы в крови?",
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
            <h3>Пройдите Опрос</h3>
            <select name="" id="">
              <option value="" hidden>
                Возраст
              </option>
              <option value="">10-30 лет</option>
              <option value="">30-50 лет</option>
              <option value="">50-70 лет</option>
              <option value="">70+ лет</option>
            </select>
            <select
              name=""
              id=""
              value={choosenCategory}
              onChange={(e) => setChoosenCategory(e.target.value)}
            >
              <option value="" hidden>
                Категория болезни
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
                  toast.error("Выберите категорию болезни!");
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
              Далее
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
                    Да/Нет/Иногда/Часто/Редко
                  </option>
                  <option value="">Да</option>
                  <option value="">Нет</option>
                  <option value="">Иногда</option>
                  <option value="">Часто</option>
                  <option value="">Редко</option>
                </select>
                <button
                  onClick={() => {
                    if (choosenCategory === 0) {
                      toast.error("Выберите один из вариантов ответа!");
                    } else {
                      if (index !== filteredSurvey[0]?.surveyCategory?.surveyQuestions.length - 1) {
                        setSurveyStep(surveyStep + 1);
                      }
                      if (
                        index ===
                        filteredSurvey[0]?.surveyCategory?.surveyQuestions
                          .length -
                          1
                      ) {
                        toast.success(
                          "Рекомендуемый товар откроется через 3 секунды!"
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
                    ? "Завершить"
                    : "Далее"}
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

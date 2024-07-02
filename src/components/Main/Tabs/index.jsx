import React, { useState } from "react";
import "./styles.scss";

const Tabs = () => {
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
            Надежность
          </div>
          <div
            className={toggleState === 2 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Состав
          </div>
          <div
            className={toggleState === 3 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Эстетика
          </div>
          <div
            className={toggleState === 4 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Помощь
          </div>
        </div>
        <div className='contentTabs'>
          <div className={toggleState === 1 ? "content activeContent" : "content"}>
            <h2>Мы это - надежность</h2>
            <p>
              Euphoria на рынке с 2017 года и за это время помогла уже более чем +100.000 человек. Нам доверяют самое
              дорогое.
            </p>
          </div>
          <div className={toggleState === 2 ? "content activeContent" : "content"}>
            <h2>Наше преимущество - состав</h2>
            <p>
              Опираемся на знание природы. Наши технологии основаны на принципах создания биодоступных форм нутриентов,
              необходимых для обеспечения устойчивого сохранения организма человека.
            </p>
          </div>
          <div className={toggleState === 3 ? "content activeContent" : "content"}>
            <h2>Эстетика - это про нас</h2>
            <p>
              Создаем красоту. Мы подошли к тому, чтобы наши продукты не только приносили пользу здоровью, но и
              доставляли эстетическое удовольствие при использовании.
            </p>
          </div>
          <div className={toggleState === 4 ? "content activeContent" : "content"}>
            <h2>Наша команда - специалисты своего дела</h2>
            <p>
              Наши специалисты всегда готовы помочь вам в подборе нужного продукта. Мы не придерживаемся принципа «лишь
              бы продать». Наш ориентир — ваши цели и потребности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

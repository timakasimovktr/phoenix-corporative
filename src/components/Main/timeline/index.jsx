import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <section
      className='timeline'
      id='learning'
    >
      <div className='container'>
        <div className='timelineItems'>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>2017</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>{t("timeline.year1")}</p>
            </div>
          </div>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>2020</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>{t("timeline.year2")}</p>
            </div>
          </div>

          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>2022</h4>
            </div>
            <div className='timelineText'>
              <p className='text'> {t("timeline.year3")}</p>
            </div>
          </div>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>2024</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>{t("timeline.year4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

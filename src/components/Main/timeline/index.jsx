import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <section className='sectionTimeline'>
      <div className='container'>
        <div className='timelineTitle'>
          <h2 className='title'>{t("timeline.title")}</h2>
        </div>
        <div className='contactsLink'>
          <Link
            to='/contacts'
            className='link'
          >
            {t("timeline.link")}
          </Link>
        </div>
      </div>
      <div className='timeline'>
        <div className='timeline-dot dot-2018'>
          <p className='year'>2018</p>
          <div className='timeline-dot-text'>{t("timeline.year1")}</div>
        </div>
        <div className='timeline-dot dot-2019'>
          <p className='year'>2019</p>
          <div className='timeline-dot-text'>{t("timeline.year2")}</div>
        </div>
        <div className='timeline-dot dot-2020'>
          <p className='year'>2020</p>
          <div className='timeline-dot-text'>{t("timeline.year3")}</div>
        </div>
        <div className='timeline-dot dot-2021'>
          <p className='year'>2021</p>
          <div className='timeline-dot-text'>{t("timeline.year4")}</div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

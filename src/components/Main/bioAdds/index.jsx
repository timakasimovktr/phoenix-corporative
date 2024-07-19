import React, { useEffect, useRef, useState } from "react";
import "./style.sass";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CircularText = (props) => {
  const [transformedText, setTransformedText] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const text = "EUPHORIA GROUP EUPHORIA GROUP EUPHORIA GROUP"; // Replace this with your actual text or fetch it from somewhere
    const transformed = text
      .split("")
      .map((char, i) => `<span style="transform:rotate(${i * 12}deg)">${char}</span>`)
      .join("");
    setTransformedText(transformed);
  }, []);
  return (
    <section
      className='marketing'
      id='marketingSection'
    >
      <div className='marketingHeading'>
        <h2
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-offset='20'
        >
          {t("headings.bioAdds")}
        </h2>
        <p
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-offset='20'
        >
          {t("blocks.bioAdds.subtitle1")}
          <br />
          {t("blocks.bioAdds.subtitle2")}
        </p>
        <Link
          onClick={() => props.setIsQuestions(true)}
          className='br10'
        >
          {t("blocks.bioAdds.buttonText")}
        </Link>
      </div>
      <div className='marketingImg'>
        <div className='circle'>
          <div className='logo'></div>
          <div className='text'>
            <p dangerouslySetInnerHTML={{ __html: transformedText }}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularText;

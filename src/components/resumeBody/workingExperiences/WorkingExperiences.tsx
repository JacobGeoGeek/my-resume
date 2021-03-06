import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { IWorkingExperience } from "../../../DTO/IWorkingExperience";
import "../../../index.css";
import { Work } from "./Work";

export const WorkingExperiences: FunctionComponent<{ workingExperieces: Array<IWorkingExperience> }> = (props) => {
  const { t } = useTranslation();

  const listWorks = props.workingExperieces.map((item, index) => <Work workingExperience={item} key={index} />);

  return (
    <section className="resume-section experience-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{t("workExperience")}</h2>
      <div className="resume-section-content">
        <div className="resume-timeline position-relative">{listWorks}</div>
      </div>
    </section>
  );
};

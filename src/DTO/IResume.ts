import { IEducation } from "./IEducation";
import { IGeneralInformation } from "./IGeneralInformation";
import { ISkills } from "./ISkills";
import { IWorkingExperience } from "./IWorkingExperience";
import { IEvent } from "./IEvent";

export interface IResume {
  generalInformation: IGeneralInformation;
  educations: Array<IEducation>;
  skills: ISkills;
  workingExperiences: Array<IWorkingExperience>;
  events: Array<IEvent>;
  aboutMe: Array<string>;
}
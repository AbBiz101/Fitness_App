export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUS = "contactUS",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassType {
  name: string;
  image: string;
  description: string;
}

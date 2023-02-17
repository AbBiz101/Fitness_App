export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUS = "contactUS",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

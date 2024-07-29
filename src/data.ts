export const searchMenu = ["All", "Clothing", "Shoes", "Accessories"];

export type NavButtonIdentifier =
  | "Description"
  | "Review"
  | "AdditionalInformation";

export type NavButtonsProps = {
  id: number;
  title: string;
  active: boolean;
  component: NavButtonIdentifier;
};

export const navButtons: NavButtonsProps[] = [
  {
    id: 1,
    title: "Description",
    component: "Description",
    active: true,
  },
  {
    id: 2,
    title: "Reviews",
    component: "Review",
    active: false,
  },
  {
    id: 3,
    title: "Additional Information",
    component: "AdditionalInformation",
    active: false,
  },
];

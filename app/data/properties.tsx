export type PropertyType = {
  id: number;
  district: string;
  title: string;
  bhk: string;
  price: string;
  size: string;
  year: string;
};
export const properties: PropertyType[] = [
  {
    id: 1,
    district: "Thrissur",
    title: "2 BHK House in Thrissur",
    bhk: "2 BHK",
    price: "Below 50 Lakh",
    size: "500 - 1000 sqft",
    year: "2000 - 2010",
  },
  {
    id: 2,
    district: "Idukki",
    title: "1 BHK Cottage",
    bhk: "1 BHK",
    price: "Below 50 Lakh",
    size: "Below 500 sqft",
    year: "After 2020",
  },
  {
    id: 3,
    district: "Thrissur",
    title: "3 BHK House in Thrissur",
    bhk: "3 BHK",
    price: "50 Lakh - 1 Crore",
    size: "1000 - 2000 sqft",
    year: "2010 - 2020",
  }
];
import {
  VideoLabel as VideoLabelIcon,
  PeopleAlt as PeopleAltIcon,
  Liquor as LiquorIcon,
} from "@mui/icons-material";

const DataProps = {
  Steps: ["PersonalInformation", "CocktailInformation", "Overview"],
  Icons: {
    1: <PeopleAltIcon />,
    2: <LiquorIcon />,
    3: <VideoLabelIcon />,
  },
  InitUserForm: {
    barName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    category: null,
    drinkType: null,
    glassType: null,
    ingredients: [],
  },
  Personal: [
    { id: "barName", name: "barName" },
    { id: "firstName", name: "firstName" },
    { id: "lastName", name: "lastName" },
    { id: "phone", name: "phone" },
    { id: "email", name: "email" },
  ],
  Cocktail: [
    {
      id: "category",
      name: "category",
      options: "categories",
      optionKey: "strCategory",
    },
    {
      id: "drinkType",
      name: "drinkType",
      options: "alcoholicTypes",
      optionKey: "strAlcoholic",
    },
    {
      id: "glassType",
      name: "glassType",
      options: "glasses",
      optionKey: "strGlass",
    },
    {
      id: "ingredients",
      name: "ingredients",
      options: "ingredients",
      optionKey: "strIngredient1",
      multiple: true,
    },
  ],
};
export default DataProps;

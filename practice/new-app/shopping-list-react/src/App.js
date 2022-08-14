import "./App.css";

import { Welcome } from "./components/Welcome";
import { List } from "./components/List";
import { Button } from "./components/Button";

const shoppingList = ["pear", "apple", "milk", "chips", "ketchup"];

export const App = () => {
  return (
    <>
      <Welcome insertName="Abdi Osman" />
      <List shoppingList={shoppingList} />
      <Button />
    </>
  );
};

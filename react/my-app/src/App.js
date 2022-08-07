import { HelloDiv } from "./components/HelloDiv";
import { Box } from "./components/Box";

import "./App.css";

const schoolRegister = ["Matt", "James", "Tom", "Harry"];

export const App = () => {
  return (
    <>
      <HelloDiv creatorName="James Maddison" />
      <Box schoolRegister={schoolRegister} />
    </>
  );
};

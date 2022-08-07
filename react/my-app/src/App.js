import { HelloDiv } from "./components/HelloDiv";
import { Box } from "./components/Box";

const schoolRegister = ["Matt", "James", "Tom", "Harry"];

export const App = () => {
  return (
    <>
      <HelloDiv creatorName="James Maddison" />
      <Box schoolRegister={schoolRegister} />
    </>
  );
};

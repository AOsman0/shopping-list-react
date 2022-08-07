export const HelloDiv = (props) => {
  console.log(props);
  return <h1 className="my-name">Hello! My Name is {props.creatorName}</h1>;
};

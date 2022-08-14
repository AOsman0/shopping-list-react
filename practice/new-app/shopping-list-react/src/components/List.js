export const List = ({ shoppingList }) => {
  return (
    <ol>
      {shoppingList.map((lists) => (
        <li>{lists}</li>
      ))}
    </ol>
  );
};

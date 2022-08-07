export const Box = ({ schoolRegister }) => {
  return (
    <ol>
      {schoolRegister.map((register) => (
        <li>{register}</li>
      ))}
    </ol>
  );
};

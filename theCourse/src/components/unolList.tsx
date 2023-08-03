interface ListProps {
  children: any;
  day: any;
}

const UnOrderList = ({ children, day }: ListProps) => {
  return (
    <>
      <h1>The Message</h1>
      <ul>
        <li>Hello</li>
        <li>World</li>
        <li>My Love!</li>
      </ul>
      <p>Your Lucky number is {children}</p>
      <h2>This Year is: {day}</h2>
    </>
  );
};

export default UnOrderList;

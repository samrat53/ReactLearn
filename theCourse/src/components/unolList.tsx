import "./unolStyle.css"

interface ListProps {
  children: any;
  day: any;
}

const UnOrderList = ({ children, day }: ListProps) => {
  const newImg= "https://picsum.photos/200";
  return (
    <div className="container">
      <h1 className="message">The Message</h1>
      <ul>
        <li>Hello</li>
        <li>World</li>
        <li>My Love!</li>
      </ul>
      <p>Your Lucky number is {children}</p>
      <h2>This Year is: {day}</h2>
      <img src={newImg + "?grayscale"} className="randImg"></img>
      <pre className="tag">Refresh to Generate & Wait</pre>
    </div>
  );
};

export default UnOrderList;

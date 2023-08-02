interface buttonProps {
  children: string;
  onMouseClick: () => void;
  color?: 'primary' | 'danger' | 'success'; //? means its optional
}

const Button = ({ children, onMouseClick, color }: buttonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onMouseClick}>
      {children}
    </button>
  );
};

export default Button;

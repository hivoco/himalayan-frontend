// import { Link } from "react-router-dom";

const Button = ({ title, className, onClick }) => {
  // border 3 px is too specifc
  return (
    <button
      onClick={onClick}
      className={`font-Poppins  text-white text-center border-[3px] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;

import { Link } from "react-router-dom";

const Button = ({ title, className, navigateUrl }) => {
  // border 3 px is too specifc
  return (
    <Link
      to={navigateUrl}
      //   onClick={ ()=> navigate(navigateUrl)}
      className={`font-Poppins bg-primaryPurple text-white text-center border-[3px] ${className}`}
    >
      {title}
    </Link>
  );
};

export default Button;

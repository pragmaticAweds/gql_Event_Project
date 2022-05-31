interface IBtn {
  title?: string;
  onClick?: () => void;
  outline?: boolean;
  bg?: string;
}

const Button = ({ title, onClick, bg, outline }: IBtn) => {
  return (
    <button
      className={`${
        outline
          ? `${bg || "border-[#01fdfd]"} border-[1px]`
          : `${bg || "bg-[#01fdfd]"}`
      }  outline-none border-[1px] border-solid rounded-[3px]   py-1 px-4 mr-4 hover:bg-[#01a7a7] hover:text-white;`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

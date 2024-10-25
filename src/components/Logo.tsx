import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Logo;

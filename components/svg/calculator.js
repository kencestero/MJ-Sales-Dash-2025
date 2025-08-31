const Calculator = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8" />
      <path d="M8 10h8" />
      <path d="M10 14h.01" />
      <path d="M14 14h.01" />
      <path d="M10 18h.01" />
      <path d="M14 18h.01" />
    </svg>
  );
};
export default Calculator;

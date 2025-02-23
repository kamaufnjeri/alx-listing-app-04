import { PillProps } from "@/interfaces";

  
  const Pill: React.FC<PillProps> = ({ label, onClick }) => {
    return (
      <span
        onClick={onClick}
        className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-300"
      >
        {label}
      </span>
    );
  };
  
  export default Pill;
  
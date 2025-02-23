import Pill from "./Pill";

const filters = ["Top Villa", "Self Checkin", "Mountain View", "Beachfront"];

const FilterSection: React.FC = () => {
  const handleFilterClick = (filter: string) => {
    alert(`Filter clicked: ${filter}`);
  };

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {filters.map((filter) => (
        <Pill key={filter} label={filter} onClick={() => handleFilterClick(filter)} />
      ))}
    </div>
  );
};

export default FilterSection;
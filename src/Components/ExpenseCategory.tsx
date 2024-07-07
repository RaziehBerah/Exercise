import { categories } from "./Category";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseCategory = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option>All Categories</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseCategory;

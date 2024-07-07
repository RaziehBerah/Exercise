import { useForm } from "react-hook-form";
import { categories } from "./Category";

interface FormData {
  description: string;
  amount: number;
  category: string;
}
interface Props {
  onSubmitForm: (data: FormData) => void;
}

const ExpensesForm = ({ onSubmitForm }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitForm(data);
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          {...register("description")}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          {...register("amount")}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option>All Categories</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpensesForm;

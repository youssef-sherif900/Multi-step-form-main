import { UseFormRegisterReturn } from "react-hook-form";

type inputProps = {
  placeholder: string;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error: string | undefined;
  required?:boolean
};
function TextInput({
  placeholder,
  label,
  type,
  register,
  error,
  required
}: inputProps) {
  return (
    <div className="py-3">
      <div className="flex justify-between">
        <label className="text-md font-medium text-blue-900 py-2">
          {label}
        </label>
        <p className="text-red-600 py-2">{error}</p>
      </div>
      <input
        className="placeholder:font-semibold p-2 w-[450px] h-12 border-[1px] border-gray-300 rounded-md
         required:border-2 required:outline-none required:border-red-600 required:ring-0
          focus:border-2 focus:border-purple-600 focus:ring-0 focus:outline-none
          "
        type={type}
        placeholder={placeholder}
        {...register}
        required={required}
      />
    </div>
  );
}

export default TextInput;

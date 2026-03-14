export const Input = ({
  value,
  handleChange,
  placeholder,
}: {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <div className="flex bg-white p-2 items-center rounded-2xl w-60 h-10 px-4">
      <input
        onChange={handleChange}
        value={value}
        className="outline-none border-none text-black"
        placeholder={placeholder}
      />
    </div>
  );
};

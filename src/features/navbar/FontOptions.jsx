import { useDict } from "../../context/DictContext";

export default function FontOptions() {
  const { darkMode, handleFont } = useDict();

  return (
    <select
      className={`${
        darkMode ? "text-white bg-black" : "bg-white text-black"
      } pr-2 outline-none text-center text-lg font-semibold`}
      onChange={(e) => {
        handleFont(e.target.value);
      }}
    >
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
    </select>
  );
}

import { useDict } from "./context/DictContext";

export default function Loader() {
  const { darkMode } = useDict();
  return (
    <div className="flex items-center justify-center h-[80%]">
      <div className={`loader ${darkMode ? "text-white" : "text-black"}`}></div>
    </div>
  );
}

import { useState } from "react";
import { FaWindows } from "react-icons/fa";
import StartMenu from "./StartMenu";

export default function Taskbar() {
  const [showStart, setShowStart] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 w-full h-10 md:h-12 text-xs md:text-sm bg-[#0c3b71] flex items-center justify-between text-white px-2">
      <div className="flex items-center space-x-2 relative">
        <button
          onClick={() => setShowStart(!showStart)}
          className="flex items-center gap-2 bg-[#1a529a] hover:bg-[#326cc1] px-3 py-1 rounded-sm text-sm font-semibold"
        >
          <FaWindows className="text-lg" /> Start
        </button>

        {showStart && <StartMenu />}
      </div>

      <div className="text-sm font-mono">
        🕒 {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
}

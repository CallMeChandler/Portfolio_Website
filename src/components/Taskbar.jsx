import { useState } from "react";
import { FaWindows } from "react-icons/fa";

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

        {showStart && (
          <div className="absolute bottom-10 left-0 w-48 bg-white text-black shadow-lg border z-50">
            <div className="p-2 border-b font-semibold bg-[#dbe9ff]">Aakarsh XP</div>
            <div className="p-2 hover:bg-gray-200 cursor-pointer">👨‍💻 About Me</div>
            <div className="p-2 hover:bg-gray-200 cursor-pointer">💼 Projects</div>
            <div className="p-2 hover:bg-gray-200 cursor-pointer">📄 Resume</div>
          </div>
        )}
      </div>

      <div className="text-sm font-mono">
        🕒 {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
}

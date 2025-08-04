import { Rnd } from "react-rnd";
import "../styles/XPExplorerWindow.css";

export default function XPExplorerWindow({ title, onClose, sections = [], folders = [] }) {
    const hasSections = Array.isArray(sections) && sections.length > 0;
    const hasFolders = Array.isArray(folders) && folders.length > 0;


    console.log("XPExplorerWindow rendered for:", title);

    return (
        <Rnd
            default={{ x: 150, y: 100, width: 750, height: 500 }}
            minWidth={600}
            minHeight={400}
            bounds="parent"
            className="explorer-window"
        >
            {/* Top blue bar */}
            <div className="bg-blue-700 text-white flex justify-between items-center px-2 py-1 text-sm font-bold">
                <span className="flex gap-2 items-center">
                    <img src="/assets/Folder.png" alt="folder" className="w-4 h-4" />
                    {title}
                </span>
                <button onClick={onClose} className="hover:bg-red-600 px-2">✕</button>
            </div>

            {/* Menu bar */}
            <div className="explorer-menubar">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Favorites</span>
                <span>Tools</span>
                <span>Help</span>
            </div>

            {/* Toolbar */}
            <div className="explorer-toolbar">
                <button className="toolbar-btn"><img src="/assets/Back.png" alt="Back" /></button>
                <button className="toolbar-btn"><img src="/assets/Forward.png" alt="Forward" /></button>
                <div className="toolbar-divider" />
                <button className="toolbar-btn"><img src="/assets/Up.png" alt="Up" /></button>
                <div className="toolbar-divider" />
                <button className="toolbar-btn"><img src="/assets/Search.png" alt="Search" /><span>Search</span></button>
                <button className="toolbar-btn"><img src="/assets/Folder.png" alt="Folders" /><span>Folders</span></button>
                <div className="toolbar-divider" />
                <button className="toolbar-btn"><img src="/assets/Views.png" alt="Views" /><span>Views</span></button>
            </div>

            {/* Address bar */}
            <div className="address-bar">
                <label htmlFor="address" className="address-label">Address</label>
                <div className="address-input-wrapper">
                    <img src="/assets/Address.png" alt="folder" className="address-icon" />
                    <input
                        id="address"
                        className="address-input"
                        value={`C:\\Documents and Settings\\Aakarsh\\${title}`}
                        readOnly
                    />
                    <button className="address-go">Go</button>
                </div>
            </div>

            {/* Body */}
            <div className="explorer-body">
                {/* Sidebar */}
                <div className="sidebar">
                    <div>
                        <div className="sidebar-section">
                            <h4>System Tasks</h4>
                            <ul>
                                <li>View System Info</li>
                                <li>Add/Remove Programs</li>
                                <li>Change Settings</li>
                            </ul>
                        </div>
                        <div className="sidebar-section">
                            <h4>Other Places</h4>
                            <ul>
                                <li>My Network Places</li>
                                <li>My Documents</li>
                                <li>Shared Docs</li>
                                <li>Control Panel</li>
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h4>Details</h4>
                        <ul>
                            <li>My Github</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="explorer-content">
                    {hasSections ? (
                        sections.map((section, idx) => (
                            <div key={idx} className="explorer-section">
                                <h3 className="section-title">{section.title}</h3>
                                <div className="folder-grid">
                                    {section.folders.map((folder, index) => (
                                        <a key={index} href={folder.url || "#"} target="_blank" rel="noreferrer" className="folder">
                                            <img src={folder.icon || "/assets/Folder.png"} alt={folder.name} className="folder-icon" />
                                            <span>{folder.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : hasFolders && (
                        <div className="folder-grid">
                            {folders.map((folder, index) => (
                                <a key={index} href={folder.url || "#"} target="_blank" rel="noreferrer" className="folder">
                                    <img src={folder.icon || "/assets/Folder.png"} alt={folder.name} className="folder-icon" />
                                    <span>{folder.name}</span>
                                </a>
                            ))}
                        </div>
                    )}


                </div>
            </div>
        </Rnd>
    );
}

import DesktopIcon from "./DesktopIcon.jsx";
// import ResumeWindow from "./windows/ResumeWindow";
// import AboutWindow from "./windows/AboutWindow";
// import ContactWindow from "./windows/ContactWindow";
import XPExplorerWindow from "./XPExplorerWindow.jsx";
import { useState, useEffect } from "react";

export default function Desktop() {
    const [openWindow, setOpenWindow] = useState(null);
    const handleExternalLink = (url) => {
        window.open(url, "_blank");
    };
    console.log("Render openWindow:", openWindow);
    useEffect(() => {
        console.log("🔥 openWindow changed:", openWindow);
    }, [openWindow]);

    const handleOpenWindow = (id) => {
        if (openWindow !== id) {
            console.log("✅ Opening window:", id);
            setOpenWindow(id);
        }
    };

    const handleCloseWindow = () => {
        console.log("✖ Closing window");
        setOpenWindow(null);
    };


    const desktopItems = [
        {
            id: "about",
            label: "About Me",
            icon: "/assets/AboutMeIcon.png",
            window: "about",
            x: 80,
            y: 80,
        },
        {
            id: "resume",
            label: "Resume",
            icon: "/assets/ResumeIcon.png",
            window: "resume",
            x: 80,
            y: 200,
        },
        {
            id: "projects",
            label: "Projects",
            icon: "/assets/ProjectIcon.png",
            window: "projects",
            x: 80,
            y: 320,
        },
        {
            id: "skills",
            label: "My Skills",
            icon: "/assets/SkillsIcon.png",
            window: "skills",
            x: 80,
            y: 440,
        },
        {
            id: "contact",
            label: "Contact",
            icon: "/assets/ContactMe.png",
            window: "contact",
            x: 80,
            y: 560,
        },
        {
            id: "github",
            label: "GitHub",
            icon: "/assets/GithubIcon.png",
            action: () => handleExternalLink("https://github.com/CallMeChandler"),
            x: 200,
            y: 80,
        },
        {
            id: "leetcode",
            label: "LeetCode",
            icon: "/assets/LeetcodeIcon.png",
            action: () => handleExternalLink("https://leetcode.com/u/ChandlerGoneHigh/"),
            x: 200,
            y: 200,
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            icon: "/assets/LinkedInIcon.png",
            action: () => handleExternalLink("https://www.linkedin.com/in/aakarsh-agarwal-7579061a8/"),
            x: 200,
            y: 320,
        },
        {
            id: "photos",
            label: "Photos",
            icon: "/assets/PhotosIcon.png",
            window: "photos",
            x: 200,
            y: 440,
        },
        {
            id: "games",
            label: "Games",
            icon: "/assets/GameIcon.png",
            window: "games",
            x: 200,
            y: 560,
        },
    ];

    return (
        <div className="w-screen h-screen relative bg-cover bg-center" style={{ backgroundImage: 'url(/assets/xp-bg.jpg)' }}>
            {/* Desktop Icons */}
            {desktopItems.map((item) => (
                <DesktopIcon
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    x={item.x}
                    y={item.y}
                    onDoubleClick={() => {
                        if (item.window) {
                            handleOpenWindow(item.window);
                        } else if (item.action) {
                            item.action();
                        }
                    }}
                />
            ))}


            {/* Windows */}
            {/* {openWindow === "about" && <AboutWindow onClose={() => setOpenWindow(null)} />}
            {openWindow === "resume" && <ResumeWindow onClose={() => setOpenWindow(null)} />}
            {openWindow === "contact" && <ContactWindow onClose={() => setOpenWindow(null)} />} */}

            {/* XP-style Windows */}
            {openWindow === "projects" && (
                <XPExplorerWindow
                    title="Projects"
                    onClose={handleCloseWindow}
                    sections={[
                        {
                            title: "Web Development",
                            folders: [
                                { name: "HostelHive", icon: "/assets/HostelHive_PNG.png", url: "https://hostel-hive.vercel.app/" },
                                { name: "IAT Website", icon: "/assets/IAT.png", url: "https://edcbitmesra.in/IAT" },
                                { name: "InspoGrid", icon: "/assets/InspoGrid.png", url: "https://inspo-grid.netlify.app/" },
                                { name: "Musync", icon: "/assets/Musync.png", url: "https://musync-vibe.netlify.app/" },
                                { name: "EDC Website", icon: "/assets/EDC.png", url: "https://edcbitmesra.in/Speakers" },
                            ],
                        },
                        {
                            title: "ML / Data Science",
                            folders: [
                                { name: "IPL EDA Project", icon: "/assets/IPL_EDA.png", url: "https://www.linkedin.com/posts/aakarsh-agarwal-7579061a8_datascience-python-eda-activity-7348765931843571712-_7JE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCLWLMBHxWtl1x2Ma8gH_iZlIV-7z1X84M" },
                            ],
                        },
                    ]}
                />

            )}

            {openWindow === "skills" && (
                <XPExplorerWindow
                    title="Skills"
                    onClose={handleCloseWindow}
                    sections={[
                        {
                            title: "Tech Stack",
                            folders: [
                                { name: "React", icon: "/assets/icons/react.png" },
                                { name: "Node.js", icon: "/assets/icons/node.png" },
                            ],
                        },
                        {
                            title: "Automation",
                            folders: [
                                { name: "Zapier", icon: "/assets/icons/zapier.png" },
                            ],
                        },
                    ]}
                />
            )}

            {openWindow === "photos" && (
                <XPExplorerWindow
                    title="Photography"
                    folders={[
                        { name: "Nature", icon: "/assets/icons/photo.png" },
                        { name: "Street", icon: "/assets/icons/photo.png" },
                    ]}
                    onClose={() => setOpenWindow(null)}
                />
            )}

            {openWindow === "games" && (
                <XPExplorerWindow
                    title="Games"
                    folders={[
                        { name: "Coming Soon!", icon: "/assets/icons/game.png" },
                    ]}
                    onClose={() => setOpenWindow(null)}
                />
            )}
        </div>
    );
}

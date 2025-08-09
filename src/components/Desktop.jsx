import DesktopIcon from "./DesktopIcon.jsx";
import ResumeWindow from "./ResumeWindow.jsx";
// import AboutWindow from "./windows/AboutWindow";
import ContactWindow from "./ContactWindow.jsx";
import XPExplorerWindow from "./XPExplorerWindow.jsx";
import Games from "./Games.jsx";
import SnakeGame from "./SnakeGame.jsx";
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
        console.log("👀 handleOpenWindow called with:", id);
        if (openWindow !== id) {
            console.log("✅ Actually setting:", id);
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
                            title: "Languages and Frameworks",
                            folders: [
                                { name: "Python", icon: "/assets/Python.png", url: "" },
                                { name: "C++", icon: "/assets/C++.png", url: "" },
                                { name: "C", icon: "/assets/C.png", url: "" },
                                { name: "JavaScript", icon: "/assets/JS.png", url: "" },
                                { name: "SQL", icon: "/assets/SQL.png", url: "" },
                                { name: "React", icon: "/assets/React.png", url: "" },
                                { name: "Express", icon: "/assets/Express.png", url: "" },
                                { name: "MongoDB", icon: "/assets/mongoDB.png", url: "" },
                                { name: "Tailwind", icon: "/assets/Tailwind.png", url: "" },
                                { name: "HTML5", icon: "/assets/html5.png", url: "" },
                                { name: "CSS3", icon: "/assets/css3.png", url: "" },
                                { name: "sci-kit learn", icon: "/assets/scikitln.png", url: "" },
                            ],
                        },
                        {
                            title: "Developer and Design Tools",
                            folders: [
                                { name: "VS Code", icon: "/assets/VScode.png", url: "" },
                                { name: "PyCharm", icon: "/assets/PyCharm.png", url: "" },
                                { name: "Git", icon: "/assets/git.png", url: "" },
                                { name: "Vercel", icon: "/assets/Vercel.jpeg", url: "" },
                                { name: "Render", icon: "/assets/Render.jpg", url: "" },
                                { name: "Figma", icon: "/assets/Figma.png", url: "" },
                                { name: "Canva", icon: "/assets/Canva.png", url: "" },
                            ],
                        },
                        {
                            title: "Workflow and Sales Automation Tools",
                            folders: [
                                { name: "Zapier", icon: "/assets/Zapier.png", url: "" },
                                { name: "Make", icon: "/assets/Make.png", url: "" },
                                { name: "n8n", icon: "/assets/n8n.png", url: "" },
                                { name: "Clay", icon: "/assets/Clay.png", url: "" },
                                { name: "Mailchimp", icon: "/assets/Mailchimp.png", url: "" },
                                { name: "HubSpot", icon: "/assets/HubSpot.png", url: "" },
                            ],
                        },
                    ]}
                    folders={undefined} // 👈 VERY IMPORTANT to prevent fallback render
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

            {openWindow === "contact" && (
                <ContactWindow onClose={handleCloseWindow} />
            )}

            {openWindow === "resume" && (
                <ResumeWindow onClose={handleCloseWindow} />
            )}



            {openWindow === "games" && (
                <XPExplorerWindow
                    title="Games"
                    onClose={handleCloseWindow}
                    sections={[
                        {
                            title: "Arcade Games",
                            folders: [
                                { name: "Tic Tac Toe", icon: "/assets/Tictactoe.png", id: "tictactoe" },
                                { name: "Snake Game", icon: "/assets/snake.png", id: "snake" },
                            ],
                        },
                    ]}
                    folders={undefined} // Prevent fallback rendering
                    onGameLaunch={(gameId) => setOpenWindow(gameId)}
                />
            )}

            {openWindow === "tictactoe" && (
                <XPExplorerWindow
                    title="Tic Tac Toe"
                    onClose={handleCloseWindow}
                    customContent={<Games />}
                    sections={[]} // or undefined
                    folders={undefined}
                />
            )}

            {openWindow === "snake" && (
                <XPExplorerWindow
                    title="Snake"
                    onClose={handleCloseWindow}
                    customContent={<SnakeGame />}
                    sections={[]} // or undefined
                    folders={undefined}
                />
            )}


        </div>
    );
}

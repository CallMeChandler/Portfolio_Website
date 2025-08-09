import "../styles/StartMenu.css";

export default function StartMenu() {
    return (
        <div className="start-menu">
            {/* Left Panel */}
            <div className="start-left">
                <div className="start-user">
                    <img src="/assets/UserProfileImg.jpeg" alt="User" className="start-avatar" />
                    <span className="start-username">AAKARSH AGARWAL</span>
                </div>

                <div className="start-item">
                    <img src="/assets/ProjectIcon.png" alt="" />
                    <div>
                        <div className="item-title">My Projects</div>
                        <div className="item-sub">See all my projects</div>
                    </div>
                </div>

                <div className="start-item">
                    <img src="/assets/ContactMe.png" alt="" />
                    <div>
                        <div className="item-title">Contact me</div>
                        <div className="item-sub">Leave me a message</div>
                    </div>
                </div>

                <div className="start-item">
                    <img src="/assets/ResumeIcon.png" alt="" />
                    <div>
                        <div className="item-title">My CV</div>
                        <div className="item-sub">See my resume</div>
                    </div>
                </div>

                <div className="start-item">
                    <img src="/assets/SkillsIcon.png" alt="" />
                    <div>
                        <div className="item-title">Skills</div>
                        <div className="item-sub">Check out my skills</div>
                    </div>
                </div>

                <div className="start-item">
                    <img src="/assets/GithubIcon.png" alt="" />
                    <div>
                        <div className="item-title">GitHub</div>
                        <div className="item-sub">Have a look at my GitHub</div>
                    </div>
                </div>

                <div className="start-item">
                    <img src="/assets/CMDIcon.png" alt="" />
                    <div>
                        <div className="item-title">Terminal</div>
                        <div className="item-sub">Run commands using the terminal</div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="start-right">
                <div className="start-right-item">
                    <img src="/assets/Music.png" alt="" /> My Musics
                </div>
                <div className="start-right-item">
                    <img src="/assets/Folder.png" alt="" /> My Documents
                </div>
                <div className="start-right-item">
                    <img src="/assets/PhotosIcon.png" alt="" /> My Pictures
                </div>
                <div className="start-right-item">
                    <img src="/assets/Calculator.png" alt="" /> Calculator
                </div>
                <div className="start-right-item">
                    <img src="/assets/GameIcon.png" alt="" /> Games
                </div>
                <div className="start-right-item">
                    <img src="/assets/Notepad.png" alt="" /> Notepad
                </div>
            </div>

            {/* Footer */}
            <div className="start-footer">
                <button className="footer-btn log-off">
                    <img src="/icons/logoff.png" alt="" /> Log Off
                </button>
                <button className="footer-btn turn-off">
                    <img src="/icons/shutdown.png" alt="" /> Turn Off Computer
                </button>
            </div>
        </div>
    );
}

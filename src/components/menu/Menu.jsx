import "./menu.scss"

export default function Menu ({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro"> Intro</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects </a>
                </li>
            </ul>
        </div>
    );
};
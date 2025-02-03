import { Link } from "react-scroll";

export default function DesktopNav() {
    const navItems = [
        { link: "skills", title: "Skills" },
        { link: "projects", title: "Projects" },
        { link: "feedbacks", title: "Feedbacks" },
        { link: "contact", title: "Contact" }
    ];
    
    return (
        <nav className="hidden md:flex items-center">
            <ul className="flex gap-x-2">
                {navItems.map((item, index) => (
                    <li key={index} className="flex gap-x-2 font-semibold text-lg">
                        <Link
                            to={item.link}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            className="transition-all border-b-2 border-transparent hover:border-black cursor-pointer"
                        >
                            {item.title}
                        </Link>
                        {index !== navItems.length - 1 && <span>/</span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

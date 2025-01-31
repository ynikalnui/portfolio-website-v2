import Link from "next/link"

export default function DesktopNav() {
    const navItems = [
        {
            link: "#",
            title: "Skills"
        },
        {
            link: "#",
            title: "Projects"
        },
        {
            link: "#",
            title: "Feedbacks"
        },
        {
            link: "#",
            title: "Contact"
        }
    ]
    return (
        <nav className="hidden md:flex gap-x-2 items-center">
            {
                navItems.map((item, index) => (
                    <div 
                    key={index}
                    className="flex gap-x-2 font-semibold text-lg">
                        <Link 
                        href={item.link}
                        className="transition-all border-b-2 border-transparent hover:border-black"
                        >
                            {item.title}
                        </Link>

                        {index != navItems.length - 1 && (
                            <span>/</span>
                        )}
                    </div>
                ))
            }
        </nav>
    )
}
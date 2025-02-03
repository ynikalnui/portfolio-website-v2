import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-y-4 py-2 border-t-2 border-black">
      <ul className="flex gap-x-2">
        <li>
          <SocialIcon
            url="mailto:ovskakun@gmail.com"
            fgColor="#ffffff"
            bgColor="#000000"
            style={{ width: 45, height: 45 }}
          />
        </li>
        <li>
          <SocialIcon
            url="https://www.linkedin.com/in/oleh-skakun-11a500198/"
            fgColor="#ffffff"
            bgColor="#000000"
            style={{ width: 45, height: 45 }}
          />
        </li>
        <li>
          <SocialIcon
            url="https://github.com/ynikalnui"
            fgColor="#ffffff"
            bgColor="#000000"
            style={{ width: 45, height: 45 }}
          />
        </li>
        <li>
          <SocialIcon
            url="https://t.me/ynikalnui_chelovek"
            fgColor="#ffffff"
            bgColor="#000000"
            style={{ width: 45, height: 45 }}
          />
        </li>
      </ul>

      <p className="text-sm md:text-base font-medium">
        &copy; {new Date().getFullYear()} Oleh Skakun. All rights reserved.
      </p>
    </footer>
  );
}

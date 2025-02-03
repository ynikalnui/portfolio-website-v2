type TBurgerIconProps = {
  isOpened: boolean;
};

export default function BurgerIcon({ isOpened }: TBurgerIconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <rect
        x="0"
        y={isOpened ? 12 : 5}
        width="30"
        height="3"
        className={`transition-all duration-300 origin-[50%_48%] ${isOpened ? "delay-200 fill-white rotate-45" : "fill-black"}`}
      />
      <rect
        x="0"
        y="13.5"
        width="30"
        height="3"
        className={`fill-black transition-all duration-300 ${
          isOpened ? "delay-200 opacity-0" : "opacity-100"
        }`}
      />
      <rect
        x="0"
        y={isOpened ? 12 : 22}
        width="30"
        height="3"
        className={`transition-all duration-300 origin-[50%_48%] ${isOpened ? "delay-200 fill-white -rotate-45" : "fill-black"}`}
      />
    </svg>
  );
}

// import { ReactTyped } from "react-typed";

// min-h-[15vh] md:min-h-[30vh] lg:min-h-[55vh]

interface ICtAHeroProps {
    children: string;
}

const CtAHero = ({children}: ICtAHeroProps) => {
  return (
    <div className="px-[2vw] leading-[10vw] text-[10vw] uppercase">
      {/* <ReactTyped strings={[children]} startWhenVisible typeSpeed={50} backSpeed={60} loop /> */}
      {children}
    </div>
  )
}

export default CtAHero

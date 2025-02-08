import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "../../components/ui/interactive-hover-button";

const HeroSection = () => {
  return (
  <div className="flex max-md:flex-col justify-center gap-5 max-md:items-center items-center">
    <div className="w-1/2 max-md:w-full max-md:text-center max-w-[800px]">
      <h2 className="text-5xl font-semibold">
        Welcome to <span className="text-orange-400">Media Player</span>
      </h2>
      <p className="mt-5 font-thin max-md:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
        tempore assumenda delectus dolorum aliquam vero porro soluta quidem
        voluptatibus laborum harum, corporis dolor consectetur animi
        accusamus voluptates earum repellat inventore!
      </p>
      <Link to={'/add'}>
        <InteractiveHoverButton className="text-black mt-5 bg-orange-400">
          Get Started
        </InteractiveHoverButton>
      </Link>
    </div>
    <div className="w-1/2 max-md:w-full max-w-[600px] max-md:text-center">
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZmajRmYno1cWEwbDllcWhvdHF3NG50dXAwa3ZyejdpbDA4Y3NyeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TqsLxad921AYMHmLXg/giphy.gif" alt="music" className="w-full h-full" />
    </div>
  </div>
  )
}

export default HeroSection
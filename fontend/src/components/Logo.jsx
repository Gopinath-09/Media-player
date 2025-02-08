import { SiVlcmediaplayer } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-x-2 border-b border-b-orange-400 pb-4"
    >
      <SiVlcmediaplayer className="text-4xl text-orange-400" />
      <span className="max-sm:text-2xl text-3xl font-semibold">
        Media Player
      </span>
    </Link>
  )
}

export default Logo
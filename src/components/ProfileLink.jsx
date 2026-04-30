import { Link } from "react-router-dom";
import userIcon from "../assets/svg/profile.svg"

const ProfileLink = () => {
    return (
        <Link to="/profile" className="flex items-center justify-center gap-3 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm transition-all duration-300">
         <img src={userIcon} alt="Icon" className="size-6 md:size-8" />
        </Link>
    );
}

export default ProfileLink;

import { ProfileIcon } from "./ProfileIcon";
import { SearchBar } from "./SearchBar";

const AppBar = () => {
  return (
    <div className="flex justify-between p-2 bg-[#181A1B] text-white">
      <div className="inline-flex items-center">
        <img src="./Logo.png" />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="inline-flex items-center">
        <ProfileIcon />
      </div>
    </div>
  );
};

export default AppBar;

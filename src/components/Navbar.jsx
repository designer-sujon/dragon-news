import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between">
          <div></div>
          <div className="nav flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/career">career</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="login flex gap-4 items-center">
            <div className="">
                <img src={userIcon} alt="" />
            </div>
            <div>
            <button className="btn btn-neutral rounded-none">Login</button>
            </div>
          </div>
        </div>
    );
};

export default Navbar;
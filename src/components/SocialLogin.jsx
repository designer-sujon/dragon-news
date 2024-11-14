import { FaGithub, FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div className="">
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="space-y-2 *:w-full">
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
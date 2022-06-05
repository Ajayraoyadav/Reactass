import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <a/> */}
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
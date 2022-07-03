import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
      return (
            <div>
                  <Link
                        style={{ margin: "10px", textDecoration: "none" }}
                        to={"/login"}
                  >
                        Login
                  </Link>
                  <Link
                        style={{ margin: "10px", textDecoration: "none" }}
                        to={"/"}
                  >
                        Books
                  </Link>
            </div>
      );
}

export default Navbar;

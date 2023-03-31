
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () =>{
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return(
        <div className="Navbar-content">
            <header>
			<nav ref={navRef}>
				<a href="/" target="_parent">Home</a>
				<a href="/About" target="_parent">About</a>
				<a href="/Projects" target="_parent">Projects</a>
				<a href="/Footer" target="_parent">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        </div>
    );
}

export default Navbar;
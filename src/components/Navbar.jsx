
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
				<a href="/">Home</a>
				<a href="/About">About</a>
				<a href="/Projects">Projects</a>
				<a href="/Footer">Contact</a>
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
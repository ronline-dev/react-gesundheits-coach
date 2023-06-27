import { Outlet, Link } from "react-router-dom";
import Legals from './legals.js';
import Socials from './socials.js';
import Menu from './menu.js';

function Navigation() {
	return (
		<>
			<nav className="gesundheits-menudrawer">
				<Socials />
				<Legals />
				<Menu />
			</nav>
			<ul id="gesundheits-navigationmenu" className="gesundheits-navigationmenu-scrolled">
				<li><a href="#GesundheitsToTop" id="gesundheits-totop" className="gesundheits-totop"><span>nach oben</span></a></li>
				<li>
					<Link   to="/"
	                        className="gesundheits-fit"
	                        onClick={() => {
	                            const anchor = document.querySelector('#beratung')
	                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	                        }}>
	                    <span>Ernährung &amp; Fitness</span>
	                </Link>
				</li>
				<li><a href="#GesundheitsCoach" className="gesundheits-coach"><span>Ihr Coach</span></a></li>
				<li><a href="#GesundheitsPartner" className="gesundheits-partner"><span>Partner</span></a></li>
				<li>
					<Link   to="/kontakt"
	                        className="gesundheits-kontakt"
	                        onClick={() => {
	                            const anchor = document.querySelector('#beratung')
	                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	                        }}>
	                    <span>Kontakt</span>
	                </Link>
				
				</li>
			</ul>
		</>
	)
}

export default Navigation;
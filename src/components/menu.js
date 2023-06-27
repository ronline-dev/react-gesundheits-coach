import { Outlet, Link } from "react-router-dom";

const Menu = () => {
	return (
		<ul>
            <li>
                <Link   to="/"
                        className="gesundheits-fit"
                        onClick={() => {
                            const anchor = document.querySelector('#beratung')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}>
                    Ernährung &amp; Fitness
                </Link>
            </li>
            <li><a href="#GesundheitsCoach" className="gesundheits-coach">Ihr Coach</a></li>
            <li><a href="#GesundheitsPartner" className="gesundheits-partner">Partner</a></li>
            <li>
                <Link   to="/kontakt"
                        className="gesundheits-kontakt"
                        onClick={() => {
                            const anchor = document.querySelector('#beratung')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}>
                    Kontakt
                </Link>
            </li>
        </ul>
	)
}

export default Menu;
import { Outlet, Link } from "react-router-dom";
import Header from '../components/header.js';

const Layout = () => {
  return (
	<>
		<Header />
		<div className="gesundheits-container">
			<div id="gesundheits-content" className="gesundheits-contentpusher-container">
				<div className="gesundheits-contenpusher">
					<div className="content">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	</>
  )
};

export default Layout;
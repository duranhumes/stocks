import Link from 'next/link';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
			<div className="container">
				<a href="#" className="navbar-brand">
					Currencies
				</a>
				<div className="collapse navbar-collapse">
					<il className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
					</il>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

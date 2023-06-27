import Logo from './logo.js';
import Hero from './hero.js';
import Navigation from './navigation.js';

function Header() {
  return (
    <div className="gesundheits-container">
      <header id="gesundheits-header" className="gesundheits-header">
        <Hero />
        <Logo />
        <Navigation />

      </header>
    </div>
  );
}

export default Header;
import hero960WebP from '../images/gesundheits_coach_hero_960.webp';
import hero1200WebP from '../images/gesundheits_coach_hero_1200.webp';
import hero1563WebP from '../images/gesundheits_coach_hero_1563.webp';
import hero1920WebP from '../images/gesundheits_coach_hero_1920.webp';
import hero1280WebP from '../images/gesundheits_coach_hero_1280.webp';
import hero2000WebP from '../images/gesundheits_coach_hero_2000.webp';
import heroMaxWebP from '../images/gesundheits_coach_hero.webp';

import hero960Jpg from '../images/gesundheits_coach_hero_960.jpg';
import hero1200Jpg from '../images/gesundheits_coach_hero_1200.jpg';
import hero1563Jpg from '../images/gesundheits_coach_hero_1563.jpg';
import hero1920Jpg from '../images/gesundheits_coach_hero_1920.jpg';
import hero1280Jpg from '../images/gesundheits_coach_hero_1280.jpg';
import hero2000Jpg from '../images/gesundheits_coach_hero_2000.jpg';
import heroMaxJpg from '../images/gesundheits_coach_hero.jpg';

function Hero() {
	return (
		<picture className="gesundheits-headerimage" id="gesundheits-headerimage">
          <source srcset={hero960WebP} type="image/webp" media="(max-width:480px)" />
          <source srcset={hero1200WebP} type="image/webp" media="(min-width:481px) AND (max-width:600px)" />
          <source srcset={hero1563WebP} type="image/webp" media="(min-width:601px) AND (max-width:768px)" />
          <source srcset={hero1920WebP} type="image/webp" media="(min-width:769px) AND (max-width:960px)" />
          <source srcset={hero1280WebP} type="image/webp" media="(min-width:961px) AND (max-width:1280px)" />
          <source srcset={hero2000WebP} type="image/webp" media="(min-width:1281px) AND (max-width:2000px)" />
          <source srcset={heroMaxWebP} type="image/webp" media="(min-width:2001px) AND (max-width:3000px)" />
          <source srcset={heroMaxWebP} type="image/webp" media="(min-width:3001px)" />
          <source srcset={hero960Jpg} type="image/jpeg" media="(max-width:480px)" />
          <source srcset={hero1200Jpg} type="image/jpeg" media="(min-width:481px) AND (max-width:600px)" />
          <source srcset={hero1563Jpg} type="image/jpeg" media="(min-width:601px) AND (max-width:768px)" />
          <source srcset={hero1920Jpg} type="image/jpeg" media="(min-width:769px) AND (max-width:960px)" />
          <source srcset={hero1280Jpg} type="image/jpeg" media="(min-width:961px) AND (max-width:1280px)" />
          <source srcset={hero2000Jpg} type="image/jpeg" media="(min-width:1281px) AND (max-width:2000px)" />
          <source srcset={heroMaxJpg} type="image/jpeg" media="(min-width:2001px) AND (max-width:3000px)" />
          <source srcset={heroMaxJpg} type="image/jpeg" media="(min-width:3001px)" />
          <img src={heroMaxJpg} alt="Gesundheits-Coach Hero" title="Gesundheits-Coach Hero" width="4500" />
        </picture>
	)
}

export default Hero;
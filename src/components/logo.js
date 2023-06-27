import logoRingLeft from '../images/logo-ring-left.svg';
import logoRingRight from '../images/logo-ring-right.svg';
import logoLeaf from '../images/logo-leaf.svg';
import logoManCorpus from '../images/logo-man-corpus.svg';
import logoManHead from '../images/logo-man-head.svg';

function Logo() {
  return (
    <div class="gesundheits-logo" id="gesundheits-logo">
      <img src={logoRingLeft} alt="Gesundheits-Coach Logo linker Ring" title="Gesundheits-Coach Logo" className="gesundheits-logo-ring-left" />
      <img src={logoRingRight} alt="Gesundheits-Coach Logo rechter Ring" title="Gesundheits-Coach Logo" className="gesundheits-logo-ring-right" />
      <img src={logoLeaf} alt="Gesundheits-Coach Logo Blatt" title="Gesundheits-Coach Logo" className="gesundheits-logo-leaf" />
      <img src={logoManCorpus} alt="Gesundheits-Coach Logo Figur" title="Gesundheits-Coach Logo" className="gesundheits-logo-man-corpus" />
      <img src={logoManHead} alt="Gesundheits-Coach Logo Kopf" title="Gesundheits-Coach Logo" className="gesundheits-logo-man-head" />
      <span className="gesundheits-logo-headline">Gesundheits<br />Coach</span>
      <span className="gesundheits-logo-line">&nbsp;</span>
      <span className="gesundheits-logo-subline">Ernährung und Fitness</span>
    </div>
  )
}

export default Logo;
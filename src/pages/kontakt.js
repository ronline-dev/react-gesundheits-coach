import TeaserSection from '../components/teasersection.js';

const Kontakt = () => {
  return (
    <>
    	<h1>
          Ernährung + Fitness<br />
          in Düsseldorf und Umgebung<br />
          Kontaktformular
        </h1>
        
        <p className="gesundheits-descriptor">
          Nehmen Sie Kontakt zu mir auf und stimmen Sie mit mir Ihr Training und Ihre Ernährung optimal aufeinander ab. Mit meiner professionellen Unterstützung erreichen Sie so alle Ziele, die Sie Sich setzen. 
        </p>

    	<TeaserSection />

    	<section id="GesundheitsKontakt" className="gesundheits-eyecatch gesundheits-blue gesundheits-contact">
              <h3>Kontaktformular</h3>
              <div className="gesundheits-contactformwrap">
                <form action="https://www.gesundheits-coach.com/script/gesundheits-sendmail.php" method="POST" accept-charset="utf-8" id="gesundheits-form">
                  <div>
                    <label for="vorname">
                      Vorname:
                      <input name="vorname" id="vorname" tabindex="1" type="text" />
                    <div data-lastpass-icon-root="true" style={{position: "relative", height: 0, width: 0, float: "left"}}></div></label>
                    <label for="nachname">
                      Nachname: *
                      <input name="nachname" id="nachname" tabindex="2" required="" type="text" />
                    </label>
                    <label for="mail">
                      E-mail-Adresse: *
                      <input name="mail" id="mail" tabindex="3" required="" type="email" />
                    </label>
                    <label for="repeatmail">
                      E-mail wiederholen:
                      <input name="repeatmail" id="repeatmail" tabindex="21" type="email" />
                    </label>
                    <label for="telefon">
                      Telefonnummer:
                      <input name="telefon" id="telefon" tabindex="4" type="text" />
                    </label>
                    <label for="fax">
                      Faxnummer:
                      <input name="fax" id="fax" tabindex="22" type="text" />
                    <div data-lastpass-icon-root="true" style={{position: "relative", height: 0, width: 0, float: "left"}}></div></label>
                    <label for="address">
                      Anschrift:
                      <input name="address" id="address" tabindex="5" type="text" />
                    </label>
                  </div>
                  <div>
                    <label for="nachricht">
                      Ihre Nachricht: *
                      <textarea name="nachricht" id="nachricht" tabindex="6" required=""></textarea>
                    </label>
                  </div>
                  <div className="gesundheits-formsubmit">
                    <label className="gesundheits-privacy-optin" for="privacy-optin">
                      <input name="privacy-optin" id="privacy-optin" tabindex="7" required="" type="checkbox" />
                      <span>Datenschutzbedingungen bestätigen *</span>
                    </label>
                    <p>
                      Ich habe die 
                      <a href="/datenschutz.html" title="Datenschutzerklärung aufrufen" target="_blank"> 
                        Datenschutzerklärung
                      </a>
                      gelesen und willige darin ein, dass der Gesundheits-Coach die von mir übermittelten Informationen und Kontaktdaten dazu verwendet, um mit mir anlässlich meiner Anfrage in Verbindung zu treten, hierüber zu kommunizieren und mein Anliegen abzuwickeln. Dies gilt insbesondere für die Verwendung der E-Mail-Adresse und der Telefonnummer zum vorgenannten Zweck. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft per E-Mail an
                      <a href="mailto:info@gesundheits-coach.com?subject=Widerruf%20Datenverarbeitung&amp;body=Sehr%20geehrte%20Damen%20und%20Herren,%0D%0A%0D%0Ahiermit%20widespreche%20ich%20der%20Verarbeitung%20meiner%20Daten.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen,%0D%0AIhr%20Name" title="Datenschutzerklärung widersprechen">
                        info@gesundheits‑coach.com
                      </a>
                      oder per Post an Gesundheits-Coach, Marina Denisow, Treppenstr. 15a, 58638 Iserlohn widerrufen werden.
                    </p>
                    <input className="gesundheits-button" tabindex="8" type="submit" />
                  </div>
                </form>
                <address>
                  <p className="gesundheits-portrait">
                    <picture className="gesundheits-portrait-picture">
                      <source srcset="images/marina_sport_3839_640.webp" type="image/webp" />
                      <source srcset="images/marina_sport_3839_640.jpg" type="image/jpeg" />
                      <img src="images/marina_sport_3839_640.jpg" alt="Gesundheits-Coach Portrait" title="Ihr Gesundheits-Coach" width="640" height="640" />
                    </picture>
                  </p>
                  <p>Gesundheits‑Coach<br /><b>Marina Denisow</b></p>
                  <p>
                    <a href="tel:+491777033347" className="gesundheits-call" title="Gesundheits-Coach anrufen">
                      +49&nbsp;177&nbsp;7033347
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@gesundheits-coach.com" className="gesundheits-mail" title="Mail an Ihren Gesundheits-Coach">
                      info@gesundheits-coach.com
                    </a>
                  </p>
                  <ul className="gesundheits-socials">
                    <li className="gesundheits-instagram">
                      <a href="https://www.instagram.com/gesundheitscoach_marinadenisow/?hl=de" target="_blank" className="gesundheits-instagram" title="zum Instagram Profil">&nbsp;</a>
                    </li>
                    <li className="gesundheits-facebook">
                      <a href="https://www.facebook.com/marina.denisow?fref=ts" target="_blank" className="gesundheits-facebook" title="zum Facebook Profil">&nbsp;</a>
                    </li>
                    <li className="gesundheits-youtube">
                      <a href="https://www.youtube.com/channel/UCDGHvjAxPkab7YcScL2bCtA" target="_blank" className="gesundheits-youtube" title="zum Youtube Profil">&nbsp;</a>
                    </li>
                  </ul>
                </address>
              </div>
            </section>
    </>
  )
};

export default Kontakt;
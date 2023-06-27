import React, { Suspense } from 'react';
import TeaserSection from '../components/teasersection.js';
import TeaserPictureVertical from '../components/teaserpicturevertical.js';
import { lazy } from 'react';
const Erkrankungen = lazy(() => import('../components/erkrankungen.js'));

const Beratung = () => {
  return (
    <>
      <h1>
		          Ernährung + Fitness<br />
		          in Düsseldorf und Umgebung
		        </h1>
		        
		        <p className="gesundheits-descriptor">
		          Stimmen Sie Ihr Training und Ihre Ernährung optimal aufeinander ab. Mit meiner professionellen Unterstützung erreichen Sie so alle Ziele, die Sie Sich setzen. 
		        </p>

		        <TeaserSection />

		        <section id="beratung" className="gesundheits-eyecatch gesundheits-blue gesundheits-icon-fit">
			      <h2> Sagen Sie Ihrem inneren Schweinehund den Kampf an und setzen Sie Sich Ihr konkretes Trainingsziel! </h2>
			    </section>

		      <section id="GesundheitsErnaehrungFitness" className="gesundheits-text gesundheits-columns">
		      <div className="gesundheits-column gesundheits-column-4">
		      	<TeaserPictureVertical theme="gesundheits_coach_hometraining" />
		      </div>
		      <div className="gesundheits-column gesundheits-column-8">
		        <h2>Ernährungsberatung und Fitnesstraining</h2>
		        <p> 
		          Mit meiner professionellen Unterstützung werden Sie Ihr Training und Ihre Ernährung optimal aufeinander abstimmen? So erreichen Sie alle Ziele, die Sie Sich setzen.
		        </p>
		        <h3>Beratung für Ihre Trainingsziele:</h3>
		        <ul>
		          <li>Gewichtsreduktion</li>
		          <li>Gewichtszunahme, Muskelaufbau</li>
		          <li>Körperformung</li>
		          <li>Unterstützung der Therapien bei verschiedenen Erkrankungen (siehe Abschnitt Erkrankungen)</li>
		          <li>Fit werden in und nach der Schwangerschaft</li>
		          <li>Leistungssteigerung im Ausdauersport (Z.B. Marathon,Triathlon usw)</li>
		        </ul>
		      </div>
		    </section>

		    <section className="gesundheits-eyecatch gesundheits-green gesundheits-icon-logo">
		      <h2> Essen Sie gesünder! Treiben Sie mehr Sport! </h2>
		    </section>

		    <section className="gesundheits-text gesundheits-columns">
              <div className="gesundheits-column">
                <h2>Gesundheits-Coaching bei Erkrankungen</h2>
                <p>
                  Eine Tablette nehmen und schon ist alles gut? So einfach ist das leider nicht. Für den Therapieerfolg ist Ihre Mitwirkung als Patient gefragt.
                </p>
                <h3>Ihre Mitwirkung ist entscheidend!</h3>
                <p>
                  Häufig erhält man nur allgemeine Tipps, wie „Essen Sie gesünder“, oder „Treiben Sie Sport“. Doch wie genau sollen Sie nun Ihren Speiseplan gestalten? Welche Übungen oder welche Sportarten passen zu Ihnen? Bei Ihrem Gesundheit-Coach erfahren Sie genau das.
                </p>
              </div>
            </section>

		    <Suspense fallback="<div>loading ...</div>">
			    <Erkrankungen />
			</Suspense>

		    <section className="gesundheits-text gesundheits-columns">
		      <div className="gesundheits-column">
		        <h4>Begleitung durch Ihren Arzt</h4>
		        <p>Wenn Sie einverstanden sind, kann die Therapie mit Ihrem Arzt abgestimmt werden.</p>
		        <p>
		          Hierfür benötigt die Krankenkasse zur Prüfung Ihres Antrages einen Kostenvoranschlag des jeweiligen Ernährungsberaters.
		        </p>
		      </div>
		    </section>

		    <section className="gesundheits-eyecatch gesundheits-green gesundheits-icon-rating">
		      <div>
		        <h4>Finanzielle Unterstützung durch Ihre Krankenkasse</h4>
		        Viele Krankenkassen unterstützen ihre Patienten finanziell mit einer vollständigen oder anteiligen Kostenübernahme. Hierzu ist eine Notwendigkeits­bescheinigung Ihres Arztes. Das Formular dazu können Sie ausdrucken und Ihrem Arzt zur Verfügung stellen:<br />
		        <a href="/documents/notwendigkeitsbescheinigung.pdf" title="Notwendigkeitsbescheinigung herunterladen" target="_blank" className="gesundheits-button gesundheits-filedownload">
		          Notwendigkeits­bescheinigung herunterladen
		        </a>
		      </div>
		    </section>
    </>
  )
};

export default Beratung;
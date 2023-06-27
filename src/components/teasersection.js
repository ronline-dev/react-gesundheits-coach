import Teaser from './teaser.js';


function TeaserSection() {
  return (
    <section class="gesundheits-teaser-section">
      <Teaser
        link="/beratung"
        title="Ernährungscoaching"
        theme="ernaehrungscoaching"
        text="Essen Sie gesünder! Aber wie genau?<br />Erfahren Sie alles über gesunde Ernährung bei Ihrem Gesundheits-Coach."
        buttontitle="zu Ihrem Ernährungsplan"
        />

      <Teaser
        link="/beratung"
        title="Fitnesstraining"
        theme="gesundheits_coach_fitness"
        text="Treiben Sie mehr Sport! Aber welchen?<br /> Setzen Sie Sich erreichbare Trainingsziele und erreichen Sie sie mit Hilfe Ihres Gesundheits-Coaches."
        buttontitle="zu Ihrem Fitness-Programm"
        />

        <Teaser
        link="#GesundheitsCoach"
        title="Ihr Gesundheits-Coach"
        theme="marina_sport_3887"
        text="ielen Menschen in Dortmund und Umgebung konnte ich schon helfen.<br />Lesen Sie, was mich qualifiziert und werden auch Sie einer meiner zufriedenen Kunden."
        buttontitle="zum Lebenslauf"
        />
    </section>
  )
}

export default TeaserSection;
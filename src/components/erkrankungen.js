import TeaserPictureVertical from '../components/teaserpicturevertical.js';

const Erkrankungen = () => {
	return (

		<section className="gesundheits-text gesundheits-columns gesundheits-columns-imageright">
			<div className="gesundheits-column gesundheits-column-8">
				<h4>Erkrankungen, bei denen Gesundheits-Coaching wirkt</h4>
				<ul>
					<li>Diabetes mell. Typ 2 bzw. Insulinresistenz</li>
					<li>Adipositas und Übergewicht bei Erwachsenen und Kindern</li>
					<li>Hypercholisterinämie (erhöhte Cholesterinwerte)</li>
					<li>Metabolisches Syndrom</li>
					<li>Hyperurikämie (Gicht bzw. hohe Harnsäurewerte)</li>
					<li>Lebererkrankungen</li>
					<li>Nahrungsmittelunverträglichkeit wie Fructose-, Lactose-, Histaminintoleranz</li>
					<li>Hypertonie (Bluthochdruck)</li>
					<li>Niedriger Blutdruck</li>
					<li>Viele rheumatische Erkrankungen</li>
					<li>Ernährungsumstellung nach Magenverkleinerung/Magenbandeinsatz</li>
					<li>Nierenerkrankungen</li>
					<li>Essstörungen</li>
					<li>Magen – und Darmbeschwerden</li>
					<li>Allergien</li>
					<li>Herz-Kreislauferkrankungen</li>
				</ul>
			</div>
			<div className="gesundheits-column gesundheits-column-4">
				<TeaserPictureVertical theme="marina_sport_9549" />
			</div>
		</section>
	);
}

export default Erkrankungen;
function TeaserPictureVertical(props) {

	return (
		<picture className="gesundheits-teaser-picture">		
			<source srcset={`images/${props.theme}_920.webp`} type="image/webp" media="(max-width:480px)" />
          	<source srcset={`images/${props.theme}_1200.webp`} type="image/webp" media="(min-width:481px) AND (max-width:600px)" />
          	<source srcset={`images/${props.theme}_720.webp`} type="image/webp" media="(min-width:601px) AND (max-width:768px)" />
          	<source srcset={`images/${props.theme}_920.webp`} type="image/webp" media="(min-width:769px) AND (max-width:960px)" />
          	<source srcset={`images/${props.theme}_1200.webp`} type="image/webp" media="(min-width:961px) AND (max-width:1280px)" />
          	<source srcset={`images/${props.theme}_720.webp`} type="image/webp" media="(min-width:1281px) AND (max-width:2000px)" />
          	<source srcset={`images/${props.theme}_1200.webp`} type="image/webp" media="(min-width:2001px) AND (max-width:3000px)" />
          	<source srcset={`images/${props.theme}_1500.webp`} type="image/webp" media="(min-width:3001px)" />
          	<source srcset={`images/${props.theme}_920.jpg`} type="image/jpeg" media="(max-width:480px)" />
          	<source srcset={`images/${props.theme}_1200.jpg`} type="image/jpeg" media="(min-width:481px) AND (max-width:600px)" />
          	<source srcset={`images/${props.theme}_720.jpg`} type="image/jpeg" media="(min-width:601px) AND (max-width:768px)" />
          	<source srcset={`images/${props.theme}_920.jpg`} type="image/jpeg" media="(min-width:769px) AND (max-width:960px)" />
          	<source srcset={`images/${props.theme}_1200.jpg`} type="image/jpeg" media="(min-width:961px) AND (max-width:1280px)" />
          	<source srcset={`images/${props.theme}_720.jpg`} type="image/jpeg" media="(min-width:1281px) AND (max-width:2000px)" />
          	<source srcset={`images/${props.theme}_1200.jpg`} type="image/jpeg" media="(min-width:2001px) AND (max-width:3000px)" />
          	<source srcset={`images/${props.theme}_1500.jpg`} type="image/jpeg" media="(min-width:3001px)" />
          	<img src={`images/${props.theme}_1500.jpg`} alt="Gesundheits-Coach Training zu Hause" title="Gesundheits-Coach Training zu Hause" width="1000" />
		</picture>
	)
}

export default TeaserPictureVertical;
import TeaserPicture from './teaserpicture.js';

function Teaser(props) {
	return (		
              <div className="gesundheits-teaser">
                <a href={props.link} title={props.buttontitle}>
                  <TeaserPicture theme={props.theme} />
                </a>
                <div className="gesundheits-teaser-text">
                  <h2>{props.title}</h2>
                  {props.text}
                </div>
                <a className="gesundheits-button" href={props.link} title={props.buttontitle}>{props.title}</a>
              </div>
	)
}

export default Teaser;
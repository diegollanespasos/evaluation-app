import locationIcon from '../../assets/location.svg';
import twitterIcon from '../../assets/twitter.svg';
import linkIcon from '../../assets/link.svg';
import companyIcon from '../../assets/company.svg';
import './Card.css';

const Card = ({ user }) => {
    const {
        avatar,
        name,
        joinedDate,
        username,
        bio,
        repos,
        followers,
        following,
        country,
        twitter,
        githubUrl,
        company,
    } = user;

  return (
    <div className="card-container">
        <div className="image-container">
            <img src={avatar} alt="Profile image"/>
        </div>
        <div className="info-container">
            <div className="info-row">
                <h3>{name}</h3>
                <p>{`Joined ${joinedDate}`}</p>
            </div>
            <div className="info-row">
                <a href={githubUrl}>
                    {`@${username}`}
                </a>
            </div>
            <div className="info-row">
                <p>{bio}</p>
            </div>
            <div className="statistics-container">
                <div className="statistics-item">
                    <p className="statistics-title">Repos</p>
                    <p>{repos}</p>
                </div>
                <div className="statistics-item">
                    <p className="statistics-title">Folllowers</p>
                    <p>{followers}</p>
                </div>
                <div className="statistics-item">
                    <p className="statistics-title">Following</p>
                    <p>{following}</p>
                </div>
            </div>
            <div className="social-media-container">
                <div className="social-media-item">
                    <img className="social-media-icon" src={locationIcon} alt="Location Icon"/>
                    <p>{country ? country : "Not Available"}</p>
                </div>
                <div className="social-media-item">
                    <img className="social-media-icon" src={twitterIcon} alt="Twitter Icon"/>
                    <p>{twitter ? twitter : "Not Available"}</p>
                </div>
                <div className="social-media-item">
                    <img className="social-media-icon" src={linkIcon} alt="Github url"/>
                    {githubUrl ? 
                        <a href={githubUrl}>
                            {githubUrl}
                        </a>
                        : <p>Not Available</p>}
                </div>
                <div className="social-media-item">
                    <img className="social-media-icon" src={companyIcon} alt="Company Icon"/>
                    <p>{company ? company : "Not Available"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;

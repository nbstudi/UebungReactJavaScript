import profilePic from './assets/studibuch_logo_klein.jpg'

function Card(){
    return(
        <div className="card">
            {/*alt = falls Bild nicht angezeigt wird oder der Screenreader benutzt wird,
            wird alternativ der Text angezeigt*/}
            <img /*src="https://via.placeholder.com/150"*/ className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make Youtube videos and play video games</p>
        </div>
    )
}

export default Card
import React from 'react';
import SpotifyLogo from './img/Spotify_Icon_CMYK_Green.png';
import './index.css';
import { Link } from 'react-router-dom';
import Anita from './img/anita.png';
import Annalisa from './img/annalisa.png';
import Devvin from './img/devin.png';
import Ethan from './img/ethan.png';
import Frank from './img/frank.png';
import Jason from './img/jason.png';
import Sawyer from './img/sawyer.png';
import Gabriel from './img/gabriel.png';




function About() {

    function meetTeam() {
        document.getElementById('meet-team').style.display = 'block';
        document.getElementById('contact').style.display = 'none';
        document.getElementById('landing').style.display = 'none';
        
    }

    function showContacts() {
        document.getElementById('meet-team').style.display = 'none';
        document.getElementById('contact').style.display = 'block';
        document.getElementById('landing').style.display = 'none';
        
    }
    

    return(
<>   
<header>
    <img src={SpotifyLogo} alt="spotify-logo"/>
    <h1>Spotify</h1><h2>&#174;</h2>

    <nav>
        <Link to='/' className='nav-buttons'>Log in</Link>
        <Link to='/' className='nav-buttons'>Sign Up</Link>
    </nav>
</header>

    
    <div id='landing'>
        <body>
            <section className="title-container">
                <h3> Introducing the most advanced song suggester. </h3>
                <nav>
                    <Link to='/'>Discover</Link>

                </nav>
            
                
            </section>
        </body>
    </div>

    <section id='meet-team' className='team-container'>

        <div className='member1'>
            <img src={Frank} alt='team-member' />
            <p>Hey I'm Frank and I'm a web developer located in California. I enjoy coding and all the simple things in life.</p>
        </div>

        <div className='member1'>
            <p>Hello, I'm Devvin</p>
            <img src={Devvin} alt='team-member' />
        </div>

        <div className='member1'>
            <img src={Annalisa} alt='team-member' />
            <p>Hello, I'm Analisa</p>
        </div>

        <div className='member1'>
            <p>Hello, I'm Anita</p>
            <img src={Anita} alt='team-member' />
        </div>

        <div className='member1'>
            <img src={Sawyer} alt='team-member' />
            <p>Hey there, I'm Sawyer, a Boise Idaho based web developer with a passion for music, the outdoors & all things science. I enjoy creating simple, but powerful web apps to make life just a little bit easier for us all.</p>
        </div>

        <div className='member1'>
            <p>Hello, I'm Jason</p>
            <img src={Jason} alt='team-member' />
        </div>

        <div className='member1'>
            <img src={Gabriel} alt='team-member' />
            <p>Hello, I'm Gabriel</p>
        </div>

        <div className='member1'>
            <p>Hello, I'm Ethan</p>
            <img src={Ethan} alt='team-member' />
        </div>

    </section>

    <section id='contact' class="third-page">
        <h4>Contact us:</h4>
        <p>Spotify@songsplusmusic.com</p>
        <p>1-800-SPOTIFY</p>
    </section>

    <footer>
        <nav>
            <a onClick={meetTeam} href='#'>Meet the team</a>
            <a onClick={showContacts} href='#'>Contacts</a>
        </nav>
    </footer>
    </>
    );
}

export default About;
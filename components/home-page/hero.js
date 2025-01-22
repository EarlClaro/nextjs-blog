import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/CLARO.png'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <br />
      <h1>Hi, I'm <span style={{color:'gold'}}>Earl</span></h1>
      <h2 className={classes.typingText}>
          <span></span>
      </h2>
      <br />
      <br />
      <p>
        I love learning and sharing new things about web development - especially frontend frameworks like <span style={{color:'gold'}}>Angular or React</span>.
      </p>
      <p>
        I gradually fell in love with programming and I have at least learned something, I think… 🤷‍♂️
      </p>
      <p>
        I am fluent in languages like <span style={{color:'gold'}}>Python</span> and <span style={{color:'gold'}}>Javascript</span>.
      </p>
      <p>
        My fields of interest are building new <span style={{color:'gold'}}>Interesting Websites</span> and integrating them with{' '}
        <span style={{color:'gold'}}>AI Technologies</span>, as well as in areas related to <span style={{color:'gold'}}>OpenAI</span> and <span style={{color:'gold'}}>Gemini</span>.
      </p>
      <p>
        Whenever possible, I also apply my <span style={{color:'gold'}}>passion</span> for developing products with Node.js and Modern
        Javascript Libraries and Frameworks like <span style={{color:'gold'}}>React.js</span> and <span style={{color:'gold'}}>Next.js</span>.
      </p>
      <br />
      <br />
      {/* Social Icons */}
      <div className={classes.socialIcons}>
            <a href="https://www.linkedin.com/in/earl-joseph-claro-603350163/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
            </a>
            <a href="https://github.com/EarlClaro" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={classes.icon} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007700865370" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
            </a>
            <a href="mailto:earlclaro@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} className={classes.icon} />
            </a>
      </div>
    </section>
    
  );
}

export default Hero;

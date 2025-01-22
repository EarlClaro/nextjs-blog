import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
          <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='https://drive.google.com/file/d/1_eP3Y8CP9Mgw5lR_8378EuwS7nqgDztr/view'target="_blank"
              rel="noreferrer">Resume</Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/earl-joseph-claro-603350163/' target="_blank"
              rel="noreferrer">Linkedin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

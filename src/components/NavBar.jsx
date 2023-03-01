import { Link } from 'react-router-dom';
import styles  from './NavBar.module.css'

function NavBar() {
return (
    <nav className={styles.container}>
        <Link className={styles.name} 
        to='/'
        >
            Andrew Winkler
        </Link>
        <ul>
            <li>
                <Link
                    to='/about' id='about-navLink'
                >
                    About
                </Link>
            </li>

            <li>
                <Link
                    to='/contact' id='contact-navLink'
                >
                    Contact
                </Link>
            </li>
            <li>
                <Link
                    to='/projects' id='projects-navLink'
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to='/resume' id='resume-navLink'
                >
                    Resume
                </Link>
            </li>
        </ul>
    </nav>
)
}

export default NavBar;
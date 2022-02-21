import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Navbar() {

return (
    <>
    <h1 className={styles.title}>
          TTG Release Dashboard
        </h1>

        <ul className={styles.navigation}>
          <li>
          <Link href="/">
            <a>All Repos</a>
          </Link>
          </li>
          <li>
          <Link href="/core/next-web-lt-nyt">
            <a>Monorepo: LT / NTYTG</a>
          </Link>
          </li>
          <li>
          <Link href="/core/next-web-lt-nyt">
            <a>Monorepo: TodayTix.com</a>
          </Link>
          </li>
          <li>
          <Link href="/core/next-web-lt-nyt">
            <a>Monorepo: WhiteLabel</a>
          </Link>
          </li>
          <li>
          <Link href="/core/iOS">
            <a>TT iOS</a>
          </Link>
          </li>
          <li>
          <Link href="/core/android">
            <a>TT Android</a>
          </Link>
          </li>
          <li>
          <Link href="/core/platform">
            <a>Platform</a>
          </Link>
          </li>
          <li>
          <Link href="/core/backstage">
            <a>Backstage</a>
          </Link>
          </li>
        </ul>
    </>
);

};


export default Navbar;
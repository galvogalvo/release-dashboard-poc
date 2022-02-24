import styles from '../../styles/Home.module.css'
import Logo from '../components/logo.js'
import Link from 'next/link'

function formatRepoName(name){

  let label = name;
  if(name.includes("=")){
    label = name.split("=")[1];
    
  }

  if(label == "iOS"){
    return label;
  }

  return label.charAt(0).toUpperCase() + label.slice(1);;
}

const Navbar = props => {

return (
    <>
    <Logo />
    <h1 className={styles.title}>
          Release Dashboard
    </h1>

        <ul className={styles.navigation}>
          <li>
          <Link href="/">
            <a>All Repos</a>
          </Link>
          </li>

          { props.navLinks.map((link) => (
            <>
            <li>
              <Link href={"/core/" + link}>
                <a>{formatRepoName(link)}</a>
              </Link>
            </li>
            </>
          ))        
        }
        </ul>
    </>
);

};


export default Navbar;
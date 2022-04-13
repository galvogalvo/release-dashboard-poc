import styles from '../../styles/Home.module.css'

function sinceLastRelease(releaseDate){

    //Get 1 day in milliseconds
    const one_day=1000*60*60*24;
  
    const currentTime = new Date();
    const elapsedMS = currentTime - Date.parse(releaseDate);
    let elapsedDays = Math.round(elapsedMS/one_day);
    return elapsedDays;
  }

const Repogrid = props => {
    return (
<>
<div className={styles.grid}>
        {props.repositories.map((repository) => (
          repository.latestRelease && !repository.latestRelease.isDraft &&
          <>
            <div className={ sinceLastRelease(repository.latestRelease.createdAt) < 8 ? styles.green + " " + styles.card : sinceLastRelease(repository.latestRelease.createdAt) < 14 ? styles.amber + " " + styles.card : styles.red + " " + styles.card}>
              <h3>{repository.name}</h3>
              <p>{ sinceLastRelease(repository.latestRelease.createdAt) + ' days since last release' }
              </p>
              <p>
                {repository.latestRelease.name}
              </p>
            </div>
          </>
        ))}
      </div>
      </>
)};

export default Repogrid;
import styles from '../styles/Home.module.css'

function sinceLastRelease(releaseDate){

    //Get 1 day in milliseconds
    const one_day=1000*60*60*24;
  
    const currentTime = new Date();
    const elapsedMS = currentTime - Date.parse(releaseDate);
    let elapsedDays = Math.round(elapsedMS/one_day);
    return elapsedDays;
  }

function getMonoRepoSite(filter, tagName){
  if(filter){
    const tag = tagName.split('@');
    return filter == tag[0] ? true : false;
  }

  return true;
}

const Releaselist = props => {
    return (
<>
<div className={styles.grid}>
        {props.releases.map((release) => (
          !release.isDraft &&
          <>
            <div className={ !getMonoRepoSite(props.filter, release.tagName) ? styles.grey + " " + styles.card : sinceLastRelease(release.updatedAt) < 8 ? styles.green + " " + styles.card : sinceLastRelease(release.updatedAt) < 14 ? styles.amber + " " + styles.card : styles.red + " " + styles.card}>
              <h3>{release.tagName}</h3>
              <p>{ sinceLastRelease(release.updatedAt) + ' days since release' }
              </p>
              <p>
                {release.name} {release.isDraft ? "(Draft)" : "" }
              </p>
            </div>
          </>
        ))}
      </div>
      </>
)};

export default Releaselist;
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Releaselist from '../components/releaselist'

import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default function Core({ releases }) {

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Navbar />

        <Releaselist releases={releases} />
      </main>

    </div>
  )
}

export async function getServerSideProps(router) {
  const selectedRepo = router.params.repo;
  const { data } = await client.query({
    query: gql`
    query{
      repository(owner:"TodayTix" name:"${selectedRepo}"){
        releases(first:10, orderBy: { field: CREATED_AT, direction: DESC}){
          totalCount
          nodes{
            id
            name
            tagName
            updatedAt
          }
        }
      }
    }
    `,
  });
  // console.log(data.repository.releases.nodes);
  return {
    props: {
      releases: data.repository.releases.nodes
    },
 };
}

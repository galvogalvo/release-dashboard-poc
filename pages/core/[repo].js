import styles from '../../styles/Home.module.css'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Releaselist from '../components/releaselist'

import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default function Core({ releases, filter }) {

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Navbar />

        <Releaselist releases={releases} filter={filter} />
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const selectedRepo = context.params.repo;
  const filter = context.query && context.query.site ? context.query.site : null;
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
  return {
    props: {
      filter: filter,
      releases: data.repository.releases.nodes,
    },
 };
}

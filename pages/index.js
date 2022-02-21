import styles from '../styles/Home.module.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Repogrid from './components/repogrid'

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ repositories }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Navbar />

        <Repogrid repositories={repositories} />
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query{
      organization(login: "TodayTix"){
        repositories(first:100, orderBy: { field: NAME, direction: ASC}){
          nodes{
            id
            name
            latestRelease{
              id
              name
              tagName
              createdAt
              author {
                id
                name
                email
              }
            }
            releases(last:10, orderBy: { field: CREATED_AT, direction: DESC}){
              edges{
                node{
                  id
                  name
                  tagName
                  createdAt
                  author {
                    id
                    name
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
  });
  return {
    props: {
      repositories: data.organization.repositories.nodes
    },
 };
}

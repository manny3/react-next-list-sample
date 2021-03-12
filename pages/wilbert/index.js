import styles from '../../styles/wilbert.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(res);
  const data = await res.json();
  console.log(data);

  return {
    props: { ninjas: data }
  }
}

const Wilbert = ({ninjas}) => {
  return ( 
    <div>
      <h1>All Wilbert</h1>
      {ninjas.map(ninja => (
        <Link href={'/wilbert/'+ ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))

      }
    </div>
  )
}
 
export default Wilbert;
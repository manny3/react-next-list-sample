import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyword" content="wilbert" />
      </Head>
      <div>
        <h1 className={ styles.title }>Homepage</h1>
        <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatum quisquam molestiae neque dignissimos sint explicabo alias? Fugit aut, amet, obcaecati ipsam nulla eum nisi velit, dolore voluptatem delectus quasi!</p>
        <Link href="/wilbert/test">
          <a className={ styles.btn }>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

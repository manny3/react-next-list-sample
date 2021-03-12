import Link from 'next/link'
import Image from 'next/image'

const Navar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77}/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/wilbert/test"><a>Wilbert Listing</a></Link>
    </nav>
  );
}
 
export default Navar;
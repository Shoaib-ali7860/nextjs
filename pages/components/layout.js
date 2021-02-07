import Link from 'next/Link'
import Head from 'next/head'

const Layout=({children,title})=>
{
return (
  <div className="root">
<Head>
<title>Portfolio</title>
</Head>
    <header><Link href='/' ><a>HOME</a></Link><Link href='/about'><a>ABOUT</a></Link>
    <Link href='/hireme'><a>HIRE ME</a></Link><Link href='/blog'><a>BLOG</a></Link></header>
     <h1>{title}</h1>
    {children}
   <footer>footer</footer>
   <style jsx>{`
      .root{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
       width:100%;
      }

      header{
        width:100%;
        display:flex;
        justify-content:space-around;

        background:indigo;
        font-size:1.2em;
        padding:1em;


      }
      header a{
        text-decoration:none;
        color:grey;

      }
      header a:hover{
        color:white;
        

      }
      header a:click{
        color:black;
      }
      footer{
        background:indigo;
        padding:1.2em;
        width:100%;
        color:white;
        text-align:center;
      }
   `}</style>
   <style global jsx>{`
      body{
        margin:0;
        font-size:110%;
        background:#f0f0f0;
      }
     `}</style>
  </div>
)

}

export default Layout

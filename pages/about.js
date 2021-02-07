import Link from 'next/Link'
import Layout from './components/layout.js'
import Joke from "./components/joke.js";
const About =()=>{
return (<Layout title="About"><p>this is about page</p>
	<Joke/></Layout>)
}
export default About

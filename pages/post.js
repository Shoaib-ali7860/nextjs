
import Layout from './components/layout.js'

const Post=({url})=>(<Layout title={url.query.title}></Layout>) 
export default Post
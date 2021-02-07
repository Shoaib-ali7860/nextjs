import Link from 'next/Link'
import Layout from './components/layout.js'
const PostLink=({title,slug})=>{
        return (
<li>
<Link as={slug} href={`./post?title=${title}`}>
<a>{title}</a>
</Link>
</li>
        	)
}

const Blog =()=>{
return (<Layout title="Blog"><ul>
	<PostLink title="React" slug="/react-post"/>
<PostLink title="Vue" slug="/Vue-Post"/>
<PostLink title="Anguler" slug="Anguler-post"/>
	</ul>
	</Layout>)
}
export default Blog
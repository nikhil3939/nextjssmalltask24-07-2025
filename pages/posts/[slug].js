import posts from '../../data/posts'

export default function Post({ post }) {
  if (!post) return <p>Post not found</p>

  return (
    <div>
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <p>{post.content}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.slug === params.slug)
  return { props: { post } }
}

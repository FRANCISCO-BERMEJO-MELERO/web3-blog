import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');

  const searchIndex = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    slug: post.slug,
    pubDate: post.data.pubDate,
    author: post.data.author
  }));

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

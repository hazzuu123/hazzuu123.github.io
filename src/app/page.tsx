import { parsePost } from "../lib/post";
import { getPostList } from "../lib/post";

export default async function Home() {
  const category = 'category1';
  const postList = await getPostList(category);
  //const post = await parsePost("./app/posts/category1/title1/content.mdx");

  console.log('postList', postList);

  return (
    <div>
    </div>
  );
}

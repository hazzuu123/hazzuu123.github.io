import PostHeader from "@/src/components/post/post-header";
import PostBody from "@/src/components/post/post-body";
import { parsePostDetail } from "@/src/lib/post";

export default async function PostDetail() {
    const post = await parsePostDetail("./src/posts/category1/title1/content.mdx");
    return (
        <div>
            <PostHeader post={post} />
            <PostBody post={post} />
        </div>
    );
}

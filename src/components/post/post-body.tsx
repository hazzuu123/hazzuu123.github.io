import { PostDetail } from "@/src/lib/post";
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
    post: PostDetail;
}

export default async function PostBody({ post }: Props) {
    return (
        <div>
            <MDXRemote source={post.content} />
        </div>
    );
}

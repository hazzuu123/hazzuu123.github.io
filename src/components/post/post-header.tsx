import { PostDetail } from "@/src/lib/post";

interface Props {
    post: PostDetail;
}

export default function PostHeader({ post }: Props) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <p>{post.dateString}</p>
            <p>{post.readingMinutes}</p>
        </div>
    );
}

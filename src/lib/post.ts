import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';

export interface Post {
    url: string;
    category: string;
    slug: string;
    title: string;
    desc: string;
    thumbnail: string;
    date: string;
    dateString: string;
    content: string;
    readingMinutes: number;
}

export interface PostMatter {
    title: string;
    desc: string;
    thumbnail: string;
    date: string;
}

export interface PostDetail extends PostMatter {
    dateString: string;
    content: string;
    readingMinutes: number;
}

const BASE_PATH = '/src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX 파일 파싱 : abstract / detail 구분
export const parsePost = async (postPath: string): Promise<Post> => {
    const postAbstract = parsePostAbstract(postPath);
    const postDetail = await parsePostDetail(postPath);
    return { ...postAbstract, ...postDetail };
};

// MDX Abstract
// url, cg path, cg name, slug
const parsePostAbstract = (postPath: string) => {
    // category1/title1/content

    const filePath = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, '')
        .replace('.mdx', '');

    // category1, title1
    const [category, slug] = filePath.split('/');

    // /blog/category1/title1
    const url = `/blog/${category}/${slug}`;

    return { url, category, slug };
};

// MDX Detail
export const parsePostDetail = async (postPath: string): Promise<PostDetail> => {
    const file = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(file);
    const grayMatter = data as PostMatter;
    const readingMinutes = Math.ceil(readingTime(content).minutes);
    const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
    return { ...grayMatter, dateString, content, readingMinutes };
};

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
    const folder = category || '**';
    const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
    return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
    const paths: string[] = getPostPaths(category);
    const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
    return posts;
};
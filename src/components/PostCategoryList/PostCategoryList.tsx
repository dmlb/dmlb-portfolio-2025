import Link from "next/link";

import styles from './PostCategoryList.module.css'

type Props = {
    categories: {
        title: string;
        slug: string;
    }[] | null;
};

export default function PostCategoryList({categories}: Props) {
    if (!categories || categories.length < 1) return null;
    return (
        <ul data-testid="ncmp-post-category-list" className={`list-unstyled ${styles.postCategoryList}`}>
            {categories.map(({title, slug}) => (
                <li key={slug}>
                    <Link href={`/posts/category/${slug}`}>{title}</Link>
                </li>
            ))}
        </ul>
    )
}
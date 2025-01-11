import Link from "next/link";

type Props = {
    categories: {
        title: string;
        slug: string;
    }[] | null;
    classNames?: string;
};

export default function PostCategoryList({categories, classNames}: Props) {
    if (!categories || categories.length < 1) return null;
    return (
        <ul className={classNames}>
            {categories.map(({title, slug}) => (
                <li key={slug}>
                    <Link href={`/posts/category/${slug}`}>{title}</Link>
                </li>
            ))}
        </ul>
    )
}
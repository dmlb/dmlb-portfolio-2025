"use client"

import { AUTHOR_QUERYResult } from '@/types/sanity';

import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';


export default function Header({author, navigation }: {author:Partial<AUTHOR_QUERYResult>, navigation: {name: string, path: string}[]}) {
    const pathname = usePathname()

    return (<header className={styles.header} data-testid="global-header">
	<div className={styles.headline}>
        <Image
            src="/images/logo-dmlb.png"
            alt="curly braces inside a lens"
            height={75}
            width={75} />
		<h1 className={styles.name}>
			{author?.name}
			<span>{author?.title}</span>
		</h1>
	</div>
	<div className={styles.socials}>
		// todo dev links
	</div>


	<nav className={styles.nav} aria-label="main site">
        {navigation.map(({name, path}) => {
            let active: 'page' | boolean = pathname === path ? 'page' : false;
            return <Link key={path} aria-current={active} href={path}>{name}</Link>
        })}
	</nav>
</header>)
}
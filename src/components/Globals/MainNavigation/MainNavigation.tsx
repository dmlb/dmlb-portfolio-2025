"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link';

import { MAIN_NAV } from "@/constants/navigation";
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
    const pathname = usePathname()
    const navigation = MAIN_NAV;

    return (
        <nav data-testid="global-nav" className={styles.nav} aria-label="main site">
        {navigation.map(({name, path}) => {
            const active: 'page' | boolean = pathname === path ? 'page' : false;
            return <Link key={path} aria-current={active} href={path}>{name}</Link>
        })}
	</nav>
    )
}
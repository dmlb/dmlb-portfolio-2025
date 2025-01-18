
import { AUTHOR_QUERYResult } from '@/types/sanity';

import Image from 'next/image';


import styles from './Header.module.css';
import DevLinks from '../../DevLinks/DevLinks';
import MainNavigation from '../MainNavigation/MainNavigation';


export default function Header({author }: {author:Partial<AUTHOR_QUERYResult>}) {

    return (<header className={styles.header} data-testid="global-header">
	<div className={styles.headline}>
        <Image
            src="/images/logo-dmlb.png"
            alt="curly braces inside a lens"
            height={75}
            width={75}
            priority />
		<h1 className={styles.name}>
			{author?.name}
			<span>{author?.title}</span>
		</h1>
	</div>
	<div className={styles.socials}>
        <DevLinks socialsOnly={true} socials={author?.socials} />
	</div>

    <MainNavigation />
</header>)
}
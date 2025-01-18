import sanityClient from "@/lib/sanity-utils/sanityClient";
import { OTHER_STUFF_QUERY } from "@/lib/sanity-utils/sanityQueries";

import styles from './other-stuff.module.css'


import GenericProjectCard from "@/components/Cards/GenericProjectCard/GenericProjectCard";

export default async function OtherStuff() {
    const projects = await sanityClient.fetch(OTHER_STUFF_QUERY);

    if (!projects) {
        return null;
    }

    return (<ul key="custom" className={`list-unstyled ${styles.cardList}`}>

        {/*style="--animation-order:2"*/}
        {projects.map((project) => (
            <li key={project._id}>
                <GenericProjectCard project={project} />
            </li>
        ))}
    </ul>);
}
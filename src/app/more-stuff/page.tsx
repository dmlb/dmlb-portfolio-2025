import sanityClient from "@/lib/sanity-utils/sanityClient";
import { MORE_STUFF_QUERY } from "@/lib/sanity-utils/sanityQueries";

import styles from './more-stuff.module.css'


import GenericProjectCard from "@/components/Cards/GenericProjectCard/GenericProjectCard";
import { MORE_STUFF_QUERYResult } from "@/types/sanity";

export default async function MoreStuff() {
    const projects: MORE_STUFF_QUERYResult = await sanityClient.fetch(MORE_STUFF_QUERY);

    if (!projects) {
        return null;
    }

    return (<ul key="custom" className={`list-unstyled ${styles.cardList}`}>

        {/*style="--animation-order:2"*/}
        {projects.map((project) => (
            <li key={project._id}>
                <GenericProjectCard project={project} cardVariantClasses="card--translucent card--bordered" />
            </li>
        ))}
    </ul>);
}
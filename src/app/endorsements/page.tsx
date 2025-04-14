import sanityClient from "@/lib/sanity-utils/sanityClient";
import { ENDORSEMENT_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { ENDORSEMENT_QUERYResult } from "@/types/sanity";
import styles from './endorsements.module.css';
import Blockquote from "@/components/Blockquote/Blockquote";

export default async function Endorsements() {
    const endorsements: ENDORSEMENT_QUERYResult = await sanityClient.fetch(ENDORSEMENT_QUERY);

    if (!endorsements) {
        return null;
    }
  
    /* TODO transfer style={{'--animation-order': i }}*/
    return (
	<ul className={`list-unstyled ${styles.endorsementsList}`}>
        {endorsements.map(({ quote, person, position, company }) => (
            <li key={person} itemScope itemType="https://schema.org/EndorseAction">
                <meta itemProp="endorsee" content="Danielle Bastien" />
				<meta itemProp="agent" content={person} />
                <Blockquote quote={quote} person={person} position={position} company={company} />
            </li>
        ))}
	</ul>
    );
}

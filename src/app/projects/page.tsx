import sanityClient from "@/lib/sanity-utils/sanityClient";
import { PROJECTS_QUERY, PROJECT_TYPE_QUERY } from "@/lib/sanity-utils/sanityQueries";
import styles from './projects.module.css';
import Accordion from "@/components/Accordion/Accordion";
import TechProjectCard from "@/components/Cards/TechProjectCard/TechProjectCard";

export default async function Endorsements() {
    const projects = await sanityClient.fetch(PROJECTS_QUERY);
    // radio options
    const projectTypeList = await sanityClient.fetch(PROJECT_TYPE_QUERY);

    // radio group name
    const filterRadioName = "type-filter"

    if (!projects && !projectTypeList) {
        return null;
    }

    return (<>

        <form className={styles.projectsForm} aria-label="Filter Projects">
            <Accordion isOpen={true} title="Filter Projects">

                <div className="form__input-wrapper">
                    <label className="form__label" htmlFor="search-projects">Search</label>
                    <input
                        className="form__input"
                        type="search"
                        name="search-projects"
                        id="search-projects"

                    />
                    <button className={styles.formReset} type="reset">
                        ✖
                        <span className="sr-only">clear search</span>
                    </button>
                </div>
                <fieldset className={styles.formRadioGroup}>
                    <legend>Filter by Project Type</legend>

                    <div className="form__radio-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" height="1.2em" width="1.2em">
                            <circle fill="none" stroke="var(--icon-stroke, AccentColor)" strokeWidth="4" cx="50" cy="50" r="30" />
                            <circle style={{ opacity: '' === '' ? 1 : 0 }} fill="var(--icon-fill, AccentColor)" cx="50" cy="50" r="20" />
                        </svg>
                        <input
                            className="form__radio"
                            type="radio"
                            name={filterRadioName}
                            id={`${filterRadioName}-a`}
                            value=""
                        />
                        <label htmlFor={`${filterRadioName}-a`} className="form__label">All</label>
                    </div>

                    {projectTypeList && projectTypeList.map(({title, slug, _id}) => (
                        <div key={_id} className="form__radio-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" height="1.2em" width="1.2em">
                                <circle fill="none" stroke="var(--icon-stroke, AccentColor)" strokeWidth="4" cx="50" cy="50" r="30" />
                                <circle style={{ opacity: '' as unknown === slug ? 1 : 0 }} fill="var(--icon-fill, AccentColor)" cx="50" cy="50" r="20" />
                            </svg>
                            <input
                                className="form__radio"
                                type="radio"
                                name={filterRadioName}
                                id={`${filterRadioName}-${_id}`}
                                value={slug}
                            />
                            <label htmlFor={`${filterRadioName}-${_id}`} className="form__label">
                                {title}
                            </label>
                        </div>
                    ))}
                </fieldset>
            </Accordion>
            {/*
    todo: convert search and filter functionality
	<span role="status">
		{$projectStore.filtered.length} projects 
		{$projectStore.search || $projectStore.typeFilter && (for)}
		{$projectStore.search&& (search {$projectStore.search})}
		{$projectStore.search && $projectStore.typeFilter&&( and )}
		{$projectStore.typeFilter &&(filter {$projectStore.typeFilter})}
	</span>
    */}
        </form>

        {projects && (
            <ul className={`list-unstyled card-grid`}>
                {projects.map((project) => (
                    // todo: in:fade animate:flip={{ duration: 200 }}
                    <li key={project._id}>
                        <TechProjectCard project={project} cardVariantClasses="card--translucent card--bordered" />
                    </li>
                ))}
            </ul>
        )}
    </>
    );
}
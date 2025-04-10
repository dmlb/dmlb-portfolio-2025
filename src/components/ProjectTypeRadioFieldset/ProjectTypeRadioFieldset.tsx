import { PROJECT_TYPE_QUERYResult } from '@/types/sanity';
import styles from './ProjectTypeRadioFieldset.module.css';

type Props = {
    fieldInfo: {
        legend: string;
        name: string;
    };
    projectTypeList: PROJECT_TYPE_QUERYResult | null;
    selectedValue: string | null;
    setSelectedValue: (value: string | null) => void;
}

export default function ProjectTypeRadioFieldset({ fieldInfo, projectTypeList, selectedValue, setSelectedValue }: Props) {
    return (
        <fieldset data-testid="ncmp-project-type-fieldset" className={styles.formRadioGroup}>
            <legend>{fieldInfo.legend}</legend>

            <div className="form__radio-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" height="1.2em" width="1.2em">
                    <circle fill="none" stroke="var(--icon-stroke, AccentColor)" strokeWidth="4" cx="50" cy="50" r="30" />
                    <circle style={{ opacity: selectedValue === null ? 1 : 0 }} fill="var(--icon-fill, AccentColor)" cx="50" cy="50" r="20" />
                </svg>
                <input
                    className="form__radio"
                    type="radio"
                    name={fieldInfo.name}
                    id={`${fieldInfo.name}-a`}
                    value=""
                    onChange={(e) => setSelectedValue(null)}
                />
                <label htmlFor={`${fieldInfo.name}-a`} className="form__label">All</label>
            </div>

            {projectTypeList && projectTypeList.map(({ title, slug, _id }) => (
                <div key={_id} className="form__radio-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" height="1.2em" width="1.2em">
                        <circle fill="none" stroke="var(--icon-stroke, AccentColor)" strokeWidth="4" cx="50" cy="50" r="30" />
                        <circle style={{ opacity: selectedValue === slug ? 1 : 0 }} fill="var(--icon-fill, AccentColor)" cx="50" cy="50" r="20" />
                    </svg>
                    <input
                        className="form__radio"
                        type="radio"
                        name={fieldInfo.name}
                        id={`${fieldInfo.name}-${_id}`}
                        value={slug}
                        onChange={(e => setSelectedValue(e.target.value))}
                    />
                    <label htmlFor={`${fieldInfo.name}-${_id}`} className="form__label">
                        {title}
                    </label>
                </div>
            ))}
        </fieldset>
    );
}
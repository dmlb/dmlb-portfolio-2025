import styles from './SearchField.module.css';

type Props = {
    fieldInfo: {
        label: string;
        name: string;
        id: string;
    }
    searchValue: string | null;
    setSearchValue: (value: string | null) => void
}

export default function SearchField({ fieldInfo, searchValue, setSearchValue }: Props) {
    if (!fieldInfo) {
        return null;
    }

    return (
        <div data-testid="ncmp-search-field" className="form__input-wrapper">
            <label className="form__label" htmlFor={fieldInfo.id}>{fieldInfo.label}</label>
            <input
                className="form__input"
                type="search"
                name={fieldInfo.name}
                id={fieldInfo.id}
                value={searchValue ?? ''}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className={styles.formReset} type="button" onClick={() => setSearchValue(null)}>
                <span aria-hidden="true">✖</span>
                <span className="sr-only">clear search</span>
            </button>
        </div>
    );
}
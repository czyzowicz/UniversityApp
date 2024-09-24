interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar = ({value, onChange}: SearchBarProps) => {

    return (
        <div>
            <input type='search' placeholder='Search' value={value} onChange={onChange}/>
        </div>
    )
}
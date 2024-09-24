export const SearchBar = ({value, onChange}) => {

    return (
        <div>
            <input type='search' placeholder='Search' value={value} onChange={onChange}/>
        </div>
    )
}
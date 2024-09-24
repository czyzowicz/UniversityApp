export const UniversityList = ({data, loading}) => {
    console.log({data});
    if (loading) return <p>Loading...</p>

    return (
        <ul>
            {data.map(((university, index) => (
                <li key={university.name}>
                    <p>{university.name}</p>
                    <p>{university.web_pages}</p>
                    <p>{university.country}</p>
                    <p>{university.alpha_two_code}</p>
                </li>
            )))}
        </ul>
    );
}
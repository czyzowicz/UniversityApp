import {UniversityListTypes} from "../../types/universityList.types.ts";

interface UniversityListProps {
    data: UniversityListTypes[];
    loading: boolean;
}

export const UniversityList = ({data, loading} : UniversityListProps) => {
    if (loading) return <p>Loading...</p>

    return (
        <ul>
            {data.map(((university) => (
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
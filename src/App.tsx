import './App.css'
import {UniversityList} from "./components/UniversityList";
import {SearchBar} from "./components/SearchBar";
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=Poland')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const filteredData = data.filter((university: { name: string, domain: [], alpha_two_code: string }) => {
        return university.name.toLowerCase().includes(value.toLowerCase()) || university.alpha_two_code.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <>
            <SearchBar value={value} onChange={onChange}/>
            <div className="container">
                <UniversityList data={filteredData} loading={loading}/>
            </div>
        </>
    )
}

export default App

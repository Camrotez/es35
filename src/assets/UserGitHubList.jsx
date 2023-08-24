import GithubUser from "./GithubUser";
import { useState } from "react";
function UserGitHubList() {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddUsername = () => {
            setData([...data, inputValue])
            setInputValue('')

    }

    return <>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddUsername}>Add</button>
        <ul>
            {data.map((user, index) => <li key={user + index}><GithubUser username={user} /></li>)}
        </ul>
    </>
}
export default UserGitHubList
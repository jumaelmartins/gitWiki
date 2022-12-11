import { SearchContainer } from "./style";


const Search = ({value, onChange}) => {
    return (
        <SearchContainer>
            <input value={value} onChange={onChange}></input>
        </SearchContainer>
    )
}

export default Search;
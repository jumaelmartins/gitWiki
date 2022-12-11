
import gitLogo from"../assets/gitlogo.svg";
import { Container } from "./styles";
import Search from "../components/search";
import Button from "../components/button";
import { HeaderContainer } from "../components/header/style";
import UserInfo from "../components/reposInfor";
import { useState } from "react";
import { api } from "../services/api"

function App() {
  const [currentRepo, setCurrentRepo] = useState ([])

  const [repos, setRepos] = useState ([])
 
  const handleSearchRepos = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }


  }

  return (
    <Container>
      <h1>GitHub Wiki </h1>
      <HeaderContainer>
        <img src={gitLogo} width={48} height={48}/>
        <Search value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepos}/>
      </HeaderContainer>
      <br></br>
      {repos.map(repo => <UserInfo repo={repo}/>)}
    </Container>
  );
}

export default App;

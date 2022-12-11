import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { UserInfoContainer } from "./style";

const UserInfo = ({repo}) => {
    return(
        <UserInfoContainer>
            <h3>{repo.name}</h3>
            <h5>{repo.full_name}</h5>
            <br></br>
            <a href={repo.html_url} target="_blank" className="verRepo">Ver Repo</a>
            <p className="remove">Remove</p>         
            <hr/>
        </UserInfoContainer>
    )
}

export default UserInfo;
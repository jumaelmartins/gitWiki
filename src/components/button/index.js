import { ButtonContainer } from "./style";

const Button = ({onClick}) => {
    return(
        <ButtonContainer onClick={onClick}>
            Search
        </ButtonContainer>
    )
}

export default Button;
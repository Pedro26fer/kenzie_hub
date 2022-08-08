import { Button } from "./style";

const ButtonBase = ({children, pinkButton = true, ...rest}) => (
    <Button pinkButton={pinkButton} {...rest} >
        {children}
    </Button>
)

export default ButtonBase
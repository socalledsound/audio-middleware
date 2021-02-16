import React, {Component} from "react";
import styled from "styled-components";

 const StyledKeypadButton = styled.button`
    &&& {
        width: 100px;
        height: 100px;
        font-size: 36px;
        outline: none;
    }  
`;
export default StyledKeypadButton
// export class StyledKeypadButton extends Component {
//     render() {
//         const {...props} = this.props;
//         return <StyledBootstrapButton {...props}/>
//     }
// }

import styled from '@emotion/styled';
import { FaHeartbeat } from 'react-icons/fa';

export const FooterMain = styled.footer`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: #f7f7f7;

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const FooterSecondText = styled.div`
    display: flex;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;

    }
}
`;

export const FooterText = styled.p`
  display: block;
  font-size: 14px;
  line-height: 1.14;
  color: #545454;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
  }
`

export const BounceHeart = styled(FaHeartbeat)`
color: red;
margin-right: 10px;
margin-left:10px;
width:30px;
height: 3%;
color: rgb(255, 17, 17);
animation-name: pulse;
animation-duration: 1s;
animation-direction: alternate;
animation-iteration-count: infinite;
animation-timing-function: linear;
 animation-delay: ${props => props.delay};
 @keyframes pulse{
    from {transform :scale(.8);}
    to   {transform :scale(1)}
`

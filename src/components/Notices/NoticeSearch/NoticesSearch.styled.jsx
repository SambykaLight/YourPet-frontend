import styled from 'styled-components';


export const Form = styled.form`
   text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height:44px
`;

export const FormContainer = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding-left: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #888888;
    background: #ffffff;
    outline: none;
    border-radius: 20px;
    border: transparent;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

    @media screen and (min-width: 480px) {
      width: 280px;
    }

    @media screen and (min-width: 768px) {
      width: 608px;
      font-size: 20px;
      line-height: 24px;
    }
    :not(:placeholder-shown){
    opacity: 1;
    right: 40px;
  }
`;
export const BtnSearch = styled.button`
    width: 24px;
    height: 24px;

    position: absolute;
    bottom: 10px;
    color: #54adff;
    z-index: 2;

    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    background-color: transparent;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      right 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 480px) {
      right: 12px;
    }

    @media screen and (min-width: 768px) {
      right: 20px;
    }

    @media screen and (min-width: 1280px) {
      right: 20px;
    }
    :hover,
 :focus {
    color: #145ea3;},
    :not(:placeholder-shown) {
    opacity: 1;
  }
`;


  // .input:not(:placeholder-shown)+.btnSearch {
  //   opacity: 1;
  // }

  // .input:not(:placeholder-shown)+.btnSearch {
  //   right: 40px;

  //   @media screen and (min-width: 480px) {
  //     right: 60px;
  //   }

  //   @media screen and (min-width: 768px) {
  //     right: 90px;
  //   }

  //   @media screen and (min-width: 1280px) {
  //     right: 350px;
  //   }
  // }

import styled from 'styled-components';

export const CardItem = styled.li`
 background: #ffffff;
    width: 280px;
    height: 456px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 0px 0px 40px 40px;
    @media screen and (min-width: 768px) {
      width: 336px;
      height: 456px;
      margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
      width: 288px;
      height: 456px;
      margin-bottom: 42px;
  }
`

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`

export const BtnList= styled.ul`
    position: absolute;
    bottom: 162px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    display: flex;`

export const ImgBtn= styled.button`
  display: flex;
    flex-direction: row;
    justify-content: left;
    overflow: hidden;
    align-items: center;
    margin: 0 5px;

    width: 80px;
    height: 28px;

    background: #cce4fb;
    border-radius: 16px;
    border: transparent;

    cursor: pointer;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;

    color: #111111;
    svg {
    margin-right: 2px;
  }
`
export const FavoriteBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1px;
    right: 1px;
    height: 40px;
    width: 40px;
    margin: 12px 12px 16px 0;

    background: #cce4fb;
    border: transparent;
    border-radius: 50%;

    cursor: pointer;
  svg:hover{
    fill: #54adff;
  }
`

export const DelBtn= styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 57px;
    right: 1px;
    height: 40px;
    width: 40px;
    margin: 12px 12px 16px 0;

    background: #cce4fb;
    border: transparent;
    border-radius: 50%;

    cursor: pointer;
    svg:hover {
    fill: #54adff;
  }
    `

export const Text= styled.p`
    position: absolute;
    bottom: 220px;
    right: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 126px;
    max-height: 32px;
    padding: 11px 0;
    font-size: 14px;
    line-height: inherit;
    border-radius: 0px 16px 16px 0px;
    color: #000;
    background-color: #cce4fb;
@media screen and (min-width: 768px) {
    right: 178px;
@media screen and (min-width: 1280px) {
    right: 154px;
}
}
`

export const Title = styled.h2`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.38;
    height: 66px;
    overflow: auto;

    color: #111111;

    margin: 20px;
`


export const Btn = styled.button`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    background-color: #ffffff;
    color: #54adff;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 28px;
    gap: 10px;
    width: 248px;
    height: 38px;
    border: 2px solid #54adff;
    border-radius: 40px;

    cursor: pointer;

    &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: rgb(253, 247, 242);
    border: none;
    background-color: transparent;
  }
`

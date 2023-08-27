import styled from '@emotion/styled';
import mb_bg_1x from '../../images/Mobile/mb-bg-1x.png';
import mb_bg_2x from '../../images/Mobile/mb-bg-2x.png';

import tb_bg_1x from '../../images/Tablet/tb-bg-1x.png';
import tb_bg_2x from '../../images/Tablet//tb-bg-2x.png';

import lg_bg_1x from '../../images/Desktop/lg-bg-1x.png';
import lg_bg_2x from '../../images/Desktop/lg-bg-2x.png';

export const Section = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${mb_bg_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mb_bg_2x});
  }

  @media (min-width: 768px) {
    background-image: url(${tb_bg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tb_bg_2x});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${lg_bg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${lg_bg_2x});
    }
  }
`;

export const ContainerWalls = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;

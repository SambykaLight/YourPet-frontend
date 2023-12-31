import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const DivSpinning = styled.div`
  width: 1em * 6;
  margin: 1em * 2 auto;
  text-align: center;
`;
const SpanLoading = styled.span`
  display: block;
  margin: 1em / 2 0 0 0;
  color: #1565c0;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  -webkit-animation: pulse 2000ms linear infinite;
  -moz-animation: pulse 2000ms linear infinite;
  animation: pulse 2000ms linear infinite;
`;
const DivAjaxLoader = styled.div`
  position: absolute;
  left: 70%;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 50px;
  width: 1em;
  height: 3em;
  color: #1565c0;
`;
function createCSS() {
  let styles = '';
  for (let i = 1; i < 12; i += 1) {
    styles += `
      &:nth-child(${i}) {
        animation-delay: ${(i * -1 + 6) * 0.25}s;
      }
    `;
  }
  return css`
    ${styles}
  `;
}
const Keyframes = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`;
const DivPaw = styled.div`
  width: 1em;
  height: 1em;
  animation: 2050ms ${Keyframes} ease-in-out infinite;
  opacity: 0;
  &:nth-child(odd) {
    transform: rotate(-10deg);
  }
  &:nth-child(even) {
    transform: rotate(10deg) translate(125%, 0);
  }
  ${createCSS()};
`;
const SvgPaw = styled.svg`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;

export default function WalkingLoader() {
  return (
    <>
      <DivSpinning>
        <div className="ball"></div>
        <SpanLoading>Loading</SpanLoading>
      </DivSpinning>
      <svg id="svg-sprite">
        <symbol id="paw" viewBox="0 0 249 209.32">
          <ellipse
            cx="27.917"
            cy="106.333"
            strokeWidth={0}
            rx="27.917"
            ry="35.833"
          />
          <ellipse
            cx="84.75"
            cy="47.749"
            strokeWidth={0}
            rx="34.75"
            ry="47.751"
          />
          <ellipse
            cx={162}
            cy="47.749"
            strokeWidth={0}
            rx="34.75"
            ry="47.751"
          />
          <ellipse
            cx="221.083"
            cy="106.333"
            strokeWidth={0}
            rx="27.917"
            ry="35.833"
          />
          <path
            strokeWidth={0}
            d="M43.98 165.39s9.76-63.072 76.838-64.574c0 0 71.082-6.758 83.096 70.33 0 0 2.586 19.855-12.54 31.855 0 0-15.75 17.75-43.75-6.25 0 0-7.124-8.374-24.624-7.874 0 0-12.75-.125-21.5 6.625 0 0-16.375 18.376-37.75 12.75 0 0-28.29-7.72-19.77-42.86z"
          />
        </symbol>
      </svg>
      <DivAjaxLoader>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
        <DivPaw>
          <SvgPaw>
            <use xlinkHref="#paw" />
          </SvgPaw>
        </DivPaw>
      </DivAjaxLoader>
    </>
  );
}

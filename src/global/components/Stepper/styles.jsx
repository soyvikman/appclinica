import React from "react";
import styled from "styled-components";
import { size } from '../../styles/Responsive';

export const StepWrapper = styled.div`
  width: 100%;
`;

export const StyledList = styled.ul`
  margin: auto;
  width: 80%;
  counter-reset: step;
  padding: 0;
  @media only screen and (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

export const Step = styled.li`
  list-style-type: none;
  width: ${(props) =>
    props.totalSteps ? 100 / props.totalSteps + "%" : "auto"};
  float: left;
  font-size: 14px;
  position: relative;
  text-align: center;
  color: #7d7d7d;
  font-family: Calibri;

  &:before {
    width: 32px;
    height: 32px;
    font-weight: bold;
    content: counter(step);
    counter-increment: step;
    line-height: 30px;
    border: 2px solid #7d7d7d;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
    z-index: 1;
  }

  &:after {
    width: 86%;
    height: 1px;
    content: "";
    position: absolute;
    background-color: #7d7d7d;
    top: 15px;
    left: -43%;
    z-index: 0;

    @media only screen and (max-width: ${size.laptop}) {
      width: 82%;
      left: -41%;
    }

    @media only screen and (max-width: ${size.tablet}) {
      width: 72%;
      left: -36%;
    }

    @media only screen and (max-width: ${size.tabletM}) {
      width: 70%;
      left: -35%;
    }
  }

  &:nth-child(1):after {
    content: none;
  }

  &.active {
    color: #44accf;
  }

  &.active::before {
    border-color: #44accf;
  }

  &.active::after {
    background-color: #44accf;
  }

  &.completed:after {
    background-color: #44accf;
  }

  &.completed::before {
    background-color: #44accf;
    border-color: #44accf;
    color: #fff;
    content: "\\2713";
  }
`;

import React from 'react'
import styled from 'styled-components'

import { size } from '../../styles/Responsive';
import { allColors } from '../../../global/styles/index'

const Content = styled.div`
  flex-direction: column;
  text-align: left;
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    flex-direction: row;
  }
  `
const Title = styled.p`
  & > span {
    font-size: 22px;
    line-height: 28px;
    color: ${allColors.mainColor};
    font-weight: bold;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    font-size: 24px;
    line-height: 29px;
    margin: 15px 0 20px 0;
  }
  @media only screen and (min-width: ${size.laptopL}) and (max-width: ${size.laptopM}) {
    margin: 15px 0 20px 0;
    font-size: 26px;
    line-height: 31px;
  }
  @media only screen and (min-width: ${size.laptopM}) {
    font-size: 28px;
    line-height: 34px;
    margin: 25px 0 30px 0;
  }
`

function MainTitle({ title }) {
  return (
    <Content>
      <Title>
        <span className="bodyText">{title}</span>
        {/* <Line /> */}
      </Title>
    </Content>
  )
}

export default MainTitle

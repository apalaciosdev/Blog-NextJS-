import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';

import NextLink from "next/link";

const StyledDiv = styled.div`
  
  display:flex;
  align-items: center;
  justify-content: center;
  padding-rigth: 10px;
  padding-left: 10px;
  width: 99%;
  :hover{
    background-color: #e0e0e0;
  }
`

const StyledImage = styled(Image)`
  border-radius: 10px;
  flex-grow:0;
  flex-shrink:0;
  width: 2%;
`

const StyledH3 = styled.h3`
  width: 98%;
  padding-left: 10px;
  text-align: left;
`




export const PostListItem = ({ title, date, languaje}) => {


  return (
    <StyledDiv>      
          <StyledImage src={`/images/icons/${languaje}.png`} alt='Logo' width={40} height={40}/>
          <StyledH3> {title} </StyledH3>
    
    </StyledDiv>

  );
};
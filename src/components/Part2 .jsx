import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
 

  height: 70vh;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width:60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;


const PARA= styled.p`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 800;
`;

const Part2  = ({ item }) => {
  return (
    <Container>
      <Info>
      <Image src={"https://www.enviromon.net/wp-content/uploads/downtime-calculator-cover-blue.jpg"} />

        <Title>Calculate Just Any Thing</Title>
        <PARA>The best website in calculations all you need in one place need not to worry from now on , we provide the service you need ,work smart , better to start now </PARA>
     
      </Info>
    
    </Container>
  );
};

export default Part2 ;

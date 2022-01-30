
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;



const Desc = styled.p`
 
color: gray;
`;









const Right = styled.div`
  flex: 1;
  padding: 7%;

  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const Title = styled.h1`
   
    margin-bottom: 20px;
`;

const Button = styled.button`
  
    padding: 10px;
    margin-top: 20px;
    color:#1976d2;
    cursor: pointer;
    font-weight: 800;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;
const Part1 = () => {
  return (
    <Container>
      <Left>
      <Image src={"https://i0.wp.com/ar-ms.in/wp-content/uploads/2021/05/Working-from-Home-Illustration.jpg?fit=2000%2C1440&ssl=1"} />

      </Left>
     

      <Right>
      <Title>Calculate Just Any Thing</Title>
      <Desc >
      The best website in calculations all you need in one place need not to worry from now on , we provide the service you need ,work smart , better to start now 
        
        </Desc>
      
        <Button>Start Now </Button>
      </Right>

    </Container>
  );
};

export default Part1;

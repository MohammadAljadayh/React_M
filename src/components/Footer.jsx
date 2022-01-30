import {
  Facebook,
  Instagram,

} from "@material-ui/icons";
import styled from "styled-components";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { mobile } from "../responsive";
const Container = styled.div`
  background-color:  #1976d2;

  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const CC = styled.h5`
background-color: #1976d2;
margin-top: 5%;
margin-left: 15%;
color:white;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;




const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;


const Contabtlogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;


const Title = styled.h3`
  margin-bottom: 30px;
  color:white;

  
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color:white;

`;

const Right = styled.div`
  flex:3;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;



const Container1 = styled.div`
  background-color: #1976d2;
  display: flex;

  flex-direction: column;
`;
const Title1 = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  margin-left: 10%;
  color:white;


`;



const InputContainer1 = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input1 = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button1 = styled.button`
border: none;
  flex: 1;
  color:#1976d2;
  background-color:	#BEBEBE;
  cursor: pointer;
  font-weight: 800;
  
`;
const Footer = () => {
  return (
    <Container>

      <Left>

        <Title>Fellow US AT</Title>
        <List>
          <ListItem>       <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <Contabtlogo >
          FaceBook
          </Contabtlogo>
        
          </SocialContainer> </ListItem>
          <ListItem>  <SocialContainer>
          <SocialIcon color="3B5999">
          <YouTubeIcon />
          </SocialIcon>
          <Contabtlogo >
          Youtube
          </Contabtlogo>  </SocialContainer>
          </ListItem>
          <ListItem>  
            <SocialContainer>
            <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <Contabtlogo >
          Instagram
          </Contabtlogo>  </SocialContainer></ListItem>
          
        </List>
        </Left>

      <Right>
  
        <Container1>
      <Title1>Newsletter</Title1>
      <InputContainer1>
        <Input1 placeholder="Your email" />
        <Button1>
         Subscribe
        </Button1>
      </InputContainer1>
    </Container1>
    <CC>
 all rights reserved.2022
</CC>
      </Right>

    </Container>

   

  );
};

export default Footer;

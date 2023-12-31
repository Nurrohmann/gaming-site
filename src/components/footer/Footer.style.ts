import styled from "styled-components";

export const FooterWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   padding: 4rem 2rem 0 2rem;
   background-color: #070707;
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: auto;
   }
`;

export const FooterText = styled.p`
   color: white;
   font-family: sans;
`;

export const FooterDescription = styled.div`
   display: flex;
   justify-content: center;
   padding: 0 0 3rem 0;
   width: 100%;
   border-bottom: 2px solid #d2d2d2;
`;

export const FooterInformation = styled.div`
   display: flex;
   font-family: sans;
   flex-direction: column;
   color: white;
   justify-content: center;
   width: 30%;
   h1 {
      margin: 0;
      padding: 0;
   }
   > ${FooterText} {
      margin: 1rem 0 1rem 0;
      padding: 0;
   }
`;

export const FooterAbout = styled.div`
   display: flex;
   color: white;
   font-family: sans;
   justify-content: center;
   margin: 0 2rem 0 2rem;
   flex-direction: column;
   width: 10%;
   h4 {
      margin: 0 0 0.9rem 0;
   }
   a {
      margin: 0 0 0.2rem 0;
      text-decoration: none;
      color: white;
   }
   a:hover {
      text-decoration: underline;
   }
`;

export const FooterContact = styled.div`
   display: flex;
   color: white;
   width: 30%;
   font-family: sans;
   flex-direction: column;
   justify-content: center;
   margin: 0 2rem 0 0;
   h4 {
      margin-bottom: 0.9rem;
   }
   p {
      margin: 0 0 0.9rem 0;
   }
`;

export const FooterSocialMed = styled.div`
   display: flex;
   color: white;
   align-items: end;
   p {
      margin-right: 0.3rem;
   }
`;

export const SosmedIMG = styled.img`
   height: 1rem;
   width: 1rem;
`;

export const IMG = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: white;
   height: 2rem;
   width: 2rem;
   border-radius: 100%;
   padding: 0rem;
   margin-right: 0.6rem;
   transition: all 0.3s;
   &:hover {
      transform: scale(1.087);
   }
   &:active {
      transform: scale(0.9);
   }
`;

export const Copyright = styled.div`
   display: flex;
   height: 5rem;
   align-items: center;
   justify-content: center;
`;

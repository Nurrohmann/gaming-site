import styled from "styled-components";

//for Projects Component
export const ImageProjects = styled.div`
   display: flex;
   transition: all 0.3s;
   &:hover {
      opacity: 1;
      transform: scale(1.07);
      transition: all 0.3s;
   }
`;

//for LoopImage Component
export const ProjectWrapper = styled.div`
   display: flex;
   margin: 0.7rem;
`;

export const ProjectContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-bottom: 3rem;
`;

//style for ShowProjects Component
export const MainProjects = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: linear-gradient(to bottom, rgb(106, 78, 209), rgb(71, 29, 187));
   justify-content: center;
   padding: 3rem 0;
   @media screen and (min-width: 1680px) {
      width: 80rem;
      height: auto;
   }
`;

export const DescriptionProject = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: sans;
   color: white;
   margin-bottom: 4rem;
   h1 {
      margin: 0;
      padding: 0 0 1rem 0;
   }
   p {
      font-size: 1rem;
   }
`;

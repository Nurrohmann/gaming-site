import styled from "styled-components";

const ImageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
      padding: 1rem 0;
      color: white;
   }
`;

const ImagePath = styled.img`
   background-color: white;
   border-radius: 100%;
   padding: 1.1rem;
   height: 5rem;
   width: 5rem;
`;

interface Path {
   img: string;
   title: string;
   icon: string;
}

const Path = ({ img, title, icon }: Path) => {
   return (
      <ImageWrapper>
         <ImagePath src={img} alt='imagePath' />
         <p>{title}</p>
         <img src={icon} alt='icon' />
      </ImageWrapper>
   );
};

export default Path;

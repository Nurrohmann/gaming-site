import styled from "styled-components";
import Path from "./Path";

const List = styled.li`
   display: flex;
   margin-right: 7rem;
   margin-bottom: 3rem;
`;

const ListWrapper = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

interface Paths {
   pathData: Path[];
}

export const LoopPath = ({ pathData }: Paths) => {
   return (
      <ListWrapper>
         {pathData.map((item, index) => (
            <List key={index}>
               <Path img={item.img} title={item.title} icon={item.icon} />
            </List>
         ))}
      </ListWrapper>
   );
};

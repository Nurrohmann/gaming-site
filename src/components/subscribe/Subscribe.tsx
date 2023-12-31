import { Container } from "../heroSections/Hero.style";
import {
   SubscribeWrapper,
   SubscribeInformation,
   SubscribeForm,
   FormInformation,
   InputWrapper,
   SubscribeInput,
   SubscribeButtons,
} from "./Subscribe.style";

export const Subscribe = () => {
   return (
      <Container>
         <SubscribeWrapper>
            <SubscribeInformation>
               <h2>Lorem Ipsum</h2>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
               </p>
            </SubscribeInformation>
            <SubscribeForm>
               <FormInformation>
                  <h2>Stay in the loop</h2>
                  <p>
                     Subscribe to receive the latest news and updates about TDA.
                     We promise not to spam you!{" "}
                  </p>
               </FormInformation>
               <InputWrapper>
                  <SubscribeInput
                     type='email'
                     placeholder='Enter email address'
                  />
                  <SubscribeButtons>Continue</SubscribeButtons>
               </InputWrapper>
            </SubscribeForm>
         </SubscribeWrapper>
      </Container>
   );
};

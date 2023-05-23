import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import PaintedBrick from "./images/PaintedBrick.jpg";
import styled from "styled-components";

export const About = () => {
  return (
    <OuterWrapper elevation={0}>
      <InnerWrapper>
        <SectionWrapper>
          <BodyText>
            <span>
              <Subtitle>People first, always.</Subtitle>
            </span>
            <br />I learned a lot during my 15+ years in the retail industry but
            easily the most transformative learning was to put people,
            relationships and culture as the 'why' behind every decision that I
            made. During my time as Head of Retail for Tuft & Needle, I tossed
            out the rule book on retail strategy and operations and asked our
            customers and employees to write a new one. I forged relationships
            with every single store employee and took the time to listen to
            thousands of customers. As a result, we created a new retail
            experience that not only made our stores the best places to shop,
            but also the best places to work.
          </BodyText>
          <HeadShot
            src={PaintedBrick}
            alt="Woman standing in front of a painted brick wall."
          />
        </SectionWrapper>
        <SectionWrapper>
          <BodyText>
            <span>
              <Subtitle>The call to development.</Subtitle>
            </span>
            <br />
            After experiencing some organizational shifts and a global pandemic
            that had me home with my kids full-time for the first time in years
            -- I realized that I needed to make a change. I needed a career that
            would allow me to lean into challenges and solve problems that
            improve the lives of everyday people but also provide the balance of
            being home with my family. So, I left my retail career in March 2021
            and enrolled in the Frontend Web Development Program at Turing
            School of Software & Design. It was there that I uncovered a passion
            for programming. I spent 6 months coding 60+ hours a week to build a
            solid foundation building frontend applications in JavaScript and
            React. I completed the program with full marks and was hired right
            out of the program as a Fullstack Software Engineer for
            Phoenix-based property tech startup, Stoa USA.
            <br /> <br />I was placed on a lean team that focused on the Partner
            Portal, Stoa's primary digital product that enabled its partners to
            manage their portfolio of homes with Stoa. While there, I hit the
            ground running and accomplished more than I ever thought possible in
            my first year as a software engineer. Given my background working
            for a tech startup before, I was trusted to take on large projects
            and learn on-the-fly. I migrated entire components from our legacy
            stack into our new stack with a focus on modernizing as much as
            possible -- researching and updating npm packages, switching from
            class-based components to functional, writing custom hooks and
            utilizing styled MUI components. Additionally, I recognized an area
            of opportunity to create a single source of truth for critical data
            that many teams relied upon. With approval from my manager, I
            proposed moving the data into a relational database and setting up
            an endpoint in our API that would enable all teams access to the
            data. To complete the project, I modeled the new database tables,
            created them, seeded the data, set up the new API service and then
            updated existing frontend and backend functionality of our app to
            use the new data source. This reduced margin for inconsistencies
            across teams, simplified data maintenance and improved the quality
            of homes that came through Stoa's funnel. I was also responsible for
            on-call shifts where I had to triage bugs and monitor logs. <br />
            <br />
            In March 2023, my role was impacted by a second round of layoffs at
            Stoa. I was so incredibly bummed. I truly loved my work, the team
            and how much I was learning. Since, I've been on the search for my
            next adventure. I'd love to join a team of smart and collaborative
            engineers who are working together to make the lives of everyday
            humans better. I am experienced in React, TypeScript, Node.js, CSS &
            Tailwind, GraphQL, REST API, Urql, Apollo, PostgreSQL, Sequelize,
            and Docker. I am currently working on a side project in Elixir and
            Phoenix LiveView. If you think I'd be a great fit for your team,
            don't hesitate to reach out! You can contact me here.
          </BodyText>
        </SectionWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const OuterWrapper = styled(Card)`
  max-width: 100%;
  padding: 1rem;
`;

export const InnerWrapper = styled(CardContent)`
  width-width: 100%;
`;

export const Subtitle = styled.div`
  font-family: Barlow;
  font-size: 1.75rem;
  text-align: left;
  font-weight: 400;
`;

export const BodyText = styled.div`
  font-family: Barlow;
  font-size: 1.25rem;
  text-align: left;
  margin-top: 1rem;
  margin-right: 2rem;
  font-weight: 300;
`;

export const HeadShot = styled.img`
  width: 40%;
`;

export const SectionWrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
  max-width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

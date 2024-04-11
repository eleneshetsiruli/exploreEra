import { useState } from "react";
import {
  DiscoverContainer,
  PopUpBoxStyle,
  StyledDiscoverSection,
} from "../styled-components/homePage/HomeStyles";
import { WatchContent } from "./WatchContent";
import { DiscoverData } from "../Data";
import { PopularTour } from "./PopularTour";
import { Blogs } from "./Blogs";
import { BookInputs } from "./BookInputs";
import { Footer } from "./Footer";

export const Discover = () => {
  const [openWindow, setOpenWindow] = useState(false);

  return (
    <>
      <StyledDiscoverSection>
        <p>Discover Our Services</p>
        <p>
          ExploreEra provides a one-stop solution for individuals seeking
          well-planned journeys. These services include expert advice on
          destination selection, flight and accommodation bookings, and
          customized itineraries to individual preferences.
        </p>

        <span onClick={() => setOpenWindow(true)}>see all</span>

        <DiscoverContainer>
          {DiscoverData.slice(0, 4).map((element) => (
            <DiscoverItem key={element.id} data={element} />
          ))}
        </DiscoverContainer>

        {openWindow && (
          <PopUpBoxStyle>
            {DiscoverData.map((el) => (
              <PopUpBox key={el.id} data={el} />
            ))}
            <button onClick={() => setOpenWindow(false)}>&times;</button>
          </PopUpBoxStyle>
        )}

        <WatchContent />

        <PopularTour />

        <Blogs />
      </StyledDiscoverSection>

      <BookInputs />
      <Footer />
    </>
  );
};

function DiscoverItem({ data }) {
  return (
    <div>
      <img src={data.url} alt={data.url} />
      <h1>{data.title}</h1>
      <p>{data.text}</p>
    </div>
  );
}
function PopUpBox({ data }) {
  return (
    <>
      <DiscoverItem data={data} />
    </>
  );
}

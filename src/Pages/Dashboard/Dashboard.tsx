import data from "../../Data/data.json";
import { useState } from "react";
import { UserSelector } from "../../Components/UserSelector";
import { DashboardContainer } from "../../Components/Containers";
import { RailsContainer } from "./styled";
import { GetGenres } from "../../Services/GetGenres";
import { ListOfMovies } from "../../Components/ListOfMovies";
import { HeroComponent } from "../../Components/Hero";

export const Dashboard = () => {
  const [showSelectUser, setShowSelectUser] = useState(true);
  const { dashboard } = data;

  const UserSelectorHandler = () => setShowSelectUser(false);
  const RenderUserSelector = () => {
    return (
      <UserSelector
        UserCards={dashboard.userCard}
        EventHandler={UserSelectorHandler}
      />
    );
  };
  const { genres } = GetGenres();

  return showSelectUser ? (
    RenderUserSelector()
  ) : (
    <DashboardContainer>
      <HeroComponent img={dashboard.heroImage} complements />
      <RailsContainer>
        {genres.slice(0, 6).map((genre, idx) => {
          const { id, name } = genre;
          return <ListOfMovies id={id} name={name} key={id} />;
        })}
      </RailsContainer>
    </DashboardContainer>
  );
};

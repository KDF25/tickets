import { ITicketCard } from "@entities/ticket";
import { Filters } from "@features/filters";
import { TicketList } from "@features/ticketList";
import * as data from "@shared/database/data.json";
import { Container } from "@shared/ui";
import { FC, useState } from "react";
import styles from "./home.module.scss";

export const Home: FC = () => {
  const [filteredCards, setFilteredCards] = useState<ITicketCard[]>(
    data.tickets
  );
  const [allCards] = useState<ITicketCard[]>(
    data.tickets.sort((a, b) => a.price - b.price)
  );
  const handleFilterCard = (stops: number[]) => {
    let newCards =
      stops.length === 0
        ? allCards
        : allCards.filter((card) => stops.includes(card.stops));
    setFilteredCards(newCards);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div>
          <Filters onChange={handleFilterCard} />
        </div>
        <div>
          <TicketList cards={filteredCards} />
        </div>
      </div>
    </Container>
  );
};

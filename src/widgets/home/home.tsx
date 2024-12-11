import { ITicketCard } from "@entities/ticket";
import { Filters } from "@features/filters";
import { TicketList } from "@features/ticketList";
import * as data from "@shared/database/data.json";
import { Container } from "@shared/ui";
import { FC, useState } from "react";
import styles from "./home.module.scss";

export const Home: FC = () => {
  const [filteredCards, setFilteredCards] = useState<ITicketCard[]>(
    data.tickets,
  );
  const [allCards] = useState<ITicketCard[]>(data.tickets);
  const handleFilterCard = (stops: (number | null)[]) => {
    if (stops.length === 0 || stops.includes(null)) {
      setFilteredCards(allCards);
    } else {
      const newCards = allCards.filter((card) => stops.includes(card.stops));
      setFilteredCards(newCards);
    }
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

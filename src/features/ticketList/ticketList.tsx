import { FC } from "react";
import styles from "./ticketList.module.scss";
import { ITicketCard, TicketCard } from "@entities/ticket";

interface TicketListProps {
  cards: ITicketCard[];
}

export const TicketList: FC<TicketListProps> = ({ cards }) => {
  return (
    <div className={styles.wrapper}>
      {cards.map((card, index) => (
        <TicketCard key={index} card={card} />
      ))}
    </div>
  );
};

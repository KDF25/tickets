import { FC } from "react";
import { ITicketCard } from "../types";
import styles from "./ticketCard.module.scss";
import { formatDate } from "@shared/lib";

interface TicketCardProps {
  card: ITicketCard;
}

export const TicketCard: FC<TicketCardProps> = ({ card }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <p>{card?.carrier}</p>
        </div>
        <button>
          Купить
          <br />
          за {card?.price?.toLocaleString()} ₽
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.column}>
          <p className={styles.time}>{card.departure_time}</p>
          <span className={styles.place}>
            {card?.origin}, {card?.origin_name}
          </span>
          <span className={styles.date}>
            {formatDate(card?.departure_date)}
          </span>
        </div>
        <div className={styles.stops}>
          {!!card?.stops ? (
            <span>{card?.stops} Пересадки</span>
          ) : (
            <span>Без пересадок</span>
          )}
        </div>
        <div className={styles.column}>
          <p className={styles.time}>{card.arrival_time}</p>
          <span className={styles.place}>
            {card?.destination}, {card?.destination_name}
          </span>
          <span className={styles.date}>{formatDate(card?.arrival_date)}</span>
        </div>
      </div>
    </div>
  );
};

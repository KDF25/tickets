import { currencyTypes, filtersTypes } from "@entities/filters";
import { FC, useEffect, useState } from "react";
import styles from "./filters.module.scss";

interface FiltersProps {
  onChange: (stops: (number | null)[]) => void;
}

export const Filters: FC<FiltersProps> = ({ onChange }) => {
  const [currentStops, setCurrentStops] = useState<number[]>([]);
  const [currency, setСurrency] = useState<number>(currencyTypes[0].id);

  const handleChangeStop = (stop: number) => {
    setCurrentStops((prevStops) => {
      if (prevStops.includes(stop)) {
        return prevStops.filter((el) => el !== stop);
      } else {
        return [...prevStops, stop];
      }
    });
  };

  const handleAll = () => {
    setCurrentStops((prevStops) => {
      if (prevStops.length === filtersTypes.length) {
        return [];
      } else {
        return filtersTypes.map((el) => el.stops);
      }
    });
  };

  useEffect(() => {
    onChange(currentStops);
  }, [currentStops]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p className={styles.title}>Валюта</p>
        <div className={styles.currency_wrapper}>
          {currencyTypes.map((item, index) => (
            <div
              key={index}
              className={`${styles.currency} ${currency === item.id ? styles.active : ""} `}
              onClick={() => setСurrency(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.link} onClick={handleAll}>
          <input
            type="checkbox"
            checked={currentStops.length === filtersTypes.length}
            onClick={(e) => {
              e.stopPropagation(), handleAll();
            }}
          />
          <span>Все</span>
        </div>
        {filtersTypes.map((el, index) => (
          <>
            <div
              key={index}
              className={styles.link}
              onClick={() => handleChangeStop(el.stops)}
            >
              <input
                type="checkbox"
                checked={currentStops.includes(el.stops)}
                onClick={(e) => {
                  e.stopPropagation(), handleChangeStop(el.stops);
                }}
              />
              <span>{el.label}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

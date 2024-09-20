import React from "react";
import Image from "next/image";

import styles from "./item_card.module.scss";

export interface IItemData {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ItemCard({ data }: { data: IItemData }) {
  return (
    <div key={data?.id} className={styles.card}>
      <Image width={100} height={100} src={data?.image} alt="product image" />
      <div className={styles.details}>
        <h4 className={styles.title}>{data?.title}</h4>
      </div>
      <p>$ {data?.price}</p>
      <h5>{data?.description}</h5>
      <h6>Rating: {data?.rating.rate}</h6>
    </div>
  );
}

export default ItemCard;

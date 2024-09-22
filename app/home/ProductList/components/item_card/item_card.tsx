import React from "react";
import Image from "next/image";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

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
      <div className={styles.productImage}>
        <Image width={100} height={100} src={data?.image} alt="product image" />
      </div>
      <h3 className={styles.title}>{data?.title}</h3>
      <div className={styles.rating}>
        <span className={styles.rate}>
          {data?.rating.rate}
          <StarOutlinedIcon className={styles.star} />
        </span>
        <p>({data?.rating.count})</p>
      </div>
      <p>$ {data?.price}</p>
      <h5>{data?.description}</h5>
      <button>Add to Cart</button>
    </div>
  );
}

export default ItemCard;

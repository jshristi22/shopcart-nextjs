import React from "react";
import ItemCard, { IItemData } from "./components/item_card/item_card";

import styles from "./product_list.module.scss";

async function ProductList() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "reload",
  });
  const payload = await response.json();

  const data: IItemData[] = payload.map((ele: any) => ({
    id: ele.id,
    title: ele.title,
    image: ele.image,
    price: ele.price,
    description: ele.description,
    category: ele.category,
    rating: ele.rating,
  }));

  return (
    <div className={styles.productList}>
      <p className={styles.title}>Headphones for You!</p>

      <div className={styles.products}>
        {data?.map((item) => (
          <ItemCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

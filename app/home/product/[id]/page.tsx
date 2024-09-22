import React from "react";
import { IItemData } from "../../ProductList/components/item_card/item_card";
import Image from "next/image";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import styles from "./page.module.scss";
import Link from "next/link";
async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );

  const payload = await response.json();  
  const data: IItemData = {
    id: payload.id,
    title: payload.title,
    image: payload.image,
    price: payload.price,
    description: payload.description,
    category: payload.category,
    rating: payload.rating,
  };

  return (
    <div className={styles.productDetailsContainer}>
      <p className={styles.breadcrums}>Extension/phone/clothes/men/shirts</p>
      <Link href={`/`}>
        <ArrowBackOutlinedIcon />
      </Link>
      <div className={styles.productDetails}>
        <div className={styles.productImages}>
          <Image
            width={100}
            height={100}
            src={data?.image}
            alt="product image"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.header}>
            <h1 className={styles.title}>{data?.title}</h1>
            <h5 className={styles.desc}>{data?.description}</h5>
            <div className={styles.rating}>
              <p className={styles.rate}>
                <StarOutlinedIcon className={styles.star} />
                {data?.rating.rate}
              </p>
              <p>({data?.rating.count})</p>
            </div>
            <h2>$ {data?.price}</h2>
          </div>
          <div className={styles.price}>
            <div className={styles.ctaBtn}>
              <button className={styles.filled}>Buy Now</button>
              <button className={styles.outline}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

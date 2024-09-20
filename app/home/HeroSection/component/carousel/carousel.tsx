"use client";

import React, { useEffect, useRef, useState } from "react";
import image1 from "./../../../../assets/image/hero1.jpg";
import image2 from "./../../../../assets/image/hero2.jpg";
import image3 from "./../../../../assets/image/hero3.jpg";
import Image from "next/image";

import styles from './carousel.module.scss';

const bannerAds = [image1, image2, image3];

function Carousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const interval = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      setActiveImageIndex((prev) => {
        //last index
        if (prev === bannerAds.length - 1) {
          return 0;
        } else return prev + 1;
      });
    }, 5000);

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <Image src={bannerAds[activeImageIndex]} alt="adverstisement" />
    </div>
  );
}

export default Carousel;

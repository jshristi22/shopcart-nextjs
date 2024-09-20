import Carousel from "./component/carousel/carousel";

import styles from "./heroSection.module.scss";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <Carousel />
    </div>
  );
}

export default HeroSection;

import styles from "./heroContent.module.css";

const HeroContent = () => {
  return (
    <>
      <div className={styles.companyContent}>
        <h1 className={styles.companyText}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.companyDescription}>
          My aim to get in a company where I can use my maximum potential and
          can learn many more new things and I think in AppScript I can achieve
          my goals of personal development and I will try my best to be part of
          your firm to achieve our major goal.
        </p>
      </div>
    </>
  );
};
export default HeroContent;

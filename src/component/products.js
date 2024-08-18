import styles from "./products.module.css";

const Products = ({ product, heartState, onHeartToggle }) => {
  return (
    <div key={product.id} className={styles.card}>
      <img src={product.image} alt={product.title} />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <div className={styles.hearticon} onClick={onHeartToggle}>
          {!heartState ? (
            <i className="fa-regular fa-heart"></i>
          ) : (
            <i className={`fa-solid fa-heart ${styles.fasolid}`}></i>
          )}
        </div>
      </div>
      <p>You can buy any product you want.</p>
    </div>
  );
};

export default Products;

/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Products.module.css";

export default function Products() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <h1>products</h1>
        </div>
        <div className={styles.tags_holder}>
          <div className={styles.category_tag}>Short Sleeve</div>
          <div className={styles.category_tag}>Long Sleeve</div>
          <div className={styles.category_tag}>Sweaters</div>
          <div className={styles.category_tag}>Hoodies</div>
          <div className={styles.category_tag}>Jackets</div>
        </div>

        <div className={styles.product_grid}>
          <div className={styles.product_item}>
            <div className={styles.product_image_container}>
              <img className={styles.product_image} src="product1.jpg" alt="" />
              <p className={styles.tag}>NEW</p>
              <button className={styles.addtocart}>ADD TO CART</button>
            </div>
            <h3 className={styles.product_name}>Product Name</h3>
            <p className={styles.product_price}>1620 LKR</p>
          </div>

          <div className={styles.product_item}>
            <div className={styles.product_image_container}>
              <img className={styles.product_image} src="product2.jpg" alt="" />
              <p className={styles.tag}>NEW</p>
              <button className={styles.addtocart}>ADD TO CART</button>
            </div>
            <h3 className={styles.product_name}>Product Name</h3>
            <p className={styles.product_price}>1620 LKR</p>
          </div>

          <div className={styles.product_item}>
            <div className={styles.product_image_container}>
              <img className={styles.product_image} src="product3.jpg" alt="" />
              <p className={styles.tag}>NEW</p>
              <button className={styles.addtocart}>ADD TO CART</button>
            </div>
            <h3 className={styles.product_name}>Product Name</h3>
            <p className={styles.product_price}>1620 LKR</p>
          </div>

          <div className={styles.product_item}>
            <div className={styles.product_image_container}>
              <img className={styles.product_image} src="product4.jpg" alt="" />
              <p className={styles.tag}>NEW</p>
              <button className={styles.addtocart}>ADD TO CART</button>
            </div>
            <h3 className={styles.product_name}>Product Name</h3>
            <p className={styles.product_price}>1620 LKR</p>
          </div>
        </div>
      </main>
    </div>
  );
}

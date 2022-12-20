import Link from "next/link";
import styles from "../../styles/Contact.module.css";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <h1>contact us</h1>
        </div>
        <div className={styles.contactContainer}>
          <form
            className={styles.form}
            action="https://formsubmit.co/avidu97@gmail.com"
            method="post"
          >
            <label htmlFor="name">
              Name
              <input type="text" name="name" placeholder="Your Name" required />
            </label>

            <br />
            <input type="hidden" name="_subject" value="New submission!" />
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                required
              />
            </label>

            <br />
            <input
              type="hidden"
              name="_next"
              value="https://yourdomain.co/thanks.html"
            />
            {/* <br />
          <input type="file" name="attachment" accept="image/png, image/jpeg" /> */}
            <br />
            <textarea name="message" placeholder="Write Something" />
            <br />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">SEND</button>
          </form>
          <div className={styles.contactDetails}>
            <address>Colombo 10</address>
            <a href="tel:+94 77 890 2812">+94 77 890 2812</a>
            <br />
            <a href="mailto:www.motivatedclothing.lk@gmail.com">
              www.motivatedclothing.lk@gmail.com
            </a>
            <div className={styles.socialMedia}>
              <Link
                className={styles.socialIcon}
                href="https://www.facebook.com/"
              >
                <img src="facebook.svg" alt="" />
              </Link>
              <Link
                className={styles.socialIcon}
                href="https://www.facebook.com/"
              >
                <img src="instagram.svg" alt="" />
              </Link>
              <Link
                className={styles.socialIcon}
                href="https://www.facebook.com/"
              >
                <img src="linkedin.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.faqsContainer}>
          <div className={styles.faq}>
            <div className={styles.question}>
              How much is the t-shirt printing?
            </div>
            <div className={styles.answer}>
              When calculating your T-shirt printing cost, factoring in quantity
              is key. If you're purchasing a small number, you can expect to pay
              retail prices – think $20-$30 per shirt. Now, this price point may
              be just fine if you're looking to make a T-shirt for yourself.
            </div>
          </div>
          <div className={styles.faq}>
            <div className={styles.question}>
              What is the best printing method on a t-shirt?
            </div>
            <div className={styles.answer}>
              Digital Transfer Printing – The Best Print Method for Sportswear
              or Synthetic Fabrics. Digital transfer printing combines the bold
              colours of screen printing with the ability to print onto almost
              any material. Screen Printing and DTG produce high-quality prints
              however, they work best on high percentage cotton garments ...
            </div>
          </div>
          <div className={styles.faq}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.question}>
              What makes a Tshirt high quality?
            </div>
            <div className={styles.answer}>
              What are High Quality T-shirts Made Of? High quality T-shirts
              start with 100% high quality, pre-shrunk cotton. That means no
              itchy synthetic fibers, and no shrinking or shape-changing after
              your T-shirt has gone through the wash.
            </div>
          </div>
          <div className={styles.faq}>
            <div className={styles.question}>
              Is selling T-shirts still profitable?
            </div>
            <div className={styles.answer}>
              Is the T-Shirt Business Profitable? The T-shirt business is
              lucrative because the industry continues to grow in value. The
              global custom T-shirt printing market was valued at $3.64 billion
              in 2020. The same study expects it to maintain a compound annual
              growth rate of 9.7% from 2021 to 2028.
            </div>
          </div>
          <div className={styles.faq}>
            <div className={styles.question}>
              Can I use any printer for Tshirt printing?
            </div>
            <div className={styles.answer}>
              Any ink and any inkjet printer will allow you to transfer a
              personalized image onto a shirt, at home, using equipment you
              probably have already. It is as simple as that!
            </div>
          </div>
          <div className={styles.faq}>
            <div className={styles.question}>
              What type of T-shirt is most popular?
            </div>
            <div className={styles.answer}>The Crew Neck style</div>
          </div>
        </div>
        <div>
          <MapWithNoSSR />
        </div>
      </main>
    </div>
  );
}

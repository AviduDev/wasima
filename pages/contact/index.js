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
            <a href="tel:+94767578127">+9476 75 78 127</a>
            <br />
            <a href="mailto:avidu97@gmail.com">avidu97@gmail.com</a>
            <div className={styles.socialMedia}>
              <Link className={styles.socialIcon} href="https://www.facebook.com/">
                <img src="facebook.svg" alt="" />
              </Link>
              <Link className={styles.socialIcon} href="https://www.facebook.com/">
                <img src="instagram.svg" alt="" />
              </Link>
              <Link className={styles.socialIcon} href="https://www.facebook.com/">
                <img src="linkedin.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <MapWithNoSSR />
        </div>
      </main>
    </div>
  );
}

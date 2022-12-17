import styles from "../../styles/Contact.module.css";

import Map from "../../components";

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <h1>contact us</h1>
        </div>

        <form action="https://formsubmit.co/avidu97@gmail.com" method="post">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" id="" placeholder="Your Email" />
          <button type="submit">SEND</button>
        </form>

        <div>
          <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>
      </main>
    </div>
  );
}

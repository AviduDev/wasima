import styles from '../../styles/Contact.module.css'

export default function Contact() {
    return (
        <div>
            <main className={styles.main}>
                <div className={styles.pagetitle}>
                <h1>contact us</h1>
                </div>

                
                    <form action="https://formsubmit.co/avidu97@gmail.com" method="post">
                        <input type="text" name='name' placeholder='Your Name' />
                        <input type="email" name="email" id="" placeholder='Your Email' />
                        <button type="submit">SEND</button>
                    </form>
           
                
            </main>
        </div>
    )
}
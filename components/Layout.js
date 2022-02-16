import Nav from './Nav'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import theprofile from '../public/images/avatar.svg'
import thetelegram from '../public/images/telegram2.svg'
import theinsta from '../public/images/insta2.svg'
import thetwitter from '../public/images/twitter2.svg'

const Layout = ({ children }) => {
  return (
    <>
      <div className={[styles.container].join(' ')}>
        <div className={styles.content}>
          <Nav />
          <main className={[styles.main].join(' ')}>
            <section className={styles.section}>
              {children}
              <footer className={styles.footer}>
              <div>
                <p className={styles.rightsText}>© 2022 Martianplace</p>
              </div>

              <div className={styles.iconsBox}>
                <Link href=""><Image src={thetelegram} alt="icon" width={25} height={25} /></Link>
                <Link href=""><Image src={theinsta} alt="icon" width={25} height={25} /></Link>
                <Link href=""><Image src={thetwitter} alt="icon" width={25} height={25} /></Link>
                {/* <Link href=""><img src="../public/images/github.svg" alt="icon" /></Link> */}
              </div>

              <div className={styles.textBox}>
                <p>Privacy policy</p>

                <p>Terms of service</p>
              </div>
            </footer>
            </section>
            
          </main>
        </div>
        <div className={styles.backg}>
          <div className={styles.banner}>
            <Image src={theprofile} alt={'children.banner'} layout="fill" objectFit='cover'></Image>
            {/* {children.banner && <Image src={children.banner} alt={children.banner} layout="fill" objectFit='cover'></Image>} */}
          </div>
          <div className={styles.bottom}></div>
        </div>
      </div>
    </>
  )
}

export default Layout
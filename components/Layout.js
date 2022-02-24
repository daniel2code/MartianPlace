import Nav from './Nav'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import theprofile from '../public/images/avatar.svg'
import thetelegram from '../public/images/telegram2.svg'
import theinsta from '../public/images/insta2.svg'
import thetwitter from '../public/images/twitter2.svg'

const Layout = ({ children, onWallet }) => {

  return (
    <>
      <div className={[styles.container].join(' ')}>
        <div className={styles.content}>
          <Nav onWallet={onWallet}/>
          <main className={[styles.main].join(' ')}>
            <section className={styles.section}>
              {children}
              
            </section>
            
          </main>
        </div>
        {/* <div className={styles.backg}>
          <div className={styles.banner}>
            {children.banner && <Image src={children.banner} alt={children.banner} layout="fill" objectFit='cover'></Image>}
          </div>
          <div className={styles.bottom}></div>
        </div> */}
      </div>
      <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
              <div>
                <p className={styles.rightsText}>© 2022 Martianplace</p>
              </div>

              <div className={styles.iconsBox}>
                <Link href="#"><span><Image src={thetelegram} alt="icon" width={25} height={25} /></span></Link>
                <Link href="#"><span><Image src={theinsta} alt="icon" width={25} height={25} /></span></Link>
                <Link href="#"><span><Image src={thetwitter} alt="icon" width={25} height={25} /></span></Link>
              </div>

              <div className={styles.textBox}>
                <p>Privacy policy</p>

                <p>Terms of service</p>
              </div>
          </footer>
      </div>
 
    </>
  )
}

export default Layout
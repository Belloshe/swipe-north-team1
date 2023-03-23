import Image from 'next/image'
import Link from 'next/link'
import styles from '../landing/Landing.module.css'
import backgroundImage from '/public/images/bakgrundsbild.png'
import logo from '/public/images/skelleftea_logo_svart.png'
import circles from '/public/images/circlesImage/cirklar.png'
import { HiArrowLongRight } from 'react-icons/hi2'

export default function Landing() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={107} />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.landingimage}>
        <Image src={backgroundImage}
            alt="background image"
            layout='fill'
            objectFit='cover'
            priority='true'
        /> 
      </div>
      <div className={styles.circlesContainer}>
        <Image 
          src={circles}
          className={styles.circles}
          alt="circle images"
          priority="true"
        />  
      </div>
      <div className={styles.text}>
          <p>Här finns jobben</p>
          <span>Välkommen hem!</span>
          <p>Arbetsmarknaden i Skellefteå blomstrar och behöver dig och din kompetens.</p>
      </div>
      <Link href={'/Instructions'}>
        <button className={styles.button}>
          <p>Hitta ditt nästa drömjobb</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#000',
              marginLeft: '63px'
            }}
          />
        </button>
      </Link>
    </div>
  )
}
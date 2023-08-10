import styles from './Hero.module.css'
import { FormHeroStyled } from './styles'

const Hero = () => (
  <FormHeroStyled>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </FormHeroStyled>
)

export default Hero

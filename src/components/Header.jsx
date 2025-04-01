import styles from '../components/Header.module.css'
import LogoBB from '../assets/Logo-BB.svg'
import IconMenu from '../assets/Menu.svg'

export function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.IconMenu}>
                <button><img src={IconMenu} alt="Icone menu" /></button>
            </div>
            <div className={styles.LogoBB}>
                <img src={LogoBB} alt="Logo Banco do Brasil" title='logo BB'/>
            </div>
        </div>
    )
}
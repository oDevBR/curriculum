import styles from './styles.module.scss'

interface DonateButtonProps {
  paymentUrl: string
}

export function DonateButton({ paymentUrl }: DonateButtonProps) {
  function HandleClick() {
    window.open(paymentUrl, '_blank')
  }

  return (
    <button type="button" className={styles.donateButton} onClick={HandleClick}>
      Buy me a coffee
    </button>
  )
}

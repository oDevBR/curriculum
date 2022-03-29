import styles from './styles.module.scss'

interface DonateButtonProps {
  paymentId: string
  paymentUrl: string
}

export function DonateButton({ paymentId, paymentUrl }: DonateButtonProps) {
  function HandleClick() {
    window.open(paymentUrl, '_blank')
  }

  return (
    <button type="button" className={styles.donateButton} onClick={HandleClick}>
      Buy me a coffee
    </button>
  )
}

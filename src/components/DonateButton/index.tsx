import styles from './styles.module.scss'

export function DonateButton() {
  const paymentLink = 'https://buy.stripe.com/test_6oEaHY4D61x3aROfYZ';

  function handleDonation() {
    window.open(paymentLink, '_blank')
  }

  return (
    <button
      type="button"
      className={styles.donateButton}
      onClick={handleDonation}
    >
      Buy me a coffee
    </button>
  )
}

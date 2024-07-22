import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { sendPaymentNotification } from '../../redux/actions/paymentActions'
import { getUserProfile } from '../../redux/actions'
import styles from './PaymentSuccessPage.module.css'

const PaymentSuccessPage = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const authToken = useSelector((state) => state.auth.token)
	const [showToast, setShowToast] = useState(true)

	useEffect(() => {
		dispatch(getUserProfile(authToken))
		const query = new URLSearchParams(location.search)
		const paymentData = {
			external_reference: query.get('external_reference'),
			payment_id: query.get('payment_id'),
			status: query.get('status'),
		}

		dispatch(sendPaymentNotification(paymentData))
	}, [dispatch, location, authToken])

	return (
		<div className={styles.container}>
			{showToast && (
				<div
					className={`${styles.toast} toast show`}
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div className={`${styles.toastHeader} toast-header`}>
						<strong className="me-auto">Pago Exitoso</strong>
						<small>Justo ahora</small>
						<Link to="/home">
							<button
								type="button"
								className={`btn-close ${styles.closeButton}`}
								data-bs-dismiss="toast"
								aria-label="Close"
								onClick={() => setShowToast(false)}
							></button>
						</Link>
					</div>
					<div className={`${styles.toastBody} toast-body`}>
						¡Muchas gracias por suscribirse! Empieza a disfrutar de nuestros
						servicios.
					</div>
				</div>
			)}
		</div>
	)
}

export default PaymentSuccessPage

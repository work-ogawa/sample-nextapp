/* eslint-disable prettier/prettier */
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

// 以下公開可能キーを設定
const stripePromise = loadStripe('')

function Payment() {
    const createPaymentSession = async () => {
        const stripe = await stripePromise
        if (stripe) {
           const res = await axios.post('/api/payment/session')
            // JSON形式で帰ってくるセッションIDを指定してStripe決済ページへリダイレクトする
            const result = await stripe.redirectToCheckout({
                sessionId: res.data.id
            })
            if (result.error) {
                alert(result.error.message)
            }
        }
    }

    return (
        <div>
            <section>
                <div>
                    <h3>シャツ</h3>
                    <h5>2,000円</h5>
                </div>
                <div>
                    <button onClick={createPaymentSession}>購入する</button>
                </div>
            </section>
        </div>
    )
}

export default Payment

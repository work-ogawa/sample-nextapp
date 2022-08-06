/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from "next";
const stripe = require('stripe')('')

export default async function payment(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    // クライアントから決済のボタンが押下された際に、Stripeのカード決済を行う
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                // Price IDを指定
                price: '',
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/payment/success',
        cancel_url: 'http://localhost:3000/payment/cancel',
    })
    res.json({id: session.id})
}
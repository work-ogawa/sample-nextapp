/* eslint-disable prettier/prettier */
import pino from 'pino'
import { logflarePinoVercel } from "pino-logflare";

const { stream, send } = logflarePinoVercel({
    apiKey: process.env.NEXT_PUBLIC_LOGFLARE_API_KEY,
    sourceToken: process.env.NEXT_PUBLIC_LOGFLARE_SOURCE_ID,
})

const logger = pino(
    {
        browser: {
            transmit: {
                level: 'info',
                send: send
            },
        },
        level: 'debug',
        base: {
            env: process.env.NODE_ENV,
        },
    },
    stream
)

export default logger

/* eslint-disable prettier/prettier */
import pino from 'pino'
import { logflarePinoVercel } from "pino-logflare";

const { stream, send } = logflarePinoVercel({
    //apiKey: process.env.NEXT_PUBLIC_LOGFLARE_API_KEY,
    apiKey: "dcWXRz_pbEJV",
    //sourceToken: process.env.NEXT_PUBLIC_LOGFLARE_SOURCE_ID,
    sourceToken: "9a0abbaa-2e7e-4659-bde2-38d5b90b5fe1",
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

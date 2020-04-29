import { Response } from 'express'

export const sendRefreshtoken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    // this will send a cookie just for this path.
    // we remove this, because we want to send it to the whole routes
    // path: '/refresh_token'
  })
}
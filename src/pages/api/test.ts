import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const message = 'Hello World'

  return response.status(200).json({ message })
}

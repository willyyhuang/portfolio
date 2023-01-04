import {NextApiRequest, NextApiResponse} from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.query.secret !== process.env.WEBHOOK_SECRET) {
        return res.status(401).json({message: 'Invalid token'})
    }
    try {
        await res.revalidate('/Miscellaneous/ProgrammingBook')
        return res.json({revalidated: true})
      } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating')
      }
}

export default handler
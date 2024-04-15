// api/me.js
export default function me(req, res) {
    if (req.method === 'GET') {
      // Simulate fetching user data
      const user = req.session.get('user')
      if (!user) {
        return res.status(401).json({ message: 'Not authenticated' })
      }
      return res.json(user)
    }
  }
  
// api/login.js
export default async function login(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body
  
      // Simulate user authentication (replace with your own logic)
      if (email === 'user@example.com' && password === 'password') {
        const user = { email: 'user@example.com' }
        req.session.set('user', user)
        await req.session.save()
        return res.json({ message: 'Login successful', user })
      } else {
        return res.status(401).json({ message: 'Invalid credentials' })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).end('Method Not Allowed')
    }
  }
  
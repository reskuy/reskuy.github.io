// api/register.js
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { email, password } = req.body;
    
    // Inisialisasi koneksi Neon (Gunakan Environment Variable di Vercel)
    const sql = neon(process.env.DATABASE_URL);

    try {
        // Cek apakah user sudah ada
        const existing = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existing.length > 0) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        // Simpan user baru (Untuk produksi, gunakan bcrypt untuk hash password!)
        await sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
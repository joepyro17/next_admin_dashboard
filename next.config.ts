/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; img-src 'self' https://via.placeholder.com data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:8080; font-src 'self' data:;"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
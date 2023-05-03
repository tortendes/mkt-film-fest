import requestIp from 'request-ip'

export async function POST(request: Request) {
    if (request.method == 'POST') {
        const data = request.body;
        const ip = requestIp.getClientIp(request)
        
    }
}
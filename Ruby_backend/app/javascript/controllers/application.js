import { Application } from "@hotwired/stimulus"

const application = Application.start()

const cors = require('cors');
application.use(cors({
    origin: 'http://127.0.0.1:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

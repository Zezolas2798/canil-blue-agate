const key = process.argv[2] || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3anlzpwfentvrqmnilcgIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MDEzNDgsImV4cCI6MjA4OTI3NzM0OH0.025kQMGObZDpQ8DSihograEfYRKpYmHtfwqERv8Ep-g";
const parts = key.split('.');

function base64UrlDecode(str) {
    // Replace non-url-safe characters
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    // Pad with '='
    while (base64.length % 4) {
        base64 += '=';
    }
    return Buffer.from(base64, 'base64').toString('utf8');
}

console.log('Project Ref expected: wwjyspwfentvrqmnilcg');
try {
    const payload = base64UrlDecode(parts[1]);
    console.log('Decoded Payload:', payload);
    const json = JSON.parse(payload);
    console.log('Project Ref in JWT:', json.ref);
} catch (e) {
    console.log('Error decoding:', e.message);
}

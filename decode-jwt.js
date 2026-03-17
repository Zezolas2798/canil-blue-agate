const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3anlzpwfentvrqmnilcgIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MDEzNDgsImV4cCI6MjA4OTI3NzM0OH0.025kQMGObZDpQ8DSihograEfYRKpYmHtfwqERv8Ep-g";
const parts = key.split('.');
console.log('Parts count:', parts.length);
if (parts.length === 3) {
    try {
        const payload = Buffer.from(parts[1], 'base64').toString('utf8');
        console.log('Decoded Payload:', payload);
    } catch (e) {
        console.log('Error decoding payload:', e.message);
    }
} else {
    console.log('Invalid JWT format');
}

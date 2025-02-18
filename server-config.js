// Put here your email sending configurations!
module.exports = {
    emailTransport: {
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: { user: '82bdab002@smtp-brevo.com', pass: 'rv28YjS0cxQ7Nh6J' }
    },
    emailOptions: {
        from: 'Mosaico by VOXmail <krishnaneel_deva@yahoo.com>', // sender address
        // bcc: 'mosaico@mosaico.io',
    }
};

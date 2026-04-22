const fs = require('fs');

const required = [
  'EMAILJS_PUBLIC_KEY',
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
  'CONTACT_EMAIL',
];

const missing = required.filter(k => !process.env[k]);
if (missing.length) {
  console.error('❌ Faltan variables de entorno:', missing.join(', '));
  process.exit(1);
}

const config = `// Auto-generado por build.js — NO editar ni commitear
window.PRINTASY_CONFIG = {
  emailjs: {
    publicKey:  '${process.env.EMAILJS_PUBLIC_KEY}',
    serviceId:  '${process.env.EMAILJS_SERVICE_ID}',
    templateId: '${process.env.EMAILJS_TEMPLATE_ID}',
  },
  contactEmail: '${process.env.CONTACT_EMAIL}',
};
`;

fs.writeFileSync('js/config.js', config);
console.log('✅ js/config.js generado correctamente.');

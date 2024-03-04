const ContactFormEmail = ({ name, email, phoneNumber }: any) => (
  <div>
    <h1>Nuevo Contacto | Amphytrion</h1>
    <p>Nombre: {name}</p>
    <p>Correo: {email}</p>
    <p>Telefono: {phoneNumber}</p>
  </div>
);

export default ContactFormEmail;

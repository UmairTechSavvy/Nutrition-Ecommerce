import emailjs from 'emailjs-com';

export const sendEmail = (userEmail, product, currentQty, totalPrice) => {
  const templateParams = {
    user_email: userEmail,
    product_name: product.name,
    quantity: currentQty,
    price: product.price,
    total_price: totalPrice,
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

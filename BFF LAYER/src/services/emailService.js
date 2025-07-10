const nodemailer = require('nodemailer');

// Setup the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'senuridilru16@gmail.com',
    pass: 'wobc dbtv hsxm jkld' // App password, not your normal password
  }
});

const sendOrderConfirmationEmail = async (order) => {
  const { email, firstName, lastName, items, totalAmount } = order;

  const itemRows = items.map(item => `
    <tr>
      <td>${item.productId}</td>
      <td>${item.quantity}</td>
      <td>Rs ${item.price * item.quantity}.00</td>
    </tr>
  `).join('');

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
    <h2 style="text-align: center; color: #333;">EverGlow</h2>
    <p style="text-align: right; font-size: 14px; color: #666;">ORDER #${order.id}</p>
    
    <h3>Thank you for your purchase, ${firstName}!</h3>
    <p style="color: #555;">Hi ${firstName}, we’re getting your order ready to be shipped. We’ll notify you when it has been sent.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <a href="#" style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">View your order</a>
    </div>

    <h4 style="margin-top: 30px;">Order summary</h4>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr style="background-color: #f9f9f9;">
          <th style="padding: 8px; border-bottom: 1px solid #ddd; text-align: left;">Product</th>
          <th style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">Qty</th>
          <th style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">Product ID: ${item.productId}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${item.quantity}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">$ ${item.price * item.quantity}.00</td>
          </tr>
        `).join('')}
        <tr>
          <td colspan="2" style="padding: 8px; text-align: right;"><strong>Subtotal</strong></td>
          <td style="padding: 8px; text-align: right;">$ ${totalAmount}.00</td>
        </tr>
        <tr>
          <td colspan="2" style="padding: 8px; text-align: right;">Shipping</td>
          <td style="padding: 8px; text-align: right;">$ 0.00</td>
        </tr>
        <tr>
          <td colspan="2" style="padding: 8px; text-align: right;">Tax</td>
          <td style="padding: 8px; text-align: right;">$ 0.00</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td colspan="2" style="padding: 10px; text-align: right;"><strong>Total</strong></td>
          <td style="padding: 10px; text-align: right;"><strong>$ ${totalAmount}.00 LKR</strong></td>
        </tr>
      </tbody>
    </table>

    <h4 style="margin-top: 30px;">Customer information</h4>
    <table style="width: 100%; margin-top: 10px;">
      <tr>
        <td style="vertical-align: top;">
          <strong>Shipping address</strong><br/>
          ${firstName} ${lastName}<br/>
          ${order.houseNumber}, ${order.apartment}<br/>
          ${order.town}, ${order.district}<br/>
          ${order.country}, ${order.postcode}<br/>
          ${order.phoneNumber}
        </td>
        <td style="vertical-align: top;">
          <strong>Billing address</strong><br/>
          ${firstName} ${lastName}<br/>
          ${order.houseNumber}, ${order.apartment}<br/>
          ${order.town}, ${order.district}<br/>
          ${order.country}, ${order.postcode}<br/>
          ${order.phoneNumber}
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top: 10px;">
          <strong>Payment method:</strong> ${order.paymentMethod}<br/>
          <strong>Delivery:</strong> 2–3 Business Days
        </td>
      </tr>
    </table>

    <p style="text-align: center; color: #888; font-size: 12px; margin-top: 40px;">Thank you for shopping with EverGlow 💖</p>
  </div>
`;


  try {
    await transporter.sendMail({
      from: '"EverGlow" <senuridilru16@gmail.com>',
      to: email,
      subject: `Your EverGlow Order #${order.id}`,
      html: htmlContent
    });
    console.log(" Email sent to", email);
  } catch (err) {
    console.error(" Email send failed:", err.message);
  }
};

module.exports = { sendOrderConfirmationEmail };

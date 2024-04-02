import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, budget } = await request.json();
    if (!name || !email || !message || !budget) {
      return new Response("Bad Request", { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "dwarkeshgohel1@gmail.com",
        pass: "dleyhiujxblhwjzs",
      }
    });

    await transport.sendMail({
      from: email,
      replyTo: email,
      to: "dwarkeshgohel1@gmail.com",
      subject: "Project Inquiry (Portfolio)",
      html: emailTemplate({ email, name, budget, message })
    });

    console.log("Email sent successfully");
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}


const emailTemplate = ({ email, name, budget, message }) => {
  return `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gohelboy</title>
</head>
<body>
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td align="center" bgcolor="#f7f7f7" style="padding: 40px 0;">
        <table width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin-bottom: 20px;">Project Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
			  <p><strong>Email:</strong> ${email}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>Message:</strong> ${message}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

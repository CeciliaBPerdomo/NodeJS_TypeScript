import nodemailer from "nodemailer"
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAILEMAIL,
        pass: process.env.GMAILPASS
    },
    from: 'cecilia.perdomo@gmail.com'
})

export const sendEmail = async (to: string, code: string): Promise<void> => {
    const mailOptions = {
        from: '"Mundo Running a Full" cecilia.perdomo@gmail.com',
        to,
        subject: "Código de verificación de registro",
        text: `
            Gracias por registrarte en Mundo Running a Full.
            Tu código de verificación es: ${code}
        `
    }

    try {
        await transporter.sendMail(mailOptions)
        // console.log("Correo electronico enviado")
    } catch (error) {
        console.error("Error al envio al correo: " + error)
    }
}

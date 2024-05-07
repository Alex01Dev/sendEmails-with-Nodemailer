const { log } = require('console');
const nodemailer = require('nodemailer');

sendEmail = async () => {

    const config = {
        service: 'gmail',
        auth : { //de que cuenta del correo donde se esta enviando dicho mensaje
            user: 'alex.mauri.mc@gmail.com',
            pass: 'lwhb cxgy tkfc gvwp' // Reemplaza esto con la contraseña de aplicación que generaste
        }
    }

    const mensage = {
        from: 'alex.mauri.mc@gmail.com', //donde se envia el correo
        to: 'carlicsus3@gmail.com',//hacia donde lo quiero enviar
        subject: 'Correo de pruebas uwu ',//especificamos un asunto
        text: 'envio de correo desde nodejs utilizando nodemailer'//cuerpo del correo, texto o html
    }

    //transporte
    const transport =  nodemailer.createTransport(config) //pide objeto con la configuracion necesaria para el envio

    //envio de correo
    const info = await transport.sendMail(mensage) //variable contendra la info de retorno cuando se envia, para verificar si llego a su destino

    console.log(info);

}

sendEmail();

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


function presence(){
   client.user.setPresence({
      status: "dnd",
      activity: {
         name: "!info y !ayuda",
         type: "PLAYING"
      }
   });
}

client.on("ready", () => {
    console.log("Estoy listo!");
	presence();
 });

//Se recomienda acomodar esto aparte de un clien.on
client.on("message", message =>{
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
//comandos
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
 
  ///embeds/////
/*if(command === 'partidos'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Chat , Futbol y más')
    .setColor(0x33ACFF)//0x33ACFF //0x5E9DE4
    .setDescription('En este servidor vas a poder informarte de lo nuevo del futbol , ademas te vamos a avisar de cuando hay partido')
    .addField('Ligue 1 Uber Eats', 'PSG vs Lille a las 21:00')
    .addField('LaLiga 2', 'Almería vs Leganés a las 21:00')
	//.addField('LaLiga', 'Levante:0 vs Atlético de Madrid:0')
	//.addField('LaLiga', 'Granada:0 vs Getafe:0')
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail('https://media.giphy.com/media/xF0rU6UoW92npy7C8m/giphy.gif')
	//.setImage('https://media.giphy.com/media/pclFpctSBKkeqMwSvv/giphy.gif')
    //.setImage('https://www.edmradio.es/wp-content/uploads/2021/02/MMMBBBB.jpg')
    //.setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    //.setTimestamp()
    .setURL('https://onefootball.com/es/partidos');
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
  message.channel.send(embed);
 
 
}*/
if(command === 'info'){
 const embed = new Discord.MessageEmbed()
    .setTitle(message.guild.name, true)
    .setColor(config.embedcolor)
    .setDescription('**Aqui podrás conocer gente nueva, divertirte con bots etc etc... Siempre serás bienvenido a este servidor**')
    .addField('Nombre del servidor', message.guild.name, true)
    .addField('Integrantes', message.guild.memberCount, true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail('https://media.giphy.com/media/cIKK2PNbQXkVq/giphy.gif')
    .setImage('https://cdn.discordapp.com/attachments/904726402199339051/904734389454393364/th.png')
    //.setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    //.setTimestamp()
    .setURL('https://www.youtube.com/')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
  message.channel.send(embed);
 
 
}
if(command === 'reglas'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Reglas a seguir')
    .setColor(config.embedcolor)
    //.setDescription('Este es un servidor donde podras hablar con mucha gente y conocerla')
    .addField('No mandar sexo', '_________________')
	  .addField('No mandar ubicaciones', '_________________')
	  .addField('No insultar', '_________________')
	  .addField('No spamear', '_________________')
	  .addField('Respetar a los Administradores del servidor y a sus integrantes', '_________________')
    .addField('Respetar canales', '_________________')
    .addField('No extrañarse de que se una alguien', '_________________')//No extrañarse de que se una alguien
    .addField('No spamear gifs en general', '_________________')
    .addField('No rick rolear en general (solo en :hot_face:-memes )', '_________________')
    .addField('No salirse del server y entrar muchas vezes', '_________________')
    //.addField('Integrantes', message.guild.memberCount, true)
    .setAuthor(client.user.username, client.user.avatarURL())
    //.setThumbnail('https://cdn.discordapp.com/attachments/903930629777928235/903947166194753556/gif-gato-1519137077.gif')
    //.setImage('https://cdn.discordapp.com/attachments/903930629777928235/903933889964294144/3-36838_fnaf-wallpapers-computer-foxy-picserio-fnaf-4.png')
    //.setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    //.setTimestamp()
    .setURL('https://www.youtube.com/')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send(embed)
 
 
}

if(command === 'comandos'){
 const embed = new Discord.MessageEmbed()
    .setTitle('***Comandos Principales***')
    .setColor(config.embedcolor)
    .addField('!ayuda', 'Te indica el canal donde puedes pedir ayuda o si no puedes poner !comandos o !info')
    .addField('!info', 'Te muestra un texto donde te aparece la información del servidor')
	.addField('!reglas', 'Te indica cuales son las reglas a seguir')
	.addField('hola', 'Miralo tu mismo')
	.addField('buenos-dias', 'Miralo tu mismo')
	.addField('buenas-noches', 'Miralo tu mismo')
	.addField('adios', 'Miralo tu mismo')
	.addField('te-quiero', 'Miralo tu mismo')
	.addField('te-odio', 'Miralo tu mismo')
	.addField('eres-un-gato', 'Miralo tu mismo')
	.addField('!s num num', 'Suma los numeros')
	.addField('!r num num', 'Resta los numeros')
	.addField('!m num num', 'Multiplica los numeros')
	.addField('!d num num', 'Divide los numeros')
  .addField('***-Aki-***', '-----')   
  .addField('.aki start', 'Empieza el  juego')
  .addField('.aki stop', 'Para el juego')
  .addField('.aki user [<@mention> | <id>]', 'Te muestra información sobre tu o otros usuarios')
  .addField('.aki server [<id>]', 'Muestra informacion sobre este servidor en respecto a Aki')
  .addField('.aki language [es/us/en]', 'Cambia el lenguaje del juego al deseado')
  .addField('.aki ladder [global]', 'Te muestra una  lista de los mejores jugadores de Aki en el mundo')
  .addField('.aki', 'Comprueba si puedes volver a votar')
  .addField('.aki thonk', 'Lanza una pregunta al azar')
  .addField('***-Hydra-***', '------')
	.addField('.play (cancion)', 'Reproduce una cancion en el canal de voz que tu estes')
	.addField('.leave', 'El bot se sale del canal en el que estas escuchando')
	
	
    .setAuthor(client.user.username, client.user.avatarURL())
   //.setThumbnail('https://cdn.discordapp.com/attachments/903930629777928235/903947166194753556/gif-gato-1519137077.gif')
    //.setImage('https://cdn.discordapp.com/attachments/903930629777928235/903933889964294144/3-36838_fnaf-wallpapers-computer-foxy-picserio-fnaf-4.png')
    //.setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    //.setTimestamp()
    .setURL('https://www.youtube.com/');
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
  message.channel.send(embed);
 
 
}

if(command === 'portal1'){
  const embed = new Discord.MessageEmbed()
     .setTitle('**Portal 1**')
     .setColor(config.embedcolor)
     .setDescription('Potral 1 es un juego de estrategia, que eres la protagonista dentro de las instalaciones de Aperture Sience, Glados, la robot principal de las instalaciones, puso una toxina que mata a todos menos a ti, te hace pruebas y finalmente llegas y la derrotas y sigue en el siguiente capitulo...')
     .setImage('https://media.giphy.com/media/MFuYS9IB6oipG/giphy.gif')
     .setThumbnail('https://cdn.discordapp.com/attachments/904742750002499634/909047279112048690/th.png')//
     .setAuthor(client.user.username, client.user.avatarURL())
    //.setThumbnail('https://cdn.discordapp.com/attachments/903930629777928235/903947166194753556/gif-gato-1519137077.gif')
     //.setImage('https://cdn.discordapp.com/attachments/903930629777928235/903933889964294144/3-36838_fnaf-wallpapers-computer-foxy-picserio-fnaf-4.png')
     //.setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
     //.setTimestamp()
     .setURL('https://www.youtube.com/');
     //NOMBRE DEL BOT: client.user.username
     //AVALAR DE BOT: client.user.avatarURL()
     //NOMBRE DE USUARIO: message.member.displayName
     //AVATAR DE USUARIO: message.author.avatarURL()
   message.channel.send(embed);
  
  
 }

if(command === 'covid'){
	const img = new Discord.MessageAttachment("https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2020/02/12/16/17/coronovirus-8col.jpg")
	message.channel.send(img);
}
  //https://cdn.discordapp.com/attachments/904742750002499634/909045238578958356/th.png



});
client.on("message", (message) => {
   if(message.content.startsWith("!ayuda")) {
     message.channel.send("Si necesitas ayuda dirigete al canal #ayuda , si necesitas información pon !info o !comandos para averuguar que cosas hay");

  }
 
});

 
let inteligencia = "";
let prefix = "!"; 

client.on("message", (message) => {

  if(message.author.bot) return;
  if (!message.content.startsWith(inteligencia)) return;

  const args = message.content.slice(inteligencia.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 

if(command === "hola"){
  message.channel.send("Hola que tal!")
  
}
if(command === "buenos-dias"){
  message.channel.send("Wenos dias wapo")
} 
if(command === "buenas-noches"){
  message.channel.send("A mimir ...")
}
if(command === "adios"){
  message.channel.send(":disappointed_relieved:")
} 
if(command === "te-quiero"){
  message.channel.send("Yo no :upside_down:")
}  
if(command === "te"+config.separador+"odio"){
  message.channel.send("Mira , tengo un amigo :yum:")
}

if(command === "eres-un-gato"){
  message.channel.send("No , soy un robot y estoy aquí con tigo :robot:")
}
//if(command === "almendra"){
  //message.channel.send("Hay quien dice que tiene más calcio que la leche, más fósforo que el huevo y más hierro que la carne, lo que pasa es que para equiparar la cantidad se dispararía la cantidad y, como consecuencia, las calorías de las almendras")
/*if(command === "ayuda"){
  message.channel.send("Dirigete al canal ayuda y cuentanos")
}*/
/*client.on("message", (message) => {
   if(message.content.startsWith("!buenos dias")) {
     message.channel.send("Wenos días wapo");
   }
 
});
client.on("message", (message) => {
   if(message.content.startsWith("!buenos noches")) {
     message.channel.send("Wenas noches wapo");
   }
 
});
client.on("message", (message) => {
   if(message.content.startsWith("!adios")) {
     message.channel.send(":disappointed_relieved:");
   }
 
});*/
});



 
client.login("OTA0NzE0NDM0MDQ2NDkyNjgy.YX_i-Q.llBq8ri5BbAtSgVvkUQuI5p4EXs");
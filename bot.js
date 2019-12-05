const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
const randomPuppy = require('random-puppy');




const bot = new Discord.Client({
  disableEveryone: true
});
let prefix = config.prefix;
client.on("ready", () => {
   console.log("Estoy listo!");
});

/*BOT JUGANDO A... */
client.on("ready", () => {
  console.log("Estado activo!");
  
  client.user.setPresence( {
      status: "online",
      game: {
          name: "dl!ayuda",
          type: "PLAYING"
      }
  } );

});

/*MEMES */
var count = 0;

client.on('message', (msg) => {
if(msg.content === prefix+'meme'){

   if(count%2 === 0){
    randomPuppy(subreddit = "spanish", cb = "any")
    .then(url => {
        msg.channel.send(`${url}`);
    })
    count ++;
   }else {
    randomPuppy(subreddit = "geek", cb = "any")
    .then(url => {
        msg.channel.send(`${url}`);
    })
    count ++;
  }
}
});

/*Respuestas automaticas*/
client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send('**'+'Emmm...si,patinete! '+message.author.username+'**');  }
  /*
  if(message.content.startsWith(prefix+"ayuda")){
    message.channel.send("En obras")
}
*/
if (message.content.startsWith(prefix +"ayuda")){
  message.channel.send({embed: {
    color: 3447003,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
    },
    title: "Ayudas",
      fields: [{
        name: "1",
        value: "Para saber las normas escribe dl!normas."
      },
      {
        name: "2",
        value: "Para ver algun meme escribe dl!meme."
      }
    ],
    timestamp: new Date(),
  }
});
}
if (message.content.startsWith(prefix +"normas")){
  message.channel.send({embed: {
    color: 3447003,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
    },
    title: "Normas",
    url: "https://github.com/CraterMaik",
      fields: [{
        name: "**__Norma-1__**",
        value: "Se respetuoso"
      },
      {
        name: "**__Norma-2__**",
        value: "Enviar / vincular cualquier material dañino como virus, capturadores de IP o software dañino resulta en una prohibición inmediata y permanente"
      },
      {
        name: "**__Norma-3__**",
        value: "No spamear palabras"
      },
      {
        name: "**__Norma-4__**",
        value: "Mencionando @everyone, los Moderadores o una persona específica sin razón apropiada está prohibido."
      },
      {
        name: "**__Norma-5__**",
        value: "Publica contenido en los canales correctos"
      },
      {
        name: "**__Norma-6__**",
        value: "No publique la información personal de alguien sin permiso."
      },
      {
        name: "**__Norma-7__**",
        value: "Escucha lo que dice el personal"
      },
      {
        name: "**__Norma-8__**",
        value: "No publique imágenes gráficas de menores."
      }


    ],
    timestamp: new Date(),
  }
});
}

/*
if(message.content.startsWith(prefix + 'normas')){
  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
  message.author.send('**COMANDOS DE DLOCOS**\n```\n'+
                      '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                      '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                      '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                      '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                      '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                      '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                      '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                      '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                      '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n'+
                      '**MyBOT - Server guía y de soporte Únete :**\nhttps://discord.gg/XX6J2GN');
  
}

if(command === 'avatar'){

  let img = message.mentions.users.first()
  if (!img) {

      const embed = new Discord.RichEmbed()
      .setImage(`${message.author.avatarURL}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
      message.channel.send({ embed });

  } else if (img.avatarURL === null) {

      message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

  } else {

      const embed = new Discord.RichEmbed()
      .setImage(`${img.avatarURL}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
      message.channel.send({ embed });

  };

}

if (command === 'ping') {

  let ping = Math.floor(message.client.ping);
  
  message.channel.send(":ping_pong: Pong!")
    .then(m => {

        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
    
    });
  
}

if(command === 'server'){

  var server = message.guild;

  const embed = new Discord.RichEmbed()
  .setThumbnail(server.iconURL)
  .setAuthor(server.name, server.iconURL)
  .addField('ID', server.id, true)
  .addField('Region', server.region, true)
  .addField('Creado el', server.joinedAt.toDateString(), true)
  .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
  .addField('Miembros', server.memberCount, true)
  .addField('Roles', server.roles.size, true)
  .setColor(0x66b3ff)
  
 message.channel.send({ embed });

}

if(command === 'user'){
  let userm = message.mentions.users.first()
  if(!userm){
    var user = message.author;
    
      const embed = new Discord.RichEmbed()
      .setThumbnail(user.avatarURL)
      .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
      .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
      .addField('ID', user.id, true)
      .addField('Estado', user.presence.status, true)
      .addField('Apodo', message.member.nickname, true)
      .addField('Cuenta Creada', user.createdAt.toDateString(), true)
      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
      .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
      .setColor(0x66b3ff)
      
     message.channel.send({ embed });
  }else{
    const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
    .addField('ID', userm.id, true)
    .addField('Estado', userm.presence.status, true)
    .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
    .setColor(0x66b3ff)
    
   message.channel.send({ embed });
  }
  
}
*/


});
client.login(config.token);     
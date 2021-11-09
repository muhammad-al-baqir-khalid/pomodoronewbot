const Telegraf = require('telegraf');
const bot = new Telegraf("2113146717:AAH79ybh9e-PvijnzD2oz9qBVPzuzliSRIY");




bot.start((ctx) => {
    {
        ctx.reply('دراسة 50 دقيقة!');
        setInterval(() => {
           ctx.reply('دراسة 50 دقيقة!')
         }, 60 * 60 * 1000);
   
       setInterval(() => {
           ctx.reply('ريست 10 دقائق!')
         }, 50 * 60 * 1000 )
   }

}


)

bot.launch();
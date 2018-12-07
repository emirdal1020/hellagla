const Dissdg
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
gsdt.on('debug', e => {
//   consolsplace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);

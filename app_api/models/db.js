var mongoose=require('mongoose');
var dbURI='mongodb+srv://verda:odev@mekanbul.dvbvdep.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Cluster0';
//var dbURI="mongodb://localhost/mekanbul";
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log(dbURI+' adresindeki veritabanına bağlanıldı.');
});
mongoose.connection.on('error',function(err){
    console.log('Veritabanı bağlantı hatası: '+err);
}); 
mongoose.connection.on('disconnected',function(){
    console.log('Mongoose bağlantısı kesildi.');
});
process.on('SIGINT',function(){
    mongoose.connection.close()
    .then(function(){
        console.log('Uygulama sonlandırıldı, Mongoose bağlantısı kapatıldı.');
        process.exit(0);
    })
    .catch(function(err){
        console.error('Mongoose bağlantısını kapatırken hata:', err);
        process.exit(1);
    });
});
require('./venue');


//===============================
//            Puerto
//===============================
port = process.env.POST || 3000;

//===============================
//      Vencimiento del Token
//===============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '48h';


//===============================
//      SEED de autenticacion
//===============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
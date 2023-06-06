const { default: mongoose } = require('mongoose');

async function ConnectDB() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.BASE_URL);
  console.log('Connect DB');
}

export default ConnectDB;

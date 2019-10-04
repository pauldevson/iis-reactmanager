// This file will be read by app service's PM2 process to start the app
module.exports = {
  apps: [
    {
      script: 'npx serve -s'
    }
  ]
};

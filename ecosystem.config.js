let hostEnvName = getEnvName();
if(!hostEnvName) hostEnvName = 'dev';
const host = getHostName(hostEnvName);

module.exports = {
  deploy : {
    odoo : {
      user : 'ubuntu',
      host : host,
      ref  : `origin/prod_15`,
      repo : 'git@github.com:newmizanur/odoo.git',
      path : '/opt/odoo/webapps/odoo',
      ssh_options: "StrictHostKeyChecking=no",
      fetch: 'full',
      'post-deploy' : [
          'sudo systemctl restart odoo.service'
      ].join(' && ')
    },
  }
};

function getEnvName(){
  let index = process.argv.indexOf('--env');
  if(index < 0) return;
  return process.argv[index + 1];
}

function getHostName(environment) {

  const devHosts = {
    dev: 'dev-erp.rpdgroup.local',
    prod: 'erp.rpdgroup.local',
  };
    
  return devHosts[environment];
}

/*
* Example commands:
* pm2 deploy odoo --force --env dev
* pm2 deploy odoo --force --env prod
* */

//Installed by following articles, 
// https://www.cybrosys.com/blog/how-to-install-odoo-15-on-ubuntu-2004-lts-server
// https://speedysense.com/install-odoo-15-on-ubuntu-20-04/

// For Error: pg_config executable not found, run -> sudo apt-get install libpq-dev
// To install wkhtmltopdf -> sudo apt-get install wkhtmltopdf

//To add permission to ubuntu to location /opt/odoo -> https://askubuntu.com/questions/642744/read-write-permissions-in-opt-directory

// ERROR: Failed building wheel for python-ldap -> https://www.odoo.com/fr_FR/forum/aide-1/i-m-using-a-python-3-6-jessie-docker-image-and-try-to-execute-bash-pip3-install-r-requirements-txt-and-send-the-next-error-can-someone-help-me-please-137415

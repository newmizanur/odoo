
module.exports = {
  deploy : {
    odoo : {
      user : 'ubuntu',
      host : 'erp.rpdgroup.deploy',
      ref  : `prod_15`,
      repo : 'git@github.com:newmizanur/odoo.git',
      path : '/home/ubuntu/webapps/odoo',
      ssh_options: "StrictHostKeyChecking=no",
      fetch: 'fast',
      'post-deploy' : [
          'sudo systemctl restart odoo.service'
      ].join(' && ')
    },
  }
};

/*
* Example commands:
* pm2 deploy odoo
* */

//Installed by following articles, 
// https://www.cybrosys.com/blog/how-to-install-odoo-15-on-ubuntu-2004-lts-server
// https://speedysense.com/install-odoo-15-on-ubuntu-20-04/

// For Error: pg_config executable not found, run -> sudo apt-get install libpq-dev
// To install wkhtmltopdf -> sudo apt-get install wkhtmltopdf
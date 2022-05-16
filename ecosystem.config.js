
module.exports = {
  deploy : {
    odoo : {
      user : 'ec2-user',
      host : 'erp.rpdgroup.deploy',
      ref  : `prod_15`,
      repo : 'git@github.com:newmizanur/odoo.git',
      path : '/home/ec2-user/webapps/odoo',
      ssh_options: "StrictHostKeyChecking=no",
      fetch: 'full',
      'post-deploy' : [
      ].join(' && ')
    },
  }
};

/*
* Example commands:
* pm2 deploy odoo
* */

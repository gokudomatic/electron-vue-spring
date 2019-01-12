const shell = require('shelljs')

shell.echo('##########################')
shell.echo('#     Building spring    #')
shell.echo('##########################')

shell.cd('spring')
const mvnw = process.platform === 'win32' ? 'mvnw' : './mvnw'
if (shell.exec(mvnw + ' clean package').code !== 0) {
  shell.echo('Error: spring build failed')
  shell.exit(1)
} else {
  shell.echo('')
  shell.echo('#########################')
  shell.echo('# Deploying jar file...')
  shell.cp('-u', 'target/spring-1.0.0.jar', '../opt')
  shell.echo('# Done !')
}
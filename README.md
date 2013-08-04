After cloning the repo, run server.js via node.

Then open your browser to http://localhost

Note: server.js is set to listen on port 80 which requires it to be run as root.

Example: sudo node server.js


If you want to run server.js permanently, use forever

Forever must be installed with the -g flag to install globally and run as executable

Example: sudo npm i -g forever 

Then you can "sudo forever start server.js"

If you make changes to server.js, kill the process with "kill" and forever will restart it.

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize'); 

const Routes = require('./routes');

class Server{
    constructor(){
        this.express = express();
        this.port = 4000;
        this.config();
        this.setupRoutes()
        this.setupDatabase();
    }

    config(){
      this.express.use(bodyParser.json());
      this.express.use(express.json());
    };

    async setupDatabase(){
        try{
           await sequelize.authenticate();
           await sequelize.sync();
           console.log('conected to database');
           
        }catch(e){
            return console.log('some error happened', e)
            
        }
    }
    
    setupRoutes(){
        const routes = new Routes();
        this.express.use('/', routes.getRoutes())
    }

    start(){
        this.express.listen(this.port, () => {
            console.log(`server is running at ${this.port}`)
        })
    }


}

const server  = new Server();
server.start();
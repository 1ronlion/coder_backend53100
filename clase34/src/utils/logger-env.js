import winston from "winston";

const devLogger= winston.createLogger({
    transports:[
        new winston.transports.Console({level:'debug'})
    ]
})

const prodLogger= winston.createLogger({
    transports:[
        new winston.transports.Console({level:'http'}),
        new winston.transports.File({filename:'./errors-env.log',level:'warn'}),
    ]
})

export const addLogger= (req, res, next)=>{
    const env = 'production'
    req.logger = env === 'prod'? prodLogger : devLogger

    next()
}
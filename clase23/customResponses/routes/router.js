import { Router } from "express"

export default class Route {
    constructor() {
        this.route = Router()
        this.init()
    }

    getRouter() {
        return this.route
    }

    init() { }

    get(path, ...callbacks) {
        this.route.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    applyCallbacks(callbacks) {
        return callbacks.map((callback) => async (...params) => {
            try {
                await callback.apply(this, params)
            } catch (error) {
                console.log(error)
                params[1].status(500).send(error)
            }
        })
    }

    generateCustomResponses = (req, res, next) => {
        res.sendSuccess = payload => res.send({ status: "success", payload })
        res.sendUserError = error => res.status(400).send({ status: "Error", error })
        next()
    }
} 

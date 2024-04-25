import Route from "./router.js"

export default class UsersRouter extends Route {

    init() {
        this.get("/", (req, res) => {
            res.sendSuccess("Hi Coderos")
        })
    }

}
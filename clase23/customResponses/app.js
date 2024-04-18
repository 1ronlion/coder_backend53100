import express from "express"
import UsersRouter from "./routes/users.js"
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use(express.json())

const usersRouter = new UsersRouter()
app.use("/users", usersRouter.getRouter())
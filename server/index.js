const express= require("express");
const app = express();
const dotenv= require("dotenv");
const database= require("./config/database");



const userRoutes = require("./router'/user");
 

dotenv.config();


const PORT = process.env.PORT || 4001;

database.connect();




app.use(express.json());

app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

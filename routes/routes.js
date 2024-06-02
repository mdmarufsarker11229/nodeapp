const express=require("express");
const {  getallusers, createUser, getoneuser, updateUser, deleteUser } = require("../controllers/controller");

const router=express.Router();

router.get("/users",getallusers);
router.get("/users/:id",getoneuser);
router.post("/users",createUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);


module.exports=router;

const User = require("../model/users");
require("dotenv").config()



exports.createUser = async (req,res) => {
  try {
  
      const {
        id,
      name,
      username,
      email,
      street,
      suite,
      city,
      zipcode,
      address,
      phone,
      website,
      company

        
      } = req.body


      console.log(req.body);
      
      
      
     
     
     
      
      
      
      
      const user = await User.create({
        id,
        name,
        username,
        email,
       address,
       phone,
      website,
      company
  
        
      })
  
      return res.status(200).json({
        success: true,
        user,
        message: "User Written successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "User cannot be written. Please try again.",
      })
    }

}
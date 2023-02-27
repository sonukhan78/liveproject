// des login user nwe user
// routes post /api/userAuth/LOGIN
//access public
const loginserver=asyncHander(async (req,res)=>{

    const {email,password} = req.body;
    const userExists = await login.findOne({ email })
        if (userExists) {
            res.status(400);
            throw new Error('Email already exists')
        }
        const passexits = await login.findOne({password})
        if(passexits){
            res.status(400);
            throw new Error('Password already exists')
        }
        else{
    let result = await login.create({email:req.body.email,password:req.body.password});
    res.status(200).json(result)
        }
    })
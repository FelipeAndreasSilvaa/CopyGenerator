const express = require('express')
const { default: mongoose } = require('mongoose')
const UserModel = require('./src/models/User')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



const app = express()
const port = 3001

mongoose.connect('mongodb://localhost:27017/CopyGenerator')

app.use(cors({ origin: "http://localhost:3000" })); // Ajuste a porta conforme necessário
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/register',async (req,res)=>{
   try {
    const {name,email, password} = req.body

    // Gera o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await UserModel.create({
        name,
        email,
        password: hashedPassword
    })

    res.json(newUser)
   } catch (error) {
    res.status(500).json({error: "Erro ao registrar usuário", details: err})
   }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.json({ success: false, message: "Usuário não encontrado." });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.json({ success: false, message: "Senha incorreta." });
      }
  
      // Senha correta → Retorna dados do usuário (sem a senha)
      return res.json({
        success: true,
        message: "Login realizado com sucesso.",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: "Erro no servidor", error: err });
    }
});
  


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
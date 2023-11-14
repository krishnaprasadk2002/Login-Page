var express=require("express");
var router=express.Router()

const credential = {
   email: "admin@gmail.com",
   password: 'admin123'
 };
 
 router.get('/',function(req,res)
 {
    if(req.session.user){
        res.redirect('/dashboard')
    }else{

        res.render('index',{title:"Login Page"})
    }
 })

 router.post('/login',(req, res) => {
   if (req.body.email === credential.email && req.body.password === credential.password) {
     req.session.user = req.body.email;
     res.redirect('/dashboard')
   //   res.end('login successful....!');
   } else {
    res.render('index',{log:"incorrect Username or Password"})
   }
 });



// route for dashboard
router.get('/dashboard',(req,res) =>
{
    if(req.session.user)
    {

        let movies = 
        [
            {
                name:"2018",
                description: "NOV 10 2023",
                src:"https://m.media-amazon.com/images/M/MV5BZWFhZjBjY2ItMmZmMC00N2RjLTg2ZjktNDUwNmYwNmVjMDA5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
            },
            {
                name:"Kaduva",
                description:"2023",
                src:"https://1.bp.blogspot.com/-TobegqdSt_A/X3rE7R0mhMI/AAAAAAAAXE8/3dNEIdXa-I48aKGjI7cKTofKl6uPdkrOQCLcBGAsYHQ/s1000/kaduva_ch_poster01.jpg"
            },
            {
                name:"Under World",
                description:"2023",
                src:"https://i1.wp.com/www.nairtejas.com/wp-content/uploads/2019/12/Under-World-Malayalam-film-poster-by-Oldmonks.jpg?ssl=1"
            },
            {
                name:"Premam",
                description:"2017",
                src:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2baee529323171.55edda9493f77.jpg"
            },
            {
                name:"RDX",
                description:"2023",
                src:"https://m.media-amazon.com/images/M/MV5BYzcwZTZmOTUtMGE2Ny00ZWU3LWEwZjAtNzdjZWNlNGJmYWM1XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
            },
            {
                name:"Thuramukham",
                description:"2022",
                src:"https://m.media-amazon.com/images/M/MV5BZGQ2ZmE4M2ItOWY2OS00ZWExLWE1ZmQtZDRmZDE3YzIxNTkxXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX658_.jpg"
            }
        ];

        res.render('dashboard', {user :req.session.user,movies});
    }
    else
    {
        res.render('index');
    }
});

 //route for logout

 router.get("/logout",(req,res)=>{
   req.session.destroy(function(err){
      if(err){
         console.log(err);
         res.send("error")
      }else{
         res.render('index',{tittle:"Express",logout:"Logout Successfully....!"})
      }
   })
 })
 
module.exports=router;
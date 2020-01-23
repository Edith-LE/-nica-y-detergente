const canvas = document.querySelector('#canvas-one')
const ctx = canvas.getContext('2d')
let interval
let frames=0
let logos = []
let score = 0
let enemies= []

const img = {
    bg1: './images/bg-vintage.jpg',
    kimberly: './sprite-one/merge_from_ofoct.png',
    instagram: './images/logo-instagram.png',
    starbucks: './images/Starbucks-logo.png',
    tinder: './images/Tinder-logo.png',
    chairEnemi: './images/imágenes que restan puntos/silla de oficina.png',
    plumones: './images/imágenes que restan puntos/cosas de oficina.png',
    jefeGodin: './images/imágenes que restan puntos/jefe godín.png',
    engrapadora: './images/imágenes que restan puntos/engrapadora.jpg'

}

class Background{
    constructor (x,y){
    this.x = x
    this.y = y
    
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = img.bg1
       this.img.onload = () =>{
        this.draw()
        }
    }
    draw(){
        //if(this.x >= 8487) this.x = 0
        if(this.x < -canvas.width) this.x = 0
        this.x --
        ctx.drawImage(
                    this.img,
                    this.x,
                    this.y, 
                    this.width, 
                    this.height)
        ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
        ctx.font = '30px Arial'
        ctx.fillStyle = 'white'
    }    
}

class Character{
    constructor (x, y){
        this.x = x
        this.y = y
        this.width = 100
        this.height = 100
        this.sx = 0
        this.sy = 0
        this.img = new Image()
        this.img.src = img.kimberly
        this.img.onload = () => {
            this.draw()
       }
    }
    draw(){
        if(this.sx >= 2010) this.sx = 0
    //ctx.fillRect(this.x,this.y,10,10);
        ctx.drawImage(
            this.img,
            this.sx,
            this.sy,
            115,
            95,
            this.x,
            this.y,
            this.width,
            this.height
        ) 
    }
    // goRight(){
    //     if(this.x > canvas.width - 100) return
    //     this.x += 10
    //     this.move()
    // }
    // goLeft(){
    //     this.x -=10
    //     this.move()
    // }
    goUp(){
        this.y -= 20
        this.move()
    }
    goDown(){
        this.y += 20
        this.move()
    }
    move (){
        this.sx += 95
    }
    isTouching(log) {
        return (
          this.x < log.x + log.width &&
          this.x + this.width > log.x &&
          this.y < log.y + log.height &&
          this.y + this.height > log.y
        )
    }
}

class Logos{
    constructor (logo, y){
        switch(logo){
            case 1:
                this.x = 300
                this.y = y
                this.width = 70
                this.height = 60
                this.img = new Image ()
                this.img.src = img.instagram
                this.onload = () =>{
                  //  this.draw ()
                }
            break;
            case 2:
                this.x = 300
                this.y = y
                this.width = 50
                this.height = 50
                this.img = new Image ()
                this.img.src = img.starbucks
                this.onload = () =>{
                //    this.draw()
                }
            break;
            case 3: 
            this.x = 300
            this.y = y
            this.width = 70
            this.height = 50
            this.img = new Image ()
            this.img.src = img.tinder
            this.onload =  () =>{
              //  this.draw()
            }
            break;
        }
    }

    draw(){
        this.x --
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    // isTouching(logo){
    //     return (
    //         this.x < logo.x + logo.width &&
    //         this.x + this.width > logo.x &&
    //         this.y < logo.y + logo.height &&
    //         this.y + this.height > logo.y
    //     );
    // }
    
}



class Enemies{
    constructor (enemie, y){
        switch (enemie){
            case 1:
                this.x = 300
                this.y = y
                this.width = 60
                this.height = 60
                this.img = new Image ()
                this.img.src = img.chairEnemi
                this.onload = () =>{
//                    this.draw()
                }
            break;
            case 2:
                this.x = 300
                this.y = y
                this.width = 70
                this.height = 70
                this.img = new Image ()
                this.img.src = img.plumones
                this.onload = () =>{
  //                  this.draw()
                }
            break;
            case 3:
                this.x = 300
                this.y = y
                this.width = 50
                this.height = 50
                this.img = new Image ()
                this.img.src = img.engrapadora
                this.onload = () =>{
    //                this.draw()
                }
            break;
            case 4:
                this.x = 300
                this.y = y
                this.width = 70
                this.height = 50
                this.img = new Image ()
                this.img.src = img.jefeGodin
                this.onload = () =>{
      //              this.draw()
                }
            break;
        }       
    }
    draw (){
        this.x -= 8
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    // isTouching (enemie){
    //     return (
    //         this.x < enemie.x + enemie.width &&
    //         this.x + this.width > enemie.x &&
    //         this.y < enemie.y + enemie.height &&
    //         this.y + this.height > enemie.y
    //     );
    // }
}

const kim = new Character (0, canvas.height - 100)
const background = new Background(0, 0)

function generateLogos(){
    if( frames % 100 === 0){
        let position = Math.floor(Math.random()* (400))
        let log = Math.floor(Math.random() * (3))+1
        logos.push(new Logos (log, position))
    }
}


function drawLogos (){
    generateLogos()
    logos.forEach(lopgos => lopgos.draw())
}

function generateEnemies(){
    if( frames % 180 === 0){
        let position = Math.floor(Math.random() * (400)) + 200
        let enemigo = Math.floor(Math.random()*(4))+1
        enemies.push(new Enemies(enemigo, position))
    }
}

function drawEnemies(){
    enemies.forEach(Enemies => Enemies.draw())

}

function checkCollitions(){
    logos.forEach ((logo, idx) =>{
        if (kim.isTouching(logo)){
            if(logo.img.src === img.instagram) score += 5
            if(logo.img.src === img.tinder) score +=5
            else score +=20
            return logos.splice(idx, 1)
        }
    })
}

function checkCollitionsEnemie (){
    enemies.forEach((enem, idx) =>{
        if(kim.isTouching(enem)){
            score -= 5
            return enemies.splice(idx, 1)
            // console.log('me están tocando')
            // console.log(enem.img)
            //  if(enem.img.src === img.chairEnemi){
            //      score -= 5
                 
            }//else if (enem.img.src === img.plumones){
            //     score -= 5
            // }else if (enem.img.src === img.engrapadora){
            //     score -= 5
            // }else{
            //     //gameOver()
            // }
            // if(enem.img.src === img.chairEnemi) score -= 5
            // if(enem.img.src === img.plumones) score -= 5
            // if(enem.img.src === img.engrapadora) score -= 5
            // else gameOver()
            // return enemies.splice(idx, 1)
                
    })
}

function startGame (){
    if (interval) return
    interval = setInterval(update, 1000/60)
}

function gameOver (){
    ctx.font = '50px Courier';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);

    clearInterval(interval);
}

function update (){
    frames ++
    ctx.clearRect(0,0, canvas.width, canvas.height) 
    background.draw()
    kim.draw()
    drawLogos()
    checkCollitions()
    generateEnemies()
    drawEnemies()
    checkCollitionsEnemie() 
    //console.log(score)
    ctx.fillText(String(score), canvas.width - 100, 100)

    frames2 ++
    ctx2.clearRect(0,0, canvas.width, canvas.height)
    background2.draw()
    drawLogos2()
    checkCollitions2()
    generateEnemies2()
    drawEnemies2()
    nat.draw()
    //ctx2.fillStyle(String (score), canvas.width - 100, 100)
}

document.addEventListener('keydown', ({keyCode})=>{
    switch (keyCode){
        case 87:
            return nat.goUp2()
        case 83: 
            return nat.goDown2()
        case 38:
            return kim.goUp()
        case 40:
            return kim.goDown()
        case 70:
            return  startGame()

    }
    //console.log(keyCode)
})
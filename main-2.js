const canvas2 = document.querySelector('#canvas-two')
const ctx2 = canvas2.getContext('2d')
let interval2
let frames2=0
let logos2 = []
let score2 = 0
let enemies2= []

const img2 = {
    bg1: './images/bg-vintage.jpg',
    natacha: './sprite-one/sprite-N-one.png',
    instagram: './images/logo-instagram.png',
    starbucks: './images/Starbucks-logo.png',
    tinder: './images/Tinder-logo.png',
    chairEnemi: './images/imágenes que restan puntos/silla de oficina.png',
    plumones: './images/imágenes que restan puntos/cosas de oficina.png',
    jefeGodin: './images/imágenes que restan puntos/jefe godín.png',
    engrapadora: './images/imágenes que restan puntos/engrapadora.jpg',
    gameOver: './images/GameOver.jpg'

}

class Background2{
    constructor (x,y){
    this.x = x
    this.y = y
    
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = img2.bg1
       this.img.onload = () =>{
        this.draw()
        }
    }
    draw(){
       // if(this.x >= 8487) this.x = 0
        if(this.x < -canvas.width) this.x = 0
        this.x --
        ctx2.drawImage(
                    this.img,
                    this.x,
                    this.y, 
                    this.width, 
                    this.height)
        ctx2.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
        ctx2.font = '30px Arial'
        ctx2.fillStyle = 'white'
    }    
}

class Character2{
    constructor (x, y){
        this.hp= 50
        this.x = x
        this.y = y
        this.width = 100
        this.height = 100
        this.sx = 0
        this.sy = 0
        this.img = new Image()
        this.img.src = img2.natacha
        this.img.onload = () => {
            this.x = x
            this.draw()
       }
    }
    draw(){
        if(this.sx >= 660) this.sx = 0
    //ctx.fillRect(this.x,this.y,10,10);
        ctx2.drawImage(
            this.img,
            this.sx,
            this.sy,
            110,
            134,
            this.x,
            this.y,
            this.width,
            this.height
        ) 
    }
    goUp2(){
        this.y -= 40
        this.move()
    }
    goDown2(){
        this.y += 40
        this.move()
    }
    move (){
        this.sx += 110
    }
    isTouching(chac2) {
        return (
          this.x < chac2.x + chac2.width &&
          this.x + this.width > chac2.x &&
          this.y < chac2.y + chac2.height &&
          this.y + this.height > chac2.y
        )
    }
    drawLife(){
        ctx2.fillRect(20, 20, (this.hp * 200) / 50, 20)
    }
}

class Logos2{
    constructor (logo, y){
        switch(logo){
            case 1:
                this.x = 300
                this.y = y
                this.width = 70
                this.height = 60
                this.img = new Image ()
                this.img.src = img2.instagram
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
                this.img.src = img2.starbucks
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
            this.img.src = img2.tinder
            this.onload =  () =>{
              //  this.draw()
            }
            break;
        }
     }

     draw(){
        this.x --
        ctx2.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    //  isTouching (logos2){
    //     return (
    //         this.x < logos2.x + logos2.width &&
    //         this.x + this.width > logos2.x &&
    //         this.y < logos2.y + logos2.height &&
    //         this.y + this.height > logos2.y
    //     );
    // }
}



class Enemies2{
    constructor (enemie, y){
        switch (enemie){
            case 1:
                this.x = 300
                this.y = 600
                this.width = 60
                this.height = 60
                this.img = new Image ()
                this.img.src = img2.chairEnemi
                this.onload = () =>{
                  //  this.draw()
                }               
            break;
            case 2:
                this.x = 300
                this.y = y
                this.width = 80
                this.height = 70
                this.img = new Image ()
                this.img.src = img2.plumones
                this.onload = () =>{
                   // this.draw()
                }
            break;
            case 3:
                this.x = 300
                this.y = y
                this.width = 50
                this.height = 50
                this.img = new Image ()
                this.img.src = img2.engrapadora
                this.onload = () =>{
                 //   this.draw()
                }
            break;
            case 4:
                this.id = 'jefe'
                this.x = 300
                this.y = y
                this.width = 70
                this.height = 50
                this.img = new Image ()
                this.img.src = img2.jefeGodin
                this.onload = () =>{
                  //  this.draw()
                }
            break;
        }       
    }
    draw (){
        this.x -= 6
        ctx2.drawImage (this.img, this.x, this.y, this.width, this.height)
    }
    // isTouching (enemie2){
    //     return (
    //         this.x < enemie2.x + enemie2.width &&
    //         this.x + this.width > enemie2.x &&
    //         this.y < enemie2.y + enemie2.height &&
    //         this.y + this.height > enemie2.y
    //     );
    // }
}

class GameOver2{
    constructor (src){
        this.x = 0
        this.y = 50
        this.width = 300 
        this.height = 500
        this.img = new Image ()
        this.img.src = src
        this.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx2.drawImage(this.img, this.x, this.y, this.width, this.height)
        
    }
}

const nat = new Character2 (0, canvas.height - 100)
const background2 = new Background2(0, 0)
const overRight = new GameOver2 (img.gameOverRight)


function generateLogos2(){
    if( frames2 % 280 === 0){
        let position = Math.floor(Math.random()* (400))
        let log = Math.floor(Math.random() * (3))+1
        //logos2.push(new Logos2 (log, position))
        logos2.push(new Logos2(log, position))
    }
}



function drawLogos2 (){
    generateLogos2()
    //console.log(logos2)
    logos2.forEach(logos => logos.draw())
}

function generateEnemies2 (){
    if( frames2 % 180 === 0){
        let position = Math.floor(Math.random() * (400)) + 200
        let enemigo = Math.floor(Math.random()*(4))+1
        enemies2.push(new Enemies2(enemigo, position))
    }
}

function drawEnemies2(){
    enemies2.forEach(Enemies => Enemies.draw())

}



function checkCollitions2(){
    logos2.forEach ((logo, idx) =>{
        if (nat.isTouching(logo)){
            if(logo.img.src === img.instagram) score2 += 5
            if(logo.img.src === img.tinder) score2 +=5
            else score2 +=20
             return logos2.splice(idx, 1)
        }
    })
}

function checkCollitionsEnemie2 (){
    enemies2.forEach((enem, idx)=>{
        if(nat.isTouching(enem)){
            nat.hp -=5
            if(enem.id === 'jefe'){
                gameOver ()
            }
            return enemies2.splice(idx,1)
        }
    })
}

// function gameOver2 (){
//     ctx.font = '50px Courier';
//     ctx.fillText('GAME OVER', canvas.width/2 , canvas.height/2 );

  

//     clearInterval(interval);
// }


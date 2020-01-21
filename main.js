const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let frames=0
let logos = []

const img = {
    bg1: './images/edificios-ciudad-moderna-fondo-plano_1441-3122.jpg',
    kimberly: './sprite-one/sprite-one-1.png',
    instagram: './images/logo-instagram.png',
    starbucks: './images/Starbucks-logo.png'
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
       // if(this.x >= 8487) this.x = 0
        if(this.x < -canvas.width) this.x = 0
        this.x --
        ctx.drawImage(
                    this.img,
                    this.x,
                    this.y, 
                    this.width, 
                    this.height)
        ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
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
            this.x = x
            this.draw()
       }
    }
    draw(){
        if(this.sx >= 670) this.sx = 0
    //ctx.fillRect(this.x,this.y,10,10);
        ctx.drawImage(
            this.img,
            this.sx,
            this.sy,
            95,
            115,
            this.x,
            this.y,
            this.width,
            this.height
        ) 
    }
    goRight(){
        if(this.x > canvas.width - 100) return
        this.x += 10
        this.move()
    }
    goLeft(){
        this.x -=10
        this.move()
    }
    goUp(){
        this.y -= 10
        this.move()
    }
    goDown(){
        this.y += 10
        this.move()
    }
    move (){
        this.sx += 55
    }
}

class Logos{
    constructor (x, y, imgSrc){
        this.x = x
        this.y = y
        this.width = 100
        this.height = 50
        this.img = new Image()
        this.img.src = imgSrc
        this.img.onload = () =>{
            this.draw()
        }
    }
    draw(){
        this.x --
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}

const kim = new Character (0, canvas.height - 100)
const background = new Background(0, 0)

function generateLog () {
    let img, rnd
    
    if(frames % 100 === 0){
        
        rnd = Math.random() * canvas.height
        if(Math.random()>= 0.5) img = img.instagram
        if(Math.random ()>= 0,klckododflodfodfdfdw.5) img = img.starbucks
        logos.push(new Logos(canvas.width + 100, rnd, img))
    }
}

function drawLogos (){
    generateLog()
    logos.forEach(logos => logos.draw())
}

function startGame (){
    if (interval) return
    interval = setInterval(update, 1000/60)
}

function update (){
    frames ++
    ctx.clearRect(0,0, canvas.width, canvas.height) 
    background.draw()
    drawLogos()
    kim.draw() 
}

document.addEventListener('keydown', ({keyCode})=>{
    switch (keyCode){
        case 39:
            return kim.goRight()
        case 38:
            return kim.goUp()
        case 37:
            return kim.goLeft()
        case 40:
            return kim.goDown()
        case 70:
            return  startGame()

    }
    console.log(keyCode)
})
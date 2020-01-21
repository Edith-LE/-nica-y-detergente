const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let frames

const img = {
    bg1: './images/bg-all.png',
    kimberly: './sprite-one/merge_from_ofoct.png'
}

class Background{
    constructor (x,y, src){
        this.x = x
    this.y = y
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = src
       this.img.onload = () =>{
        this.draw()
        }
    }
    draw(){
        if(this.x < -canvas.width) this.x = 0
        this.x --
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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
            this.draw()
       }
    }
    draw(){
        if(this.sx >= 1340) this.sx = 0
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
    goLeft (){
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
        this.sx += 95
    }
}

const kim = new Character (0, canvas.height - 100)
const background = new Background(0, 0, img.bg1)

function startGame (){
    if (interval) return
    interval = setInterval(update, 100/30)
}

function update (){
    frames ++
    ctx.clearRect(0,0, canvas.width, canvas.height)
    kim.draw()  
    background.draw()
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
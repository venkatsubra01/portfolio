const runBackgroundScript = () => {
    let hero = document.querySelector('.hero')
    let canvas = document.getElementById('dotsCanvas');
    let NUM_DOTS = 40;
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    let ctx = canvas.getContext('2d');

    let dots = [];
    let arrayColors = ['#746eaa', '#2dfdf4', '#bcffb2', '#00e498']
    for (let index = 0; index < NUM_DOTS; index++) {
        dots.push ({
            x: 5 + Math.floor(Math.random() * (canvas.width-15)),
            y: 5 + Math.floor(Math.random() * canvas.height-15),
            size: Math.random() * 3 * 5,
            color: arrayColors[Math.floor(Math.random()*4)] /*4 colors*/
        });
    }

    const drawDots = () => {
        dots.forEach(dot => {
            ctx.fillStyle = dot.color;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
            ctx.fill();
        })
    }
    console.log(dots);
    drawDots()
    hero.addEventListener('mousemove', (event) => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        drawDots();
        let mouse = {
            /*Some strange terms here that I had to include to make the mouse tracking more precise*/
            x: event.pageX - hero.getBoundingClientRect().left,
            y: event.pageY - hero.getBoundingClientRect().top - window.scrollY
        }
        
        dots.forEach(dot => {
            /*Calculating distance with respect to each dot vs mouse*/ 
            let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
            if(distance < 300){
                ctx.strokeStyle = dot.color;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        })
    })

    hero.addEventListener('mouseout', (event) => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        drawDots();
    })
}

export default runBackgroundScript;
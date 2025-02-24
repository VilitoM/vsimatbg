// Suzdavame promenlivi
let myX, myY, vKletka=[], kl1, kl2, red1, kolona1, red2, kolona2;
let izchakai, brUpdates, brbravo, tapetwin;
let sign=[];
    sign[0]=tryToLoad("sign[0]", "yellow");
    sign[1]=tryToLoad("sign[1]", "gray");
    sign[2]=tryToLoad("sign[2]", "blue");
    sign[3]=tryToLoad("sign[3]", "black");
    sign[4]=tryToLoad("sign[4]", "green");
    sign[5]=tryToLoad("sign[5]", "red");
let backVSIMAT=tryToLoad("backVSIMAT", "pink");
let backPlay=tryToLoad("backPlay", "purple");
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    brbravo=0;
    izchakai=false;
    tapetwin=false;
    brUpdates=0;
    kl1=-1;
    kl2=-1;
    //vKletka=[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    for(let i=0; i<12; i++)
    {
        vKletka[i]=-1;
    }
    izbrano=randomInteger(12);
    for(let t=0; t<6; t++)
    {
        while(vKletka[izbrano]!=-1)
        {
            izbrano=randomInteger(12);
        }
        vKletka[izbrano]=t;
        while(vKletka[izbrano]!=-1)
        {
            izbrano=randomInteger(12);
        }
        vKletka[izbrano]=t;
    }
}
function update() {
    //tuk se izvurshvat dejstviqta
    if(kl1!=-1 && kl2!=-1)
    {
        brUpdates++;
        if(brUpdates==200)
        {
            izchakai=true;
            brUpdates=0;
        }
    }
    if(izchakai==true){
        if(vKletka[kl1]==vKletka[kl2])
        {
            console.log("Bravo");
            brbravo++;
            if(brbravo==6)
            {
                tapetwin=true;
            }
            vKletka[kl1]=-2;
            vKletka[kl2]=-2;
        }
        else
        {
            console.log("Greshka");
        }
        kl1=-1;
        kl2=-1;
        izchakai=false;
    } 
}
function draw() {
    // Tuk naprogramiram kakvo da se risuva
    drawImage(backPlay, 0, 0, 800, 600);
    for(let k=0; k<4; k++)
    {
        if(vKletka[k]!=-2)
        {
            for(let t=0; t<6; t++)
            {
                if(vKletka[k]==t)
                {
                    drawImage(sign[t], k*200, 0, 200, 200)
                }
            }
        }
        else
        {
            drawImage(star, k*200, 0, 200, 200);
        }
    }
    for(let k=4; k<8; k++)
    {
        if(vKletka[k]!=-2)
        {
            for(let t=0; t<6; t++)
            {
                if(vKletka[k]==t)
                {
                    drawImage(sign[t], (k-4)*200, 200, 200, 200);
                }
            }
        }
        else
        {
           drawImage(star, (k-4)*200, 200, 200, 200);
        }
    }
    for(let k=8; k<12; k++)
    {
        if(vKletka[k]!=-2)
        {
            for(let t=0; t<6; t++)
            {
                if(vKletka[k]==t)
                {
                    drawImage(sign[t], (k-8)*200, 400, 200, 200);
                }
            }
        }
        else
        {
            drawImage(star, (k-8)*200, 400, 200, 200);
        }
    }
    for(let b=0; b<4; b++)
    {
        if(vKletka[b]!=-2)
        {
            if(b!=kl1 && b!=kl2)
            {
                drawImage(box, b*200, 0, 200, 200);
            }
        }
    }
    for(let b=4; b<8; b++)
    {
        if(vKletka[b]!=-2)
        {
            if(b!=kl1 && b!=kl2)
            {
                drawImage(box, (b-4)*200, 200, 200, 200);
            }
        }
    }
    for(let b=8; b<12; b++)
    {
        if(vKletka[b]!=-2)
        {
            if(b!=kl1 && b!=kl2)
            {
                drawImage(box, (b-8)*200, 400, 200, 200);
            }
        }
    }
    if(tapetwin==true)
    {
        drawImage(backVSIMAT, 0, 0, 800, 600);
    }
}
function mouseup() {
    if(kl1==-1){
        red1=Math.floor(mouseX/200);
        kolona1=Math.floor(mouseY/200);
        kl1=4*kolona1+red1;
    }else{
        if(kl2==-1){
            red2=Math.floor(mouseX/200);
            kolona2=Math.floor(mouseY/200);
            kl2=4*kolona2+red2;
            if(kl1==kl2){
                kl2=-1;
                console.log("Izberi otnovo!!!");
            }
        }
    }
}





function updateClock()
{
    
    const now = new Date();
    let hours = now.getHours();
    const meridium = hours >=12 ? "PM":"AM";
    hours = hours % 12 || 12; //CHIA DU CHO 12 NEU DU = 0 RETURN 12
    hours=hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${second} ${meridium}`;
    document.getElementById("clock").textContent=timeString;
    
}
setInterval(updateClock,1000);
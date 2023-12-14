var time=new Date();
var hrs=time.getHours();

var isNight=(18<=hrs || 7>=hrs) ? true:false; //bool to determine whether its day or night time

const backgroundURLs={
    day: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOv8ScdV-_m8OO89laW4f-2F_fqESEXvzZw&usqp=CAU',
    night:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgbkLYgbTGcmkjiB7LgVRCMmdO_xcTkWAOg&usqp=CAU',
    //night:'c:\Users\Lenovo\Desktop\G4.jpg',
};
const setBg=(image)=>{
    window.onload=function(){
        document.body.style.background="url('"+backgroundURLs[image]+"')";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="100%";          
       /* document.getElementById('t').style.backgroundSize="100%";   
        document.getElementById('t').style.backgroundImage="url('"+backgroundURLs[image]+"')";
        document.getElementById('t').style.backgroundRepeat="no-repeat";   */
    }
};
//display
if(isNight){
    setBg('night');
}
else{
    setBg('day');
}

window.onload = function () {

    let iconhamburger = document.getElementById('icon-hamburger')
    let iconclose = document.getElementById('icon-close')
    let mobileNAV = document.getElementById('mobileNAV') 
    let textheader = document.getElementById('text-header')
    let Learnheader = document.getElementById('Learn-header')

    function responsivMENU(){

        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            
        if(w > 962){
            iconhamburger.style.display= 'none';
            iconclose.style.display= 'none';
            textheader.style.display= 'block';
            Learnheader.style.display= 'flex';
            mobileNAV.style.display= 'none';
            }  

         else{
                if(iconhamburger.style.display== 'none' && iconclose.style.display== 'none'){
                    iconhamburger.style.display= 'block';
                }

                iconhamburger.addEventListener('click',function(){
                    iconhamburger.style.display= 'none';
                    iconclose.style.display= 'block';
                    textheader.style.display= 'none';
                    Learnheader.style.display= 'none';
                    mobileNAV.style.display= 'flex';
                    iconclose.classList.add('shake');
                    iconhamburger.classList.remove('shake');
                })
    
                iconclose.addEventListener('click',function(){
                    iconhamburger.style.display= 'block';
                    iconclose.style.display= 'none';
                    textheader.style.display= 'block';
                    Learnheader.style.display= 'flex';
                    mobileNAV.style.display= 'none';
                    iconclose.classList.remove('shake');
                    iconhamburger.classList.add('shake');
                })
                
            }
    }

    setInterval(responsivMENU,1)

}
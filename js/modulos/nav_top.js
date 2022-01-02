export default function top(nav, enlaces){
    let d = document;
    let w = window;
    
    w.addEventListener('scroll', function() {
        let yOffset = window.pageYOffset;
        // console.log(window.pageYOffset);
        let navTop = d.querySelector(nav),
          links = d.querySelector(enlaces);

        if(yOffset >=1 ){
            navTop.style.height = '60px';
            navTop.style.transition = '.5s';
            links.style.transition = '.5s';
            links.style.top = "60px";
        }else{
            navTop.style.height = '100px';
            links.style.transition = '.5s';
            navTop.style.transition = '.5s';
            links.style.top = "100px";
        }
    });
}
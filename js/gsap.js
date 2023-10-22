gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({})

   tlStart.from('.author',{
      y: -400,
      duration:1.5,
      opacity:0,
      ease: "bounce.out",
   })

   tlStart.from('.preview__avatar',{
      x: 400,
      duration:1.5,
      opacity:0,
      ease:"back.out(1.5)",
   },"<")

   tlStart.from(".avatar",{
      rotation: 720, 
      duration:1.5,
      
   },"<")

   tlStart.from('.about-me__discription',{
      x: 400,
      duration:1.5,
      opacity:0,
      ease:"back.out(1.5)",
   })

   tlStart.from('.about-me__picture',{
      x: -400,
      duration:1.5,
      opacity:0,
      ease:"back.out(1.5)",
   },"<")

   gsap.from('.skill-card',{
      stagger:0.5,
      opacity:0,
      y:200,
      ease: "ease in out",
      scrollTrigger:{
         // markers:true,
         trigger: '.skills',
         start: 'top 70%',
         end:'30% 50%',
         // scrub: 2,
         toggleActions: 'play none none reverse',
      }
   })

   gsap.from('.project-card',{
      stagger:0.3,
      opacity:0,
      y:200,
      ease: "bounce.out",
      scrollTrigger:{
         // markers:true,
         trigger: '.my-works',
         start: 'top 70%',
         end:'30% 50%',
         // scrub: 2,
         toggleActions: 'play none none reverse',
      }
   })

   function paralax() {
      const preview = document.querySelector('.preview');
      const initialX = preview.offsetLeft + preview.offsetWidth / 2;
      const initialY = preview.offsetTop + preview.offsetHeight / 2;
   
      document.addEventListener('mousemove', function(event){
         const mouseX = event.clientX - initialX;
         const mouseY = event.clientY - initialY;

      gsap.to(
         '.bgtxt', 
         {
          x: -mouseX * 0.01, 
          y: mouseY * 0.01, 
         ease: 'power2.out' ,
         },);

      gsap.to(
         '.avatar__shadow--first-shadow', 
         {
         x: mouseX * 0.0125, 
         y: -mouseY * 0.0125, 
         ease: 'power2.out' ,
         },);

      gsap.to(
         '.avatar__shadow--second-shadow', 
         {
          x: -mouseX * 0.02, 
          y: -mouseY * 0.02, 
         ease: 'power2.out' ,
         },);

      gsap.to(
         '.avatar__img', 
         {
          x: mouseX * 0.03, 
          y: -mouseY * 0.03, 
         ease: 'power2.out' ,
         },);
      }) 

   }

   paralax()



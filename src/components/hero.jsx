
import { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Footer from './footer.jsx';
import Headphone from '../assets/brown.png';
import Video from '../assets/video.mp4';
import Image1 from '../assets/img1.jpeg';
import Image2 from '../assets/img2.jpeg';
import Image3 from '../assets/img3.jpeg';
import Image4 from '../assets/img4.jpg'
import Green from '../assets/green.png';
import Black from '../assets/black.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);


gsap.registerPlugin(SplitText);

const Hero = () => {
    const texting = useRef(null);
    const phone = useRef(null);
    const scope = useRef(null);
    const trueClarity = useRef(null);
    const paragraph = useRef(null);
    const boxes = useRef(null);
    const master = useRef(null);
    const videoRef = useRef(null);

useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        document.fonts.ready.then(() => {
            if (!texting.current || !phone.current) return;

            const split = new SplitText(texting.current, {
                type: "chars, words, lines",
            });

            const split2 = new SplitText(master.current, {
                type: "chars",
            });

            const mm = gsap.matchMedia();

            // MOBILE ONLY TIMELINE
            mm.add("(max-width: 767px)", () => {
                const tl = gsap.timeline();

                // TEXT ANIMATION
                tl.from(split.chars, {
                    yPercent: () => gsap.utils.random(-200, 200),
                    rotation: () => gsap.utils.random(-30, 30),
                    autoAlpha: 0,
                    ease: "back.out(1.5)",
                    stagger: { amount: 0.5, from: "random" },
                    duration: 1.5
                });

                    //masterbeat text animation
                                        tl.fromTo(
                        split2.chars,
                        {
                            yPercent: 0
                        },
                        {
                            yPercent: -40,          // go up a little
                            duration: 0.5,
                            ease: "sine.inOut",
                            stagger: 0.05,          // wave effect
                            repeat: -1,
                            yoyo: true,
                            
                        }
                        );


                // HEADPHONE ANIMATION
                tl.fromTo(phone.current, 
                    { autoAlpha: 0, scale: 0, y: 100, rotate: -20 }, 
                    { autoAlpha: 1, scale: 1, y: 0, rotate: 12, ease: "power3.out", duration: 1, immediateRender: false }, 
                    "-=0.5"
                );

                // TRUE CLARITY SLIDE-IN
                tl.fromTo(trueClarity.current,
                    { x: '200%', autoAlpha: 0 },
                    { x: '0%', autoAlpha: 1, ease: "power3.out", duration: 1.5 },
                    "-=0.5"
                );

                // Paragraph slide in
                tl.fromTo(
                    paragraph.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" },
                    "-=1"
                );

                // Button opacity in
                tl.fromTo(
                    "#button",
                    { opacity: 0, x: -40 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power1.out" },
                    "-=1"
                );

                // HEADPhone scroll animation
                tl.to(phone.current, {
                    y: '50vh',
                    x: '70vw',
                    rotate: 180,
                    scale: 1.2,
                    ease: 'power1.inOut',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: paragraph.current,
                        start: "top 65%",
                        end: "top 25%",
                        scrub: true,
                      //  markers: true
                    }
                }); 


                // HEADPhone scroll animation HIDDEN
                tl.to(phone.current, {
                    y: '180vh',
                 
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".box1",
                        start: "top 50%",
                        end: "top 30%",
                        scrub: true,
                   //  markers: true
                    }
                }); 
                // HEADPhone scroll animation 2
                tl.to(phone.current, {
                    y: '200vh',
                    x: '-20vw',
                    rotate: 270,
                    scale: 1.2,
                    ease: 'power1.inOut',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".master-beat",
                        start: "top 90%",
                        end: "top 30%",
                        scrub: true,
                       // markers: true
                    }
                }); 
                // HEADPhone scroll animation 3
                tl.to(phone.current, {
                    y: '320vh',
                    x: '15vw',
                    rotate: 390,
                    scale: 1.2,
                    ease: 'power1.inOut',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".fourth-section",
                        start: "top 90%",
                        end: "bottom bottom",
                        scrub: true,
                      //  markers: true
                    }
                }); 


                //HEADPHONE scroll animation 4
                tl.to(phone.current, {
                    y: '420vh',
                    x: '-8vw',
                    rotate: 20,
                    scale: 1.2,
                    

                    ease: 'power1.inOut',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".fifth-section",
                        start: "top 90%",
                        end: "bottom bottom",
                        scrub: true,
                       // markers: true
                    }
                });

                //headphone shadow animation
                tl.to(phone.current, {
                     filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
                     ease: 'power1.inOut',
                        immediateRender: false,
                    scrollTrigger: {
                        trigger: ".fifth-section",
                        start: "top 90%",
                        end: "top 50%",
                        scrub: true,
                        // markers: true
                    }
                });

               //box 123 
               tl.fromTo('.box1',{ x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.out" , scrollTrigger: {
                    trigger: ".box1",
                    start: "top 85%",
                    end: "top 65%",
                    scrub: true,
                    //  markers: true
                }});
               tl.fromTo('.box2',{ x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.out" , scrollTrigger: {
                    trigger: ".box2",
                    start: "top 85%",
                    end: "top 65%",
                    scrub: true,
                    //  markers: true
                }});
               tl.fromTo('.box3',{ x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.out" , scrollTrigger: {
                    trigger: ".box3",
                    start: "top 85%",
                    end: "top 65%",
                    scrub: true,
                    //  markers: true
                }});

                //video slide in
               tl.fromTo('.video',{ x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.out" , scrollTrigger: {
                    trigger: ".video",
                    start: "top 85%",
                    end: "top 65%",
                    scrub: true,
                    //  markers: true
                }});

                //paragraph section3 slide in
               tl.fromTo('.paragraph-section3',{ y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.out" , scrollTrigger: {
                    trigger: ".paragraph-section3",
                    start: "top 85%",
                    end: "top 65%",
                    scrub: true,
                    //  markers: true
                }});


                 // images section4 grow in
                gsap.fromTo('.images-section4',
                    { scale: 0.6, autoAlpha: 0 },
                    {
                        scale: 1,
                        autoAlpha: 1,
                        ease: "power3.out",
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".images-section4-ref",
                            start: "top 80%",
                            end: "top top",
                            scrub: true,
                            //  markers: true,
                        }
                    }); 








                 }); 


            // DESKTOP / TABLET TIMELINE
            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline();

                // TEXT ANIMATION
                tl.from(split.chars, {
                    yPercent: () => gsap.utils.random(-200, 200),
                    rotation: () => gsap.utils.random(-30, 30),
                    autoAlpha: 0,
                    ease: "back.out(1.5)",
                    stagger: { amount: 0.5, from: "random" },
                    duration: 1.5
                });

                // HEADPHONE ANIMATION
                tl.fromTo(phone.current, 
                    { autoAlpha: 0, scale: 0, y: 100, rotate: -20 }, 
                    { autoAlpha: 1, scale: 1, y: 0, rotate: 12, ease: "power3.out", duration: 1, immediateRender: false }, 
                    "-=0.5"
                );

                gsap.to(phone.current, {
                    y: '85vh',
                    x: '16vw',
                    scale: 0.8,
                    rotate: 90,
                    ease: 'power1.inOut',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".second-screen",
                        start: "top bottom",
                        end: "top 70vh",
                        scrub: true,
                        // markers: true
                    }
                });

                // Paragraph slide in
                gsap.fromTo(
                    paragraph.current,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: ".second-screen",
                            start: "top 60%",
                            end: "top 30%",
                            scrub: true,
                        }
                    }
                );
  
                //masterbeat slide in
                gsap.fromTo(master.current,
                    { y: 50,autoAlpha: 0 },
                    {
                        y: 10,
                        autoAlpha: 1,
                       
                        ease: "power3.out",
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".third-screen",
                            start: "top 75%",
                            end: "top 30%",
                            scrub: true,
                            //  markers: true,
                        }
                    }
                );


                        //masterbeat text animation
                                        tl.fromTo(
                        split2.chars,
                        {
                            yPercent: 0
                        },
                        {
                            yPercent: -20,          // go up a little
                            duration: 0.5,
                            ease: "sine.inOut",
                            stagger: 0.05,          // wave effect
                            repeat: -1,
                            yoyo: true,
                            
                        }
                        );                

                // Boxes slide in
                gsap.fromTo(
                    boxes.current,
                    { x: 100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: ".second-screen",
                            start: "top 25%",
                            end: "top 5%",
                            scrub: true,
                            // markers: true,
                        }
                    }
                );

                // TRUE CLARITY slide in
                gsap.fromTo(trueClarity.current,
                    { x: '50%', autoAlpha: 0 },
                    {
                        x: '0%',
                        autoAlpha: 1,
                        ease: "power3.out",
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".second-screen",
                            start: "top 70%",
                            end: "top 40%",
                            scrub: true,
                            // markers: true,
                        }
                    }
                );

                    //video  slide in
                gsap.fromTo(videoRef.current,
                    { x: 100, autoAlpha: 0 },
                    {
                        x: 0,
                        autoAlpha: 1,
                        ease: "power3.out",
                        
                        scrollTrigger: {
                            trigger: ".third-screen",
                            start: "top 60%",
                            end: "top 10%",
                            scrub: true,
                            //  markers: true,
                        }
                    }
                );

                //paragraph section3 slide in
                gsap.fromTo('.paragraph-section3',
                    { y: 50, autoAlpha: 0 },
                    {
                        y: "-25vh",
                        autoAlpha: 1,
                        ease: "power3.out",
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".video",
                            start: "top 70%",
                            end: "top 30%",
                            scrub: true,
                             // markers: true,
                        }
                    }
                );

                        //headphone move for third section
                              gsap.to(phone.current, {
                                y: '195vh',
                                x: '-28vw',
                                scale: 0.8,
                                rotate: -25,
                                ease: 'power1.inOut',
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: ".third-screen",
                                    start: "top bottom",
                                    end: "center 60%",
                                    scrub: true,
                                    //markers: true
                                    
                                }
                            });
                        //headphone move for fourth section
                              gsap.to(phone.current, {
                                y: '290vh',
                                x: '-20vw',
                                scale: 0.7,
                                rotate: 45,
                                ease: 'power1.inOut',
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: ".fourth-section",
                                    start: "top bottom",
                                    end: "center 60%",
                                    scrub: true,
                                   // markers: true
                                    
                                }
                            });

                            // images section4 grow in
                gsap.fromTo('.images-section4',
                    { scale: 0.6, autoAlpha: 0 },
                    {
                        scale: 1,
                        autoAlpha: 1,
                        ease: "power3.out",
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".images-section4-ref",
                            start: "top 70%",
                            end: "top top",
                            scrub: true,
                             // markers: true,
                        }
                    }); 

                    //headphome move for fifth section
                              gsap.to(phone.current, {
                                y: '360vh',
                                x: '-17vw',
                                scale: 0.8,
                                rotate: 0,
                                ease: 'power1.inOut',
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: ".fifth-section",
                                    start: "top bottom",
                                    end: "center 90%",
                                    scrub: true,
                                   // markers: true
                                }});
                              gsap.to(phone.current, {
                                y: '400vh',
                                x: '-17vw',
                                scale: 0.5,
                                rotate: 0,
                                ease: 'power1.inOut',
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: ".fifth-section",
                                    start: "center 90%",
                                    end: "center 60%",
                                    scrub: true,
                                 //   markers: true
                                }});
                               

                                //last-paragraph slide in
                gsap.fromTo('.last-text',
                    { y: 100, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        ease: "power3.out",
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".last-section",
                            start: "top 70%",
                            end: "top top",
                            scrub: true,
                             // markers: true,
                        }
                    });






                           
            });
        });
    }, scope);

    return () => ctx.revert();
}, []);


    return (  <div>
        <div ref={scope} className="relative overflow-hidden ">
            <div id="smooth-wrapper">
                <div className='w-full' id="smooth-content">
                    <div className='image-here relative'>
                        <img 
                            src={Headphone} 
                            alt="HEADPHONE" 
                            // Ensure z-index and basic visibility in CSS
                            className='absolute z-50 w-[35vw] left-1/2 -translate-x-1/2 max-h-[80vh] object-contain filter drop-shadow-[8px_35px_6px_rgba(0,0,0,0.15)]' 
                            ref={phone}
                            style={{ opacity: 0 }} // Start hidden to prevent flash of unstyled content
                        />
                    </div>

                    <div className="first-screen flex flex-col justify-center items-center md:h-[88vh] h-[30vh] text-center">
                        <div 
                            className=" text-prim font-extrabold text-6xl md:text-[13vw] text-center leading-none" 
                            ref={texting}
                        >
                            MODERN HARMONY
                        </div>
                    </div>
                     <div className="second-screen md:h-screen    flex   justify-center ">
                        <div className='  w-[90vw]  '>
                                <div className="cont-section  ">
                                    <div className='h-[50vh] md:h-auto flex flex-col md:block justify-center  '>
                                <div className=" text-prim font-bold text-6xl md:text-[5vw]  leading-none ml-3.5 w-[30vw] " ref={trueClarity} >
                                    TRUE CLARITY
                                </div>
                                <div className="flex flex-col gap-3.5">
                                <div className='md:w-[40vw] w-[70vw] text-sm font-monsterrat text-prim' ref={paragraph}>
                                    Engineered for clarity, comfort, and immersive sound — Audira
                                         redefines your listening experience with style and performance
                                         in perfect harmony.
                                </div>
                                </div>
                                <button className='bg-neutral-700 rounded-lg md:w-[7vw] w-[20vw] text-white  md:mt-2.5' id='button'>buy</button>
                                </div>
                                <div className='md:h-[40vh] flex  items-center justify-center h-screen'>
                                <div className="boxes flex md:flex-row flex-col gap-5 mt-10" ref={boxes}>
                                    <div className="box box1">
                                            <div className='flex flex-col text-center md:gap-2 gap-4.5'>
                                                <div className='font-outfit md:text-[12px] text-3xl'>
                                                     Crystal-Clear Audio
                                                </div>
                                                <div className='font-monsterrat md:text-[10px]'>
                                                  Hear every detail with balance bass and studio-quality mids
                                                  and highs.
                                                </div>
                                            </div>
                                    </div>
                                    <div className="box box2">
                                            <div className='flex flex-col text-center md:gap-2 gap-4.5'>
                                                <div className='font-outfit md:text-[12px] text-3xl'>
                                                     All-Day Comfort
                                                </div>
                                                <div className='font-monsterrat md:text-[10px]'>
                                                   Lightweight build with plush ear cushions and ergonomic fit.
                                                </div>
                                            </div>
                                    </div>
                                    <div className="box box3">
                                            <div className='flex flex-col text-center md:gap-2 gap-4.5'>
                                                <div className='font-outfit md:text-[12px] text-3xl'>
                                                     40+ Hour Battery Life
                                                </div>
                                                <div className='font-monsterrat md:text-[10px]'>
                                                   Long-lasting performance, wherever you go.
                                                </div>
                                            </div>
                                    </div>
                                 

                                </div>
                                </div>
                                </div>
                        </div>
                    </div>

                        <div className="third-screen h-screen md:h-[110vh] flex justify-center items-center md:transform md:translate-y-[10vh] ">
                            <div className="flex flex-col justify-center items-center h-full w-[90vw] gap-[5vh]">

                                    <div className="master-beat  text-center text-prim font-bold text-[12vw]  md:text-[10vw]  leading-none  w-[80vw] md:h-[20vh] h-[20vh]" ref={master}>
                                     MASTERBEAT

                                    </div>

                                     <div className="video md:h-[50vh] self-start justify-center items-center flex ">
                                              <video src={Video} autoPlay muted loop className='md:w-[30vw] h-auto rounded-2xl' ref={videoRef}></video>

                                     </div>

                                     <div className="paragraph-section3   self-end md:w-[40vw] transform md:-translate-y-[25vh] text-prim font-outfit md:text-[12px] text-[15px]  ">
                                                                <p>
                                            Crafted for the modern audiophile, Audira headphones deliver
                                            sound so rich, it pulses through your senses. From crisp highs
                                            to deep, rolling bass—you don’t just hear it, you feel it.
                                            </p>
                                            <p>
                                            Whether you're in focus mode or free flow, the precision-tuned
                                            audio adapts to your pace. With Masterbeat, music becomes your
                                            personal soundtrack—bold, immersive, unforgettable.
                                            </p>
                                     </div>

                            </div>


                        </div>




                        <div className="fourth-section h-screen relative flex  justify-center items-center ">

                                <div className="grid grid-cols-2 gap-4 md:h-full place-items-center h-[60%]  relative">

                                   <img src={Image1} alt="image1" className='md:w-[20vw] w-[45vw] object-contain images-section4-ref
                                   border-10 border-white transform rotate-25 md:translate-y-[-5vw] translate-y-[5vw] md:translate-x-[-12vw] translate-x-[2vw] shadow-2xl images-section4' />
                                   <img src={Image2} alt="image2" className='md:w-[35vw] w-[45vw] object-contain border-10 border-white transform rotate-30 md:translate-y-[5vw]  md:translate-x-[5vw] -translate-y-[12vw]  shadow-2xl images-section4' 
                                   />
                                   <img src={Image3} alt="image3" className='md:w-[20vw] w-[60vw] object-contain border-10 border-white transform md:-rotate-30 -rotate-30 md:translate-y-[-7vw] col-span-2 md:col-span-1 shadow-2xl images-section4' />

                                    </div>


                        </div>

                        <div className="fifth-section h-screen flex flex-col justify-center items-center">
                        
                        {/* TOP PICKS */}
                        <div className="text-prim font-outfit text-[35px] md:text-[15vw]
                                        font-bold text-center
                                        order-first md:order-0
                                        md:absolute md:rotate-0">
                            TOP PICKS
                        </div>

                        {/* Images grid */}
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 h-full place-items-center relative">
                            
                            <div className="flex justify-center items-center flex-col text-center gap-2 ">
                            <img
                                src={Green}
                                alt="green"
                                className="md:w-[20vw] w-[40vw] h-auto object-contain z-10"
                            />
                            <div>
                                <div className='text-prim font-monsterrat text-[14px] md:text-[12px]'>Audira One</div>
                                <div className='text-prim font-bold font-monsterrat text-[12px] md:text-[8px]'>৳4590</div>
                            </div>
                            </div>

                            <div className="flex justify-center items-center flex-col text-center gap-2 ">
                            <img
                                src={Headphone}
                                alt="headphone"
                                className="md:w-[20vw] w-[40vw] h-auto object-contain z-10 opacity-0"
                            />
                            <div>
                                <div className='text-prim font-monsterrat text-[14px] md:text-[12px]'>Audira Plus</div>
                                <div className='text-prim font-bold font-monsterrat text-[12px] md:text-[8px]'>৳5590</div>
                            </div>
                            </div>


                            <div className="flex justify-center items-center flex-col text-center gap-2 ">
                            <img
                                src={Black}
                                alt="black"
                                className="md:w-[20vw] w-[40vw] h-auto object-contain z-10"
                            />
                            <div>
                                <div className='text-prim font-monsterrat text-[14px] md:text-[12px]'>Audira Max Pro</div>
                                <div className='text-prim font-bold font-monsterrat text-[12px] md:text-[8px]'>৳6590</div>
                           </div>



                            </div>

                        </div>
                        </div>

                   <div className="last-section h-screen md:h-[110vh] flex justify-center items-center">
                <div className="w-[90vw]">

                    <div className="flex flex-col md:grid md:grid-cols-[60%_40%] gap-4 w-full">

                    {/* Image */}
                    <div className="image-here w-full h-auto">
                        <img 
                        src={Image4} 
                        alt="Image 4" 
                        className="w-[80%] h-auto object-contain"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col last-text md:w-full w-[80%]">
                        <div className="text-prim font-bold font-outfit text-[18px] md:text-[35px] ">
                        PURE ESCAPE
                        </div>
                        <div className="text-prim font-monsterrat  flex flex-col gap-2 ">
                        <div className='text-[14px] md:text-[12px]'>
                            Step into a world where every note feels alive. Audira
                            headphones are engineered to create a sound experience that
                            surrounds you deep, rich, and breathtaking.
                        </div> 
                        <div className='text-[14px] md:text-[12px]'>
                            
                            Whether you're working, relaxing, or moving, our design blends
                            comfort and clarity for every lifestyle. You don’t just listen 
                            you feel the moment.
                            </div>
                        
                        </div>
                    </div>

                    </div>

  </div>
                  </div>
                  
                 <Footer />
                       

                </div>
            </div>
        </div>

              



        </div>
    );
};

export default Hero;

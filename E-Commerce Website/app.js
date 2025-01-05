// HOME PAGE JAVASCRIPT
    // Float Text
        const typed = new Typed('#element', {
          strings: ["Unleash Your Style", "Shop Outside the Box", "Discover Your Unseen Passion", "Where Trends Are Born", "Elevate Your Everyday", "Curate Your Own Happiness", "Unlock the Extraordinary", "Embrace the Unexpected", "Celebrate Your Uniqueness", "Transform Your World", "Desire Reimagined", "The Art of Self-Expression", "Stay True to You", "Think Beyond Boundaries", "Crafted with Passion", "Where Dreams Take Shape", "Dare to Be Different", "Inspire Your Inner Wanderlust", "Breathe Life into Your World", "Welcome to the Extraordinary"],
          typeSpeed: 100,
        });


    // Cart Item No.

    // Image Slider
        let imagetag = document.querySelector('.imageSlider');
        let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq5q-HgzwQPrsLW_p26wRwVj_8LIXqSGudQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xeWLTcqcwn3bfhHMr-dJ3hhdzS7acyUG5A&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-J4IuRsy1NA42Iu-p4k4O_hh4H-gbCYbBg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6bOa5Y3kjwttnxKvgEoF9AjYs8PE43WLDw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYuXPwZzyGng-oWCUdKiiNDvRFW6ZjqEiqw&s"]     
        
        let i=0

        // Image SLide After clicking the button of left/right
            function prev(){
                i--;
                if(i<0){
                    i=arr.length-1;
                }
                imagetag.src = arr[i];
            }

            function next(){
                i++;
                if(i>arr.length-1){
                    i=0;
                }
               imagetag.src= arr[i];
            }
        
        // Automatically Image Sliding
           setInterval(()=>{next()},2000);

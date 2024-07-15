# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


step-1

to create project write  ( npm create vite@latest) in cmd, then write the project name and then select react and next click in javascript+swc.


step -2

click on open in integrated terminal in left side and type (npm install) so that it will install all the dependencies in node modules folder,


step-3

to run the project write (npm run dev), so over project will be running on the bellow address.
Local:   http://localhost:5173/


step-4

once the link is opened in the external browser we need to clear the default react project.for that er needd to go to app.jsx and delete everthing .and also in app.css and index.css clear the date in it.

step=5

write (rafc) to generate the code in app.jsx and remove this statement (import React from 'react')


step=6

write the below code in index.css
body{
    margin:0;
    padding:0;
}

step-7

rename the Title name for over  website in index.html to (EV-evolution)


step=8

add the images and videos in the (assets folder) and delete the (react.svg) image.and go to public and delete this file(vite.svg).

Now the project is clean.

step=9

create the folder name (components) in (src folder) and create 3 folders in (components) that are backround,navbar,hero.and create 2 files in these 3 folders under componenets(.jsx and .css) and remove the 1st import statement after we typed and enter the (rafc) cammand.and import the (.css) file into (.jsx) file. by writing the command (import './filename.css')


step=10

now folder structure is ready.

step=11 in app.jsx

create a variable in app.jsx
=>let heroData= [
=>    {text1:"Dive into",text2:"what you love"},
=>    {text1:"Indulge",text2:"Your passions"},
=>    {text1:"Give in to",text2:"Your passions"},
=>]
because we have three images for these 3 images we need too display 3 different text.that why we added there times with different text in it.

next will write (1 used state variable)
=>const [heroCount,setHeroCount] = usestate(2);

function is (setHeroCount) in the above line code.and will initialize with 2 in (usestate(2))

will create one more usestate variable using that we can play or pause the video.
=>const [playStatus,setplayStatus]=usestate(false);
here function is (setplayStatus) and initilize with false.

in the <div> we will mount the backround component as below and we will pass the 2 props that is playStatus and heroCount.
=> <backround playStatus={playStatus} heroCount={heroCount}/>

step=12 in backround.jsx

will go to backround.jsx and we will destrucutre the props and import the assets. add the below code
=>import video1 from '../../assets/video1.mp4'


and remove the return statment as below
 =>return (
 =>   <div>
 =>     
 =>   </div>
 => )

 and the below code
 =>
 const Backround = ({ playStatus, heroCount })
 {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background" alt="" />;
  }
};
<=


step=13 in backround.css
add the css properties in backround.css


step=14 in app.jsx
in the usestae change the value to true and falce and check the output.


step=15 in nav.jsx
add the nav logo and list
=>
const Navbar = () => {
  return (
      <div className="nav">
        <div className="nav-logo">EV-evolution</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="nav-contact">Contact</li>
        </ul>
      </div>
  )
}
<=


step=16 in app.jsx
mount the nav.jsx in app.jsx


step=17 in index.html

add the link for font from google fonts as i added poopins and outfit in the link above the title
=>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins&display=swap" rel="stylesheet">
<=

add css in index.css 
  font-family: poppins;

step=18 in navbar.css
add css as below.
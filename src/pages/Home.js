
import React from 'react'
import Main from "../assets/Images/main__img.png"
import aboutImg from"../assets/Images/aboutImg.png"
import cardsImg1 from "../assets/Images/cardsImg1.png"
import cardsImg2 from "../assets/Images/cardsImg2.png"
import cardsImg3 from "../assets/Images/cardsImg3.png"
import brandImg1 from "../assets/Images/brandIngredients.png"
import brandImg2 from "../assets/Images/brandBakes.png"
import worksImg1 from "../assets/Images/worksChoose.png"
import worksImg2 from "../assets/Images/worksCall.png"
import worksImg3 from "../assets/Images/worksBake.png"
import worksImg4 from "../assets/Images/worksDone.png"
import { NavLink } from 'react-router-dom'

 const Home = () => {
  return (
  <>
 <main className='main'>
    <div className='container'>
 <div className='main__about'>
    <div className='main__leftSide'>
<h1 className='main__title'>
Fresh <br/>pastry kits
</h1>
<p className='main__desc'> 
Bringing the smells and tastes of your favourite patisserie to your home. Our kits have everything you need to easily make killer pastries every time. We’ve done the tricky bits so all you need to do is roll, proof and bake!
</p>
</div>
<div className='main__rightSide'>
<img src={Main}/>
</div>
</div>
</div>
 </main>
 <section className='works'>
<div className='container'>
<p className='works__title'>
How it works
</p>
<div className='works__wrapper'>
    <div className='works__card'>
<div className='works__img'>
<img src={worksImg1}/>
</div>
<p className='works__subtitle'>
Choose your <br/>fave
</p>
<p className='works__desc'>
This sounds easier than it's going to be. We've got all the classics on here, so now it's over to you.
</p>
    </div>
    <div className='works__card'>
<div className='works__img'>
<img src={worksImg2}/>
</div>
<p className='works__subtitle'>
Ding <br/> dong
</p>
<p className='works__desc'>
Next you'll get a beautiful little package delivered to your door, on a day and time slot that you choose.</p>
    </div>
    <div className='works__card'>
<div className='works__img'>
<img src={worksImg3}/>
</div>
<p className='works__subtitle'>
Get <br/> baked
</p>
<p className='works__desc'>
Take your fresh pastry sheet and fillings, learn our pro techniques then never buy a stale pastry ever again.</p>
    </div>
    <div className='works__card'>
<div className='works__img'>
<img src={worksImg4}/>
</div>
<p className='works__subtitle'>
Take the <br/>credit
</p>
<p className='works__desc'>
It was all you, nudge-nudge wink-wink. We're just happy to be your loyal side-kick.</p>
    </div>
</div>
<NavLink to='/shop'>
<button className='works__btn'>
Shop pastry kits
</button>
</NavLink>
</div>
 </section>
 <section className='about'>
<div className='container'>
   <div className='about__wrapper'>
   <div className='about__img'>
<img src={aboutImg}/>
    </div>
<div className='about__desc'>
<p >
Freshly baked means fresh bakery smells filling your home, warm oozey pastries on your plates, and never needing to get out of your PJs.
</p>
<NavLink to= "/shop">
<button className='about__btn'>
Shop pastry kits
</button>
</NavLink>
</div>

    
   </div>
</div>
 </section>
 <section className='cards'>
<div className='container'>
<div className='cards__wrapper'>
<div className='cards__card'>
<div className='cards__img'>
<img src = {cardsImg1}/>
</div>
<p className='cards__title'>
Better than <br/> the bakery
</p>
<p className='cards__desc'>
You’ll soon be making pastries to rival the best bakeries in town. We use only the best ingredients for generous pastries that taste and smell amazing. So good, that you’ll take all the credit.
</p>
</div>
<div className='cards__card'>
<div className='cards__img'>
<img src = {cardsImg2}/>
</div>
<p className='cards__title'>
Planet-friendly <br/> packaging
</p>
<p className='cards__desc'>
We’ve done everything we can to make sure our packaging has the lightest footprint on the planet as possible. We’ve made sure everything is recyclable, and use as little packaging as we can.</p>
</div>
<div className='cards__card'>
<div className='cards__img'>
<img src = {cardsImg3}/>
</div>
<p className='cards__title'>
Simple to bake <br/> at home
</p>
<p className='cards__desc'>
We’ve done the hard work, so you don’t have to. Every pastry is easy to make with our 3-step instructions and doesn’t require any special tools – just an oven!</p>
</div>
</div>
</div>

 </section>
 <section className='brand'>
    <div className='container'> 
    <div className='brand__wrapper'>
<div className='brand__ingredients'>
<div className='brand__ingredients__img'>
<img src={brandImg1}/>
</div>
<div className='brand__info'>
<p className='brand__ingredients__title'>
Amazing Ingredients
</p>
<p className='brand__desc'>
We like to keep things simple and authentic. We’ve sourced the very best from the very best, from our Poitou-Charentes butter to our Valrhona chocolate batons.
</p>
</div>
</div>
<div className='brand__bakes'>
<div className='brand__info'>
<p className='brand__bakes__title'>
Legendary Bakes
</p>
<p className='brand__desc'>
The inspiration for our brand and our guiding principles is the Legend of El Tarlà. A young man who brought joy to the isolated citizens of Girona during an outbreak of the plague.</p>
</div>
<div className='brand__bakes__img'>
<img src={brandImg2}/>
</div>
</div>

</div>

    </div>
 </section>
  </>
  )
}

export default Home
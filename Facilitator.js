import react from 'react'
import './Facilitator.css'
import sam from './images/sam.jpg'
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Twitter from './images/twitter.png'
import git from './images/git.jpg'
import link from './images/link.jpg'


const Facilitator = () => {
    return(
        <div className='Content'>
            <img className='samuel' src={sam} alt='sam' />
            <p><b className='text'>FACILITATOR: SAMUEL KELECHI</b></p>
            <div>
            <img className='Face' src={Facebook} alt='Facebook'/>
            <p className='text2'>:Samuel Kelechi</p>
            <img className='insta' src={Instagram} alt='Instagram'/>
            <p className='text3'>:Samuelkelechi1</p>
            <img className='twit' src={Twitter} alt='Twitter'/>
            <p className='text4'>:https://twitter.com/Samuel_Kelechi1</p>
            <div className='all'>
            <img className='git' src={git} alt='git'/>
            <p className='text5'>:https://github.com/SamuelKelechi</p>
            <img className='link' src={link} alt='link'/>
            <p className='text6'>:https://www.linkedin.com/in/samuel-kelechi/</p>
            </div>
            </div>
        </div>
    );
}
export default Facilitator;
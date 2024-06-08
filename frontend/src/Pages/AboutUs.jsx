import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import search from "../assets/search.png"
import searchhover from "../assets/searchhover.png"
import profile from "../assets/profile.png"
import profilehover from "../assets/profilehover.png"
import network from "../assets/network.png"
import networkhover from "../assets/networkhover.png"
import event from "../assets/event.png"
import eventhover from "../assets/eventhover.png"

const AboutUs = ({ darkMode, toggleDarkMode }) => {
    const [searchHovered, setSearchHovered] = useState(false);
    const [profileHovered, setProfileHovered] = useState(false);
    const [networkHovered, setNetworkHovered] = useState(false);
    const [eventHovered, setEventHovered] = useState(false);

  return (
    <div className='min-h-screen dark:bg-gradient-bg-2 dark:text-white'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div id='about-us' style={{display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '3rem'}}>
    <h1 className='about-us-heading'>About Us</h1>
    <div className='about-us-block'>
        <div className='about-us-community' onMouseOver={()=>setSearchHovered(true)} onMouseLeave={()=>setSearchHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={searchHovered ? searchhover : search} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Advanced Search and Filtering</div>
            </div>
            <p className='about-us-blk-para'>HackHive offers an advanced search and filtering system, allowing users to narrow down hackathons by tech domains, programming languages and location. This feature ensures that users can quickly find events that match their specific interests, making the process of discovering relevant hackathons seamless and efficient.</p>
        </div>
        <div className='about-us-product' onMouseOver={()=>setProfileHovered(true)} onMouseLeave={()=>setProfileHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={profileHovered ? profilehover : profile} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>User Profiles and Custom Recommendations</div>
            </div>
            <p className='about-us-blk-para'>Users can create detailed profiles on HackHive, showcasing their skills, interests, and past hackathon participation. The platform uses this information to provide custom recommendations for upcoming hackathons, ensuring that users receive personalized suggestions that align with their goals and experience levels.</p>
        </div>
    </div>
    <div className='about-us-block'>
        <div className='about-us-location' onMouseOver={()=>setEventHovered(true)} onMouseLeave={()=>setEventHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={eventHovered ? eventhover : event} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Comprehensive Event Details</div>
            </div>
            <p className='about-us-blk-para'>Each hackathon listing on HackHive includes comprehensive details such as event dates, organizers, prizes, themes, and submission guidelines. This thorough information helps participants make informed decisions about which hackathons to join and prepares them better for the challenges ahead.</p>
        </div>
        <div className='about-us-event' onMouseOver={()=>setNetworkHovered(true)} onMouseLeave={()=>setNetworkHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={networkHovered ? networkhover : network} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Community and Networking Opportunities</div>
            </div>
            <p className='about-us-blk-para'>HackHive fosters a vibrant community by offering forums, discussion boards, and networking opportunities. Participants can connect with fellow coders, share insights, form teams, and collaborate on projects. This feature enhances the hackathon experience by providing a supportive environment for learning and professional growth.</p>
        </div>
    </div>
    </div>

        <Footer/>
    </div>
  )
}

export default AboutUs
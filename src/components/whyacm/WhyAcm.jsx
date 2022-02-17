import React from 'react'
import './whyacm.css'
 
function WhyAcm() {
    return (
        <div className='whyacm'>
            <div className="heading" ><span style={{color:'goldenrod'}}>Why-</span><span style={{color:'#0089ff'}}>ACM</span></div>
            <div className="content">
                <div className="left-content" >
                    <video width={`100%`} controls>
                        <source src="images/bgvideo.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="right-content">
                    <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos natus a corporis adipisci consequatur vero sequi dicta, eveniet quibusdam velit excepturi nihil magni reiciendis id soluta. Modi, ipsa officiis!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus magni ab, distinctio quo quaerat eos repellat velit eius illo quas ducimus ex, a repellendus id et laudantium. Ut, pariatur. Nesciunt excepturi ut officiis voluptates. Similique porro mollitia eos repudiandae unde!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WhyAcm

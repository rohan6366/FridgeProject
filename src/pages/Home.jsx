import React from 'react'

function Home() {
    return (
        <div>
            <section className="section-video">

                <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="/video.mp4" type="video/mp4"/>
                    <source src="/video.webm" type="video/webm"/>
                    Your browser is not supported!
                </video>
                </div>




               
            </section>
        </div>
    )
}

export default Home

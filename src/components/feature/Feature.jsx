import  React from 'react'


const featureData = [
    {
        heading:'Superior Data',
        subHeading:'Covers all the data points meant for professional traders and investors in the market.',
        link:'/superior-data'
    },
    {
        heading:'Robust Performance',
        subHeading:'Offers high frequency data for the market with ultra low latency.',
        link:'/robust'
    },
    {
        heading:'Practicle to use',
        subHeading:'Data points available at a glance, no strangle and signal based struggle.',
        link:'/practicle-use'
    },
    {
        heading:'Performance Benchmark',
        subHeading:'Offers you live data from exchange along with charts from Trading View directly.',
        link:'/practicle-use'
    },
    {
        heading:'Superior Data',
        subHeading:'Covers all the data points meant for professional traders and investors in the market.',
        link:'/superior-data'
    },
];

 const Feature =()=>{
    return(
        <section id="feature-section-container w-screen">
            <div className="feature-section-header flex  flex-col justify-start ">
            <div className="feature-section-heading text-[50px] font-[600] leading-[60px]">Features</div>
            <div className="feature-section-sub-heading text-[20px] font-[400] text-gray-700 leading-[30px]">You have been looking for</div>
            <div className="feature-section-cards-container w-full  md:flex justify-between gap-[60px] mt-[34px]">
{
    featureData?.map((val, index)=>{
        return <FeatureCard heading={val.heading} desc={val.subHeading} id={index}/>;
    })
}
</div>
            
        </div>
            </section>
    )
 };

 export default Feature

 const FeatureCard=( {heading, desc, id})=>{
return (
    <div className="feature-card-container w-full mb-16 md:mb-[217px]  md:max-w-[290px] h-[290px] border-none  rounded-[8px] p-[26px] flex flex-col justify-end bg-gradient-to-r from-cyan-400 to-blue-600 "    key={`card-${id}`}>
    <div className="card-content-container ">
    <div className="card-content-container-heading text-[28px] font-[600] text-white leading-[42px]">{heading}</div>
    <div className="card-content-container-sub-heading text-16 leading-[24px] text-[16px] ">{desc}</div>

    </div>
    </div>
)
 }
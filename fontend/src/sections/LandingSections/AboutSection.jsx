import { dummyData } from './FeatureSection'

const AboutSection = () => {
  return (
    <section className='my-5 max-w-[1500px] mx-auto'>
        <div className="shadowinset flex items-center md:gap-5 max-md:gap-0 max-md:flex-col-reverse justify-center gap-x-3 rounded-lg border border-orange-400/80 p-5">
            <div className="w-1/2 max-md:w-full border-r max-md:border-r-0">
                <h2 className='text-orange-400 text-4xl font-bold max-md:text-3xl'>Simple and powerful</h2>
                <ul className='mt-3'>
                    {dummyData.map((data,index)=>(
                        <li className='my-5 pb-5 border-b last:border-b-0 last:pb-0' key={index}>
                            <h1 className='text-lg uppercase'>{data.title}</h1>
                            <p className='mt-2 max-w-[500px]'>{data.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 max-md:w-full">
                <iframe width="100%"
                 className='h-[500px] max-md:h-[250px] rounded-md' 
                 src="https://www.youtube.com/embed/gwi58D_YlM4?si=3zUDN89uHE7FhLyq" 
                 title="YouTube video player" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerPolicy="strict-origin-when-cross-origin" 
                 allowFullScreen>
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
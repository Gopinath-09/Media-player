import { InteractiveHoverButton } from "../../components/ui/interactive-hover-button"


const FeatureSection = () => {
  return (
    <div className="flex px-2 py-16 max-md:gap-8 md:gap-7 md:max-w-screen-2xl max-md:max-w-[400px] mx-auto autocardanimation max-md:flex-wrap">
      {dummyData.map((data, index)=>(
        <div key={index} className="p-5 space-y-5 hover:scale-105 md:hover:scale-105 hover:shadowinset transition-transform border rounded-lg border-orange-400/60">
            <img src={data.img} alt="" className="contrast-150 filter h-[250px] max-md:h-[200px] w-[150px] max-md:p-5 object-cover md:w-full max-md:w-full max-md:object-fill" />
            <h1 className="text-white text-xl font-semibold uppercase">{data.title}</h1>
            <p className="">{data.desc}</p>
            <InteractiveHoverButton className="text-black bg-orange-400">VIEW</InteractiveHoverButton>
        </div>
      ))}
    </div>
  )
}

export default FeatureSection

export const dummyData = [
    {
      img : 'https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif',
      title : 'any one',
      desc: 'Lorem ipsum dolor sit amet nihil repudiandae aut enim labore ex aliquid molestiae fugiat at beatae debitis velit.'
    },
    {
      img : 'https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif',
      title : 'any one',
      desc: 'Lorem ipsum dolor sit amet nihil repudiandae aut enim labore ex aliquid molestiae fugiat at beatae debitis velit.'
    },
    {
      img : 'https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif',
      title : 'any one',
      desc: 'Lorem ipsum dolor sit amet nihil repudiandae aut enim labore ex aliquid molestiae fugiat at beatae debitis velit.'
    },
]
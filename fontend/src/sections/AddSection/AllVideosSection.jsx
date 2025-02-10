import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid"
import { getAllVideos } from "../../../services/allAPI";
import { useEffect, useState } from "react";

function AllVideosSection() {
    const [allVideos, setAllVideos] =useState([]);
    const fetchAllVideos = async()=>{
        const result = await getAllVideos();
        setAllVideos(result?.data);
    }
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );
    useEffect(()=>{
        fetchAllVideos();
    },[]);

    return (
      <section className="px-3 py-4">
          <BentoGrid className="max-w-4xl mx-auto">
            {
              allVideos && allVideos.toReversed().map((d,i)=>(
                  <BentoGridItem
                  key={i}
                  title={d.name}
                  header={d.embededURL ? d.embededURL : <Skeleton className={'h-full'}/>}
                  className={`bg-transparent border border-orange-500/100 
                    ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
                  />
              ))
            }
          </BentoGrid>
      </section>
    )
}
export default AllVideosSection
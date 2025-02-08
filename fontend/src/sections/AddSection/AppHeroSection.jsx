import { MonitorUp } from "lucide-react";
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useState } from "react";
import { toast } from "sonner";
import { UploadVideoAPI } from "../../../services/allAPI";



const AppHeroSection = () => {
    const [videoDetails, setVideoDetails] = useState({
      name: "",
      videoURL: "",
      embededURL: ""
    });

    async function handleSubmit(e){
      e.preventDefault();
      console.log(videoDetails);
      const {name, videoURL, embededURL} = videoDetails;
      if(!name || !videoURL || !embededURL){
        toast.warning('Please fill all the fields');
      }else{
        const res = await UploadVideoAPI(videoDetails);
        console.log(res);
      }
    }
    /* function xButtonFunctionClose(){
      setVideoDetails({
        name: "",
        videoURL: "",
        embededURL: ""
      })
    } */
    return (
        <section className="my-5">
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-x-3 font-semibold text-4xl">
                    <h3>Upload New Video</h3>
                    <Dialog >
                      <DialogTrigger asChild>
                        <MonitorUp className="w-10 h-10 cursor-pointer"/>
                        {/* <Button variant="outline">Edit Profile</Button> */}
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-black">
                        <DialogHeader>
                          <DialogTitle>Add Video Details</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you are done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input onChange={(e)=>{
                              setVideoDetails({...videoDetails, name: e.target.value})
                              console.log(e.target.value)
                            }} name="name" id="name" value={videoDetails.name} className="col-span-3" required/>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Video URL
                            </Label>
                            <Input onChange={(e)=>{
                              setVideoDetails({...videoDetails, videoURL: e.target.value, embededURL:  e.target.value.replace(/youtu.be/g,"youtube.com/embed")})
                              console.log(e.target.value)
                            }} name="videoURL" id="username" value={videoDetails.videoURL} className="col-span-3" required/>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                </div>
                <div>
                  {videoDetails.embededURL && 
                  <iframe 
                    width="560" 
                    height="315" 
                    src={videoDetails.embededURL}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>}
                </div>
            </div>
        </section>
    )
}

export default AppHeroSection
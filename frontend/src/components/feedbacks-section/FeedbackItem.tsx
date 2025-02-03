import Image from "next/image"

export default function FeedbackItem() {
    return (
        <div className="w-full flex flex-col gap-y-4 overflow-hidden">
            <h3 
            data-aos="fade-up"
            className="section-text-xl">
                Upwork
            </h3>

            <div 
            data-aos="slide-right"
            data-aos-duration="1000"
            className="w-full h-[3px] bg-black"/>

            <div className="flex gap-x-2 overflow-hidden">
                <div className="flex flex-col gap-y-6 justify-between grow w-3/12">
                    <h4 
                    data-aos="fade-right" 
                    className="font-medium text-base md:text-lg lg:text-xl">
                        API Tool page
                    </h4>

                    <div 
                    data-aos="fade-in"
                    className="flex flex-col gap-y-1">
                        <p className="font-medium text-sm md:text-base lg:text-lg">Key Qualities</p>
                        <ul className="font-normal text-sm lg:text-base flex flex-wrap gap-2">
                            <li>Great</li>
                            <li>Great</li>
                            <li>Great</li>
                        </ul>
                    </div>

                    <div 
                    data-aos="fade-in"
                    className="flex flex-col gap-y-1">
                        <p className="font-medium text-sm md:text-base lg:text-lg">Score</p>

                        <div className="flex flex-wrap gap-x-2">
                            <ul className="flex gap-x-1">
                                <li>
                                    <Image 
                                    src="/images/star-icon.svg"
                                    alt="review star"
                                    width={25}
                                    height={25}
                                    />
                                </li>
                                <li>
                                    <Image 
                                    src="/images/star-icon.svg"
                                    alt="review star"
                                    width={25}
                                    height={25}
                                    />
                                </li>
                                <li>
                                    <Image 
                                    src="/images/star-icon.svg"
                                    alt="review star"
                                    width={25}
                                    height={25}
                                    />
                                </li>
                                <li>
                                    <Image 
                                    src="/images/star-icon.svg"
                                    alt="review star"
                                    width={25}
                                    height={25}
                                    />
                                </li>
                                <li>
                                    <Image 
                                    src="/images/star-icon.svg"
                                    alt="review star"
                                    width={25}
                                    height={25}
                                    />
                                </li>
                            </ul>
                            <p className="font-normal text-sm md:text-base lg:text-lg">5.0</p>
                        </div>
                    </div>
                </div>

                <div 
                data-aos="slide-down"
                data-aos-duration="1000"
                className="w-[3px] bg-black grow"/>

                <div className="w-9/12 grow flex items-center overflow-hidden">
                    <p 
                    data-aos="slide-right" 
                    className="font-normal italic text-sm md:text-base lg:text-xl leading-6 lg:leading-8">
                        “This was a great experience working with Oleh. I expected the project would just provide the ability to visualize sensor data in a graph and table, but Oleh proposed additional functionality and features, like storing the data in a Google sheet. And it was a great idea, which Oleh has successfully implemented. If you need a great front-end developer - Oleh is the right one, perfectly fits the expectations. I highly recommend hiring this guy.”
                    </p>
                </div>
            </div>
            
        </div>
    )
}
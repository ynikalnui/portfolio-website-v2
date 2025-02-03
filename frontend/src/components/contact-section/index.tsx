export default function ContactSection() {
    return (
        <section id="contact" className="section-container">
            <h2 data-aos="fade-up" className="section-title">
                Contact
            </h2>

            <form className="w-full flex flex-col gap-y-4">
                <div className="flex w-full gap-x-4">
                    <input 
                    data-aos="fade-up"
                    type="text" 
                    placeholder="Your Name"
                    className="w-1/2 py-2 border-b-2 border-black placeholder:text-center font-normal tracking-widest text-lg lg:text-xl outline-none"/>

                    <input 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    type="text" 
                    placeholder="Your Email"
                    className="w-1/2 py-2 border-b-2 border-black placeholder:text-center font-normal tracking-widest text-lg lg:text-xl outline-none"/>
                </div>
                <div className="w-full">
                    <textarea 
                    data-aos="fade-up"
                    data-aos-delay="600"
                    rows={4}
                    placeholder="Your Message"
                    className="no-scrollbar outline-none border-b-2 border-black w-full py-4 font-normal tracking-widest text-lg lg:text-xl placeholder:text-center"
                    />
                </div>
            </form>

            <button className="bg-black section-text-lg text-white py-2 px-4 w-full md:w-1/2 lg:w-1/3 mx-auto">Send Message</button>
        </section>
    )
}
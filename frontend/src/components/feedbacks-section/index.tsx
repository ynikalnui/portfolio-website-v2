import FeedbackItem from "./FeedbackItem";

export default function FeedbacksSection() {
    return (
        <section id="feedbacks" className="section-container">
            <h2 data-aos="fade-up" className="section-title">
                Feedbacks
            </h2>

            <div className="flex flex-col gap-y-4">
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
            </div>
        </section>
    )
}
const FeedbackCard = ({ title, date, content, description, technologies }) => (
  <div className="flex justify-between flex-col px-8 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <p className="text-white text-2xl font-poppins font-bold text-gradient">
      {title}
    </p>
    <p className="text-white">{date}</p>
    <p className="font-poppins font-bold text-[18px] leading-[32.4px] text-white mt-5">
      {content}
    </p>
    <p className="text-white mb-3">{description}</p>
    {technologies ? (
      <p className="text-white font-bold">
        Technologies: <span className="font-light">{technologies}</span>
      </p>
    ) : null}
  </div>
)

export default FeedbackCard

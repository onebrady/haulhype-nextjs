const WhyChooseSection = () => {
  const benefits = [
    {
      icon: "fa-solid fa-hard-hat",
      title: "Construction Industry Focus",
      description:
        "We exclusively serve construction businesses, giving us deep industry knowledge and specialized expertise.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Fast Turnaround & Support",
      description:
        "Rapid implementation and responsive support to keep your business moving without delays.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Measurable Results",
      description:
        "Clear metrics and reporting that show the real impact of our work on your bottom line.",
    },
    {
      icon: "fa-solid fa-tools",
      title: "Tailored Tools & Strategy",
      description:
        "Customized solutions that address your specific business needs and challenges.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Ongoing Partnership",
      description:
        "We're committed to your long-term success with continuous training and strategic guidance.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
            Why Choose HaulHype
          </h2>
          <p className="text-lg text-neutral-700">
            Our 5-point promise to every construction business we work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <i className={`${benefit.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

import { Button } from "@/components/ui/button";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: "fa-solid fa-desktop",
      title: "Outdated Website",
      description:
        "Slow, unresponsive websites that fail to showcase your services and generate leads.",
    },
    {
      icon: "fa-solid fa-file-invoice-dollar",
      title: "Manual Quoting",
      description:
        "Time-consuming manual processes for creating estimates and quotes for clients.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Low Conversion Rates",
      description:
        "Marketing efforts that don't generate quality leads or convert to actual business.",
    },
    {
      icon: "fa-solid fa-sitemap",
      title: "No Digital Strategy",
      description:
        "Lack of cohesive digital marketing plan to grow your business consistently.",
    },
  ];

  return (
    <section id="pain-points" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6 leading-tight">
            <span className="text-primary-600">Common Challenges</span>
            <br />
            in the Construction Industry
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Many construction businesses struggle with outdated digital presence
            and inefficient processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border shadow-card hover:shadow-hover transition duration-300"
            >
              <div className="text-secondary-500 mb-4">
                <i className={`${point.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {point.title}
              </h3>
              <p className="text-neutral-700">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-700 mb-8">
            Our industry-focused approach means we understand your unique
            challenges and can implement solutions that deliver measurable
            results.
          </p>
          <Button
            variant="default"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Request a Free Website & Marketing Audit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;

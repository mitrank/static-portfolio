import { Code2, Palette, Rocket, Users } from "../Icons";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive and beautiful user experiences",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in agile teams",
    },
  ];

  const expYear = new Date().getFullYear() - 2023;

  return (
    <section id="about" className="py-20 bg-white w-full min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 pt-10">
            <h2 className="mb-4 text-black text-xl font-semibold">About Me</h2>
            <p className="text-slate-600 max-w-2xl mx-auto pt-5">
              I'm a software developer with {expYear}+ years of experience
              building web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
          </div>

          <div className="pt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-blue-50 rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

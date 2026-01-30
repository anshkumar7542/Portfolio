import { motion } from "framer-motion";

const educationItems = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    dates: "Aug 2023 – Present",
  },
  {
    school: "Bal Vidya Niketan",
    location: "Didarganj, Patna",
    degree: "Intermediate",
    dates: "Jun 2021 – Apr 2022",
  },
  {
    school: "Satyam International School",
    location: "Gaurichak, Patna",
    degree: "Matriculation",
    dates: "Jun 2019 – Apr 2020",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-20 relative bg-card/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="font-display text-4xl md:text-5xl">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </motion.div>

        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-3 border-b border-border/60 pb-6 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">{item.school}</h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.dates}</p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p className="text-sm md:text-base text-foreground/90">{item.degree}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

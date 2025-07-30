const skills = ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Python', 'Docker', 'AWS', 'Linux'];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">スキル</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-700 text-lg font-medium px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
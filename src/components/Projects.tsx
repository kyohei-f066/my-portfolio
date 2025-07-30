import Image from "next/image";

// サンプルデータ
const projectData = [
  {
    title: 'ポートフォリオサイト',
    description: 'Next.jsとTailwind CSSを使用して作成した自身のポートフォリオサイトです。',
    imageUrl: 'https://via.placeholder.com/400x250', // あとで自分のスクリーンショットに差し替える
    link: '#',
  },
  {
    title: 'プロジェクト2',
    description: 'プロジェクト2の説明文が入ります。',
    imageUrl: 'https://via.placeholder.com/400x250',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">制作実績</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                width={400}      // ← widthプロパティを追加
                height={250}     // ← heightプロパティを追加
                className="w-full h-auto object-cover" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-sky-400 hover:text-sky-300 transition duration-300">
                  詳しく見る →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
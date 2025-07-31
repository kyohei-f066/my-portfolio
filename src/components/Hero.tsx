import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 px-4"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
        Kyohei Fujimori
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-10">
        Next.jsとTypeScriptで、未来のWebを創造するフロントエンドエンジニア
      </p>
      <div className="flex items-center space-x-6">
        <a
          href="#projects"
          className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105"
        >
          制作実績を見る
        </a>
        <a
          href="あなたのGitHubのURL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

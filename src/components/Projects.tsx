"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion"; // motionのインポートはそのまま

// ... (projectDataは変更なし)
const projectData = [
  {
    title: "ポートフォリオサイト",
    description:
      "Next.jsとVercelで構築。レスポンシブデザインとパフォーマンスを意識しました。",
    longDescription:
      "このポートフォリオは、私のフロントエンド開発スキルを示すために作成されました。Next.jsのApp Routerを使用し、静的サイト生成(SSG)のメリットを活かしています。Tailwind CSSによる効率的なスタイリングと、Vercelへの自動デプロイによるCI/CDパイプラインも構築しました。",
    imageUrl: "/images/prodact1.webp",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/kyohei-f066/my-portfolio",
  },
  {
    title: "プロジェクトB",
    description:
      "（ここにプロジェクトの説明が入ります。どんな課題を解決したかなど。）",
    imageUrl: "/images/prodact2.avif",
    tags: ["React", "Firebase", "MUI"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "プロジェクトBの詳細説明です。",
  },
  {
    title: "プロジェクトC",
    description:
      "（ここにプロジェクトの説明が入ります。API連携の工夫点など。）",
    imageUrl: "/images/prodact3.jpg",
    tags: ["Python", "Django", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "プロジェクトCの詳細説明です。",
  },
];

type Project = (typeof projectData)[0];

// アニメーションの定義
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 子要素を0.1秒ずつずらして表示
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterTag, setFilterTag] = useState("All");

  const tags = useMemo(() => {
    const allTags = projectData.flatMap((p) => p.tags);
    return ["All", ...new Set(allTags)];
  }, []);

  const filteredProjects = projectData.filter(
    (project) => filterTag === "All" || project.tags.includes(filterTag)
  );

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">制作実績</h2>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  filterTag === tag
                    ? "bg-sky-500 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* AnimatePresenceとlayoutを削除し、variantsでアニメーションを制御 */}
          <motion.div
            key={filterTag} // フィルターが変わるたびにアニメーションを再実行
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants} // 個々のカードのアニメーション
                className="bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-100">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sky-500/20 text-sky-300 text-sm font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* モーダル部分のアニメーションは有効にしてOK */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;

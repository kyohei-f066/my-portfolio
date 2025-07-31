import Image from "next/image";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// ... (型定義は変更なし)
type Project = {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-slate-800 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto relative p-8 shadow-2xl shadow-sky-900/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
        {/* ... (モーダルの内容は変更なし) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-sky-400">
              {project.title}
            </h2>
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
            <div className="flex space-x-4 mb-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
            </div>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={450}
              className="w-full object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">
              このプロジェクトについて
            </h3>
            <div className="prose prose-invert text-slate-300">
              <p>{project.longDescription}</p>
              <h4>工夫した点</h4>
              <ul>
                <li>
                  パフォーマンス向上のため、画像の遅延読み込みを実装しました。
                </li>
                <li>
                  ユーザーが直感的に操作できるよう、UIコンポーネントの配置にこだわりました。
                </li>
              </ul>
              <h4>学んだこと</h4>
              <p>
                状態管理の複雑さに直面し、よりクリーンなコードを書く重要性を学びました。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;

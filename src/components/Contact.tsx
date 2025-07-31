import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">お問い合わせ</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          ポートフォリオをご覧いただき、ありがとうございます。
          <br />
          少しでもご興味を持っていただけましたら、下記よりお気軽にご連絡ください。
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Email Button */}
          <a
            href="mailto:あなたのメールアドレス@example.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-sky-500 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {/* ホバー時の波紋エフェクト */}
            <span className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative flex items-center gap-2">
              <FiMail />
              メールを送る
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="あなたのGitHubのURL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
              title="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="あなたのLinkedInのURL（任意）"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
              title="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

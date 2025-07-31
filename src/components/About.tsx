import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/profile.png" // public/images/profile.png などにご自身の写真を配置
            alt="Kyohei Fujimori"
            width={350}
            height={350}
            className="rounded-full mx-auto shadow-lg shadow-sky-900/40 hover:shadow-sky-500/20 transform hover:-translate-y-1 cursor-pointer"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">私について</h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            （ここに自己紹介文が入ります。なぜエンジニアになったのか、どんなことに情熱を注いでいるのか、などを記述します。例：大学で情報科学を専攻し、Web技術の可能性に魅了されフロントエンド開発の道を志しました。ユーザーにとって価値のある、直感的で美しいUI/UXを追求することに情熱を注いでいます。）
          </p>
          <p className="text-slate-300 leading-relaxed">
            （今後の展望など。例：現在はパフォーマンス最適化とアクセシビリティに関心があり、すべてのユーザーが快適に使えるWebアプリケーションの開発を目指しています。）
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

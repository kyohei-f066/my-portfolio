const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">お問い合わせ</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          ご興味を持っていただけましたら、以下のメールアドレスまでお気軽にご連絡ください。
        </p>
        <a 
          href="mailto:あなたのメールアドレス@example.com"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          メールを送る
        </a>
      </div>
    </section>
  );
};

export default Contact;
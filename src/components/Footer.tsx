const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-center text-gray-500">
      <p>&copy; {currentYear} Kyohei Fujimori. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

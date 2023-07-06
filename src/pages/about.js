const AboutPage = () => {
  return (
    <div className="mx-auto container p-10">
      <h1 className="text-3xl">About</h1>
      <p className="text-2xl italic mb-3 inline-flex space-x-4">
        This project called `astro.conv` is a simple web app that allows you to
        convert your files into different formats.
        <br />
        <a href="https://github.com/FujiwaraChoki" className="text-white">
          Written by Sami Hindi
        </a>
      </p>
    </div>
  );
};

export default AboutPage;

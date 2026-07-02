const Resume = () => {
  return (
    <div className="flex flex-row gap-20 px-20 h-screen items-center ">

       <div className="w-[700px]">
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
          <iframe
            src="/resume.pdf"
            title="Resune Preview"
            className="w-full h-[600px]"
          />
        </div>
      </div>

      <div>
        <p className="uppercase tracking-[0.3em] font-mono text-sm text-gray-500">
          Resume
        </p>

        <h2 className="text-[7rem] py-5 leading-[0.8] tracking-[-0.03em] font-['League_Gothic'] font-bold mb-4">
          My Resume
        </h2>

        <p className="text-gray-600 leading-8 mb-8">
          Explore my professional experience, technical skills, education, and
          projects. <br />
          Feel free to preview my resume or download a copy.
        </p>

        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg bg-black px-6 py-3 shadow-2xl shadow-black-700 font-mono text-white hover:bg-gray-800 transition"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-lg border font-mono shadow-2xl border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            Download
          </a>
        </div>
      </div>


    </div>
  );
};

export default Resume;
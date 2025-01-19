
const About = () => {
  const skilfe = ["reactjs", "api", "tailwindcss", "nextjs"];
  const skilbe = ["django", "restfulapi", "sql"];

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-5 shadow-2xl mt-10 ">
      <div>
        <h1
          data-aos="zoom-in"
          className="judul text-center sm:text-4xl text-2xl font-bold "
        >
          About Us
        </h1>
      </div>

      <div className="sm:flex sm:justify-center gap-5 px-5">
        <div className="">
          <div
            data-aos="zoom-in"
            className="w-full flex lg:justify-end sm:justify-center"
          >
            <img              
              className="animate-pulse rounded-lg border sm:w-[500px] w-[200px]"
              src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="pt-5 w-full">
          <div data-aos="zoom-in">
            <h1 className="">
              <i className="text-xl font-bold text-customcolor">Hello!</i>  I'm a passionate Full-Stack
              Developer with a deep focus on React.js. With years of experience
              building modern, dynamic, and user-friendly web applications, I
              specialize in creating scalable and responsive solutions using
              React. seperti{" "}
              <span className="text-customcolor font-bold">frontend</span>{" "}
              dan{" "}
              <span className="text-customcolor font-bold">backend.</span>
            </h1>
            <br />
            <h1 className="font-bold">This is technology that I used in my project</h1>
          </div>
          <div className="flex flex-row gap-5">
            <div
              data-aos="flip-right"
              className="collapse border mt-5"
            >
              <input type="checkbox" />
              <h1 className="animate-pulse collapse-title text-lg text-center  font-semibold">
                FrontEnd
              </h1>
              <div className="collapse-content">
                <ul>
                  {skilfe.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              data-aos="flip-right"
              className=" collapse border mt-5"
            >
              <input type="checkbox" />
              <h1 className="animate-pulse text-center collapse-title text-lg  font-semibold">
                BackEnd
              </h1>
              <div className="collapse-content">
                <ul>
                  {skilbe.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const Penawaran = () => {
  return (
    <div className="card mt-20 flex flex-col border px-2">
      <div data-aos="zoom-in">        
        <h1 className="judul text-center font-bold sm:text-4xl text-2xl pb-10">Special Thanks</h1>
        <h1 className="badge badge-warning text-lg px-2 py-3">
          framework dan library
        </h1>     
      </div>
        <div data-aos="zoom-in" className="grid grid-cols-2">
          <div>
            <p className="pt-5">
              {" "}
              <span className="text-customcolor font-bold text-xl">I hope</span> this will be a good step for me to get a job at the
              Companies technology in many country.
            </p>
          </div>          
        </div>

        <div data-aos="fade-right" className="flex flex-col sm:flex-col lg:flex-row lg:justify-center">
        <div  className="pt-5 m-3 flex flex-col sm:flex-row gap-2">
          <div>
            <img className="bg-white rounded-full border w-[200px]" src="../Png/nextjs.png" alt="" />
          </div>
          <div>
            I think <span className="text-customcolor font-bold text-xl">NextJs</span> provide to me a lot of things that I need to development Website,like frontend and backend
          </div>
          <div className="mockup-code">
            <pre data-prefix="1"><code>npx create-next-app@latest</code></pre>
            <pre data-prefix="2" className="text-yellow-400"><code>installing...</code></pre>
            <pre data-prefix="3" className="text-yellow-400">done</pre>
          </div>
        </div>

        <div className="pt-5 m-3 flex flex-col sm:flex-row gap-2">
          <div>
            <img className=" w-[200px]" src="../Png/react.png" alt="" />
          </div>
          <div className="text-justify">
            I think <span className="text-customcolor font-bold text-xl">Reactjs</span> provide many library to combine for cool UI/UX and animated and have big Community
          </div>
          <div className="text-sm mockup-code">
            <pre data-prefix="1"><code>npm install -g create-react-app
            </code></pre>
            <pre data-prefix="2" className="text-yellow-400"><code>npx create-react-app my-app
            </code></pre>
            <pre data-prefix="3" className="text-yellow-400">Installing...</pre>
            <pre data-prefix="4" className="text-yellow-400">done</pre>
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default Penawaran;

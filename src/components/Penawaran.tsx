

const Penawaran = () => {
 
  return (
    <div className="mt-20 grid sm:grid-cols-4 gap-5 pt-5 pb-5 ">
      <div className="col-span-2">
        <h1 className="sm:text-4xl text-2xl pb-3">Special Thanks</h1>
        <h1 className="badge badge-warning text-lg px-2 py-3">
          framework dan library
        </h1>
        <p className="pt-5">
          {" "}
          I hope this will be a good step for me to get a job at the Companies technology in many country. 
        </p>
      </div>
      <div className="sm:cols-span-2 col-span-4 card">
        <div className="flex flex-col sm:flex-row lg:px-56  gap-5 items-center card-body">
          <div>
            {" "}
            <img
              width={100}
              className="border rounded-full bg-white"
              src="../Png/nextjs.png"
              alt=""
            />
          </div>
          
          <div>
            <h5 className="card-title">NextJs Version 15</h5>
            <p>This Framework is very good for me to build a website</p>
          </div>
             <div className="mockup-code">
                  <pre data-prefix="$">
                    <code>npx create-next-app@latest</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>installing...</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>Done!</code>
                  </pre>
            </div>

        </div>
        
      </div> 

      
     
    </div>
  );
};

export default Penawaran;

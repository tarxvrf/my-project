import { useRef } from "react";

const Slogan = () => {
  const refmodal = useRef<HTMLDialogElement>(null);
  const refmodal3 = useRef<HTMLDialogElement>(null);
  const refmodal2 = useRef<HTMLDialogElement>(null);

  function handlemodal(): void {
    if (refmodal.current) {
      refmodal.current.showModal();
    }
  }

  function handlemodal3(): void {
    if (refmodal3.current) {
      refmodal3.current.showModal();
    }
  }

  function handlemodal2(): void {
    if (refmodal2.current) {
      refmodal2.current.showModal();
    }
  }
  return (
    <div className="slogan mt-20 mx-2">
      <h1 data-aos="zoom-in" className="judul sm:text-4xl text-2xl font-bold text-center">
        Technology Used
      </h1>
      <div className="grid sm:grid-cols-3 gap-5 sm:gap-10 pt-10">
        <div className="card bg-transparent border shadow-2xl ">
          <div className="card-body">
            <div className="card-title flex flex-col justify-center text-2xl">
              <img
                role="button"
                onClick={handlemodal}
                className="animate-bounce w-[200px]"
                src="../Png/react.png"
                alt=""
              />
              <dialog ref={refmodal} id="mymodal" className="modal ">
                <div className="modal-box border border-warning bg-slate-200">
                  <img
                    role="button"
                    className="w-full"
                    src="../Png/react.png"
                    alt=""
                  />
                  <p className="dialogcolor font-thin">
                    React.js is a JavaScript library used to build user
                    interfaces, especially for single-page applications (SPAs).
                    Use: It allows developers to create reusable UI components
                    and manage the state of the application efficiently.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-warning">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <h1>Reactjs</h1>
            </div>
          </div>
        </div>
    
        <div className="card bg-transparent border shadow-2xl ">
          <div className="card-body">
            <div className="card-title flex flex-col justify-center text-2xl">
              <img
                role="button"
                onClick={handlemodal2}
                className="border bg-white rounded-full animate-bounce w-[110px]"
                src="../Png/nextjs.png"
                alt=""
              />
              <dialog ref={refmodal2} id="mymodal" className="modal ">
                <div className="modal-box border border-warning bg-slate-200">
                  <img
                    role="button"
                    className="w-full"
                    src="../Png/nextjs.png"
                    alt=""
                  />
                  <p className="dialogcolor font-thin">
                    Next.js is a React framework that helps you build web
                    applications with features like server-side rendering (SSR),
                    static site generation (SSG), and automatic code splitting.
                    
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-warning">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <h1>Reactjs</h1>
            </div>
          </div>
        </div>

        <div className="card bg-transparent border shadow-2xl ">
          <div className="card-body">
            <div className="card-title flex flex-col justify-center text-2xl">
              <img
                role="button"
                onClick={handlemodal3}
                className="rounded-xl animate-bounce w-[110px]"
                src="../Png/vercel.png"
                alt=""
              />
              <dialog ref={refmodal3} id="mymodal" className="modal ">
                <div className="modal-box border border-warning bg-slate-200">
                  <img
                    role="button"
                    className="w-full"
                    src="../Png/vercel.png"
                    alt=""
                  />
                  <p className="dialogcolor font-thin">
                    Vercel is a platform for frontend developers that makes it
                    easy to deploy and host websites, applications, and static
                    sites. It is particularly popular for Next.js applications,
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-warning">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <h1>Vercel</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;

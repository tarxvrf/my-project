import { useRef } from "react";

const Portofolio = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const dialog2 = useRef<HTMLDialogElement>(null);
  const dialog3 = useRef<HTMLDialogElement>(null);

  function handledialog(): void {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }
   function handledialog2(): void {
    if (dialog2.current) {
      dialog2.current.showModal();
    }
  }
  function handledialog3(): void {
    if (dialog3.current) {
      dialog3.current.showModal();
    }
  }

  return (
    <div className="px-5 mt-20 pt-10 pb-5 rounded-xl shadow-2xl">
      <h1
        data-aos="zoom-in"
        className="judul sm:text-4xl text-2xl font-bold text-center"
      >
        Portofolio
      </h1>
      
      <div className="flex flex-wrap justify-center py-10 gap-5 ">
        <div className="text-xl p-4 badge badge-warning mt-5 animate-pulse ">Certificate</div>
        <div data-aos="flip-left" className="mt-10 mb-10">
          <div>
            {" "}
            <img
              role="button"
              onClick={handledialog}
              className="w-80 "
              src="../Png/dicoding.png"
              alt=""
            />
            <dialog ref={dialog} className="modal">
              <div className="modal-box font-thin dialogcolor bg-slate-200  outline outline-2 outline-yellow-600 ">
                <img src="../Png/dicoding2.png" className="w-full" alt="" />
                <p className="pt-5">
                  This certificate is a proof that I have completed the course
                  about make a website from dicoding{" "}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-warning">close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div data-aos="flip-right" className="mt-10 mb-10">
          <div>
            {" "}
            <img
              role="button"
              onClick={handledialog2}
              className="w-80"
              src="../Png/kelastambahan.png"
              alt=""
            />
            <dialog ref={dialog2} className="modal">
              <div className="modal-box font-thin dialogcolor bg-slate-200  outline outline-2 outline-yellow-600 ">
                <img src="../Png/kelastambahan.png" className="w-full" alt="" />
                <p className="pt-5">
                  This certificate is a proof that I have completed the course about how become ReactJS Freelancer
                 
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-warning">close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div data-aos="flip-right" className="mt-10 mb-10">
          <div>
            {" "}
            <img
              role="button"
              onClick={handledialog3}
              className="w-80"
              src="../Png/Hackerank.png"
              alt=""
            />
            <dialog ref={dialog3} className="modal">
              <div className="modal-box font-thin dialogcolor bg-slate-200  outline outline-2 outline-yellow-600 ">
                <img src="../Png/Hackerank.png" className="w-full" alt="" />
                <p className="pt-5">
                  This certificate is a proof that I have completed the course about how become Python in <span className="font-bold">HackerRank</span>
                 
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-warning">close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div className="text-xl p-4 badge badge-warning mb-3">Example Project</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          data-aos="flip-down"
          className="card flex flex-col gap-3 border py-3 px-2 "
        >
          <div className="flex justify-center">
            <img className="rounded-lg" src="../assets/image.png" alt="" />
          </div>
          <h4>This is simple calculator, I made this use Reactjs</h4>
          <a
            role="button"
            className="btn w-1/4 btn-warning"
            href={"https://browiwitapps.vercel.app/"}
          >
            visit
          </a>
        </div>
        <div
          data-aos="flip-up" className="card flex flex-col gap-3 border py-3 px-2"
        >
          <div className="flex justify-center">
            <img className="rounded-lg" src="../assets/image1.png" alt="" />
          </div>
          <h4>This is simple Music Player, made this use Reactjs</h4>
          <a
            role="button"
            className="btn w-1/4 btn-warning"
            href={"https://browiwit-music-player.vercel.app/"}
          >
            visit
          </a>
        </div>
        <div
          data-aos="flip-up" className="card flex flex-col gap-3 border py-3 px-2"
        >
          <div className="flex justify-center">
            <img width={200} className="rounded-lg" src="../assets/bgsholat.png" alt="" />
          </div>
          <h4>This is simple Time Prayer with API, made this use Reactjs</h4>
          <a
            role="button"
            className="btn w-1/4 btn-warning"
            href={"https://jadwalsholat-six.vercel.app/"}
          >
            visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;

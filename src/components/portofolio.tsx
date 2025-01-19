
const Portofolio = () => {
  return (
    <div className="px-5 mt-20 pt-10 pb-5 rounded-xl shadow-2xl">
      <h1
        data-aos="zoom-in"
        className="judul sm:text-4xl text-2xl font-bold text-center"
      >
        Portofolio
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 ">
        <div
          data-aos="flip-right"
          className="card flex flex-col gap-3 border py-3 px-2 "
        >
          <div className="flex justify-center">
            <img className="rounded-lg" src="../assets/image.png" alt="" />
          </div>
          <h4>
            This is simple calculator, I made this use Reactjs
          </h4>
          <a role="button" className="btn w-1/4 btn-warning" href={"https://browiwitapps.vercel.app/"}>lihat</a>
        </div>
        <div
          data-aos="flip-right"
          className="card flex flex-col gap-3 border py-3 px-2"
        >
          <div className="flex justify-center">
            <img className="rounded-lg" src="../assets/image1.png" alt="" />
          </div>
          <h4>
          This is simple Music Player,  made this use Reactjs
          </h4>
          <a role="button" className="btn w-1/4 btn-warning" href={"https://browiwit-music-player.vercel.app/"}>lihat</a>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;



const Login = () => {
  return (
    <div className="flex justify-center items-center pt-20 sm:pt-52">
       <div className="card bg-base-200 w-full sm:max-w-sm max-w-xs shadow-2xl">
        <div className="card-title flex justify-center mt-2">
         <label className="label text-2xl">Please Login First</label>
        </div>
        <form action="" className="card-body">          
          <div className="form-control">
            <label className="label">Email</label>
            <input type="email" placeholder="email" className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">password</label>
            <input type="email" placeholder="password" className="input input-bordered" required />
          <label className="label mt-1 link-hover"><a href="">forgot password</a></label>
          </div>
          <div className="form-control mt-6">          
            <button className="btn btn-primary">klik</button>
          </div>

        </form>
       </div>
    </div>
  )
}

export default Login

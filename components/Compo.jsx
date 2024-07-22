import Compon from "../index.json"
function Compo() {
    console.log(Compon)
  return (
    <div className="div-1">
    {Compon.map((data)=>{
        return (
            <div key={data.id} className="div-2  drop-shadow-md hover:drop-shadow-2xl">
      
<div class="card bg-base-100 shadow-xl">
  <figure>
    <img className="w-full"
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="pb-3 pt-3">
    <p className="n flex px-3 items-center textz"><p className="font-bold texts">Name:</p><p className=" text">{data.lastName}</p></p>
    <p className="flex px-3 items-center textz"><p className="font-bold texts">Email:</p><p className=" text">{data.email}</p></p>
    <p className="flex px-3 items-center textz"><p className="font-bold texts">Nomer:</p><p className=" text">{data.phone}</p></p>
   
  </div>
</div>
            </div>
        )
    })}
    </div>
  )
}
export default Compo
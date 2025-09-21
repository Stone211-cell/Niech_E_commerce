const page = ({params} : {params:{id:string}}) => {
    const {id} = params
  return (
    <div>สินค้าของเรา{id}</div>
  )
}
export default page
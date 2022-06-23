import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequuntur dolor fugiat aliquid nisi possimus sapiente ab beatae laboriosam ducimus, inventore eum hic quisquam, provident accusamus exercitationem eos asperiores quibusdam!</p>
    </div>
  )
}

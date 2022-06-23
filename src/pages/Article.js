import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'


export default function Article() {
  const { id } = useParams()
  const url = `http://localhost:3000/articles/${id}`
  const { data: article, isPending, error } = useFetch(url)
  const navigate = useNavigate()

  useEffect(() => {
    if (error) { // this runs when the component is first loaded so we need to check there's an error not to redirect right away
      setTimeout(() => {
        navigate("/")
      }, 2000);
    }
  }, [error, navigate])

  return (
    <div>
      {isPending && <div>Loading.........</div>}
      {error && <div>{error}</div>}
      {article && (
        <div className="">
          <h2>{article.title}</h2>
          <p className="">By {article.author}</p>
          <p className="">{article.body}</p>
        </div>
      )}
    </div>
  )
}

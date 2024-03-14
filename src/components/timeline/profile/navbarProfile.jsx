import { useData } from "../../../hooks/useData"

export default function NavbarProfile() {


  const { isLogin,filter, setFilter } = useData()
  const filterOptions = ["Posts", "Answers", "Medias", "Likes"]
  return (
    <>
      <div className="navbar-profile">
        <ul className="tweet-title-details">
          {filterOptions.map((option) => (
            <li key={option} className={`${option === filter ? "active navbar-profile-color" : ""}`}>
              <button
                onClick={() => {
                  setFilter(option)
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
       
      </div>
    </>
  )
}

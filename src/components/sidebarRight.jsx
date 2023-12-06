export default function SidebarRight() {
  const usersToFollow = [
    {
      name: "Utilisateur1",
      username: "@utilisateur1",
    },
    {
      name: "Utilisateur2",
      username: "@utilisateur2",
    },
    {
      name: "Utilisateur3",
      username: "@utilisateur3",
    },
  ]
  const trends = ["#Tendance1", "#Tendance2", "#Tendance3", "#Tendance4"]

  return (
    <div>
      <div>
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div>
        <h3>Trends for you</h3>
        <ul>
          {trends.map((trend) => (
            <li key={trend}>{trend}</li>
          ))}
        </ul>
        <a href="">Show more</a>
      </div>
      <div className="who-to-follow">
        <h3>Who to follow</h3>
        <ul>
          {usersToFollow.map((user) => (
            <li key={user.username}>
              <span>{user.name}</span>
              <span>{user.username}</span>
              <button>Follow</button>
            </li>
          ))}
        </ul>
        <a href="">Show more</a>
      </div>
    </div>
  )
}

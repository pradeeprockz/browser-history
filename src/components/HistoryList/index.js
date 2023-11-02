const HistoryList = props => {
  const {userDetails, deleteUser} = props
  return (
    <li className="user-card-container">
      <div key={userDetails.id} className="history-item">
        <img src={userDetails.logoUrl} alt="domain logo" />
        <div className="history-info">
          <p>{userDetails.title}</p>
          <p>{userDetails.domainUrl}</p>
          <p>{userDetails.timeAccessed}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={() => deleteUser(userDetails.id)}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            data-testid="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryList

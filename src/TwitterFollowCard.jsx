import "./TwitterFollowCard.css";

export function TwitterFollowCard({ children, userName, isFollowing }) {
  const imageSrc = `https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4${userName}`;
  // const addAt = (userName) => `@${userName}`


  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt="avatar tom" src={imageSrc} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}

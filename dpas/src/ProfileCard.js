function ProfileCard(props) {
  return (
    <div className="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src={props.imageSrc} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{props.title}</p>
          <p className="subtitle is-6">{props.handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

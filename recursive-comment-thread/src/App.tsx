import comments from "./comments.json";
import users from "./users.json";

function App() {
  return (
    <div className="App">
      <main>
        <div className="post">
          <p className="posted-by">Posted by JacobBroughton 3d ago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="comments">
          {comments.map((comment, index) => {
            const user = users.find((u) => u.id === comment.user_id);

            return (
              <div className="comment">
                <div className="profile-pic-and-username">
                  <div className="profile-pic"></div>
                  <p className="username">
                    {user ? user.username : `User ${comment.user_id}`}
                  </p>
                </div>
                <p className='body'>{comment.body}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

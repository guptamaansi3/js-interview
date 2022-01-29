// level {1/2/3}
// chosen level 2

async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());

  let [user, profile, p] = doc;

  const userProfile = {
    user,
    profile,
    posts: p,
  };

  return userProfile;
}

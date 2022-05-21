import { ReposContainer, RepoBox, RepoName, RepoDescription } from "./styles";

const Repos = ({ currentRepos }) => {
  return (
    <ReposContainer>
      {currentRepos &&
        currentRepos.map((repo) => (
          <RepoBox key={repo.id}>
            <RepoName href={repo.html_url} target="_blank">
              {repo.name}
            </RepoName>
            <RepoDescription>
              {repo.description ? repo.description : "The best app"}
            </RepoDescription>
          </RepoBox>
        ))}
    </ReposContainer>
  );
};

export default Repos;

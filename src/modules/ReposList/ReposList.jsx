import { StyledReposList, RepoBox, RepoName, RepoDescription } from "./styles";

const ReposList = ({ currentRepos }) => {
  return (
    <StyledReposList>
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
    </StyledReposList>
  );
};

export default ReposList;
